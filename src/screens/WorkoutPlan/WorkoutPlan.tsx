import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import Animated, { FadeIn, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

import { styles } from "./WorkoutPlanStyles";
import { create_train } from "../../service/openai";
import { useForm } from "../../hooks/useForm";
import Logo from '../../assets/loading.png';
import { theme } from "../../theme";
import { WorkoutService } from "../../service/WorkoutService";
import { useWorkout } from "../../hooks/useWorkout";

const a = { day: 1, name: 'Agachamento Livre', series: 3, repetitions: 12 }

type PlanType = {
    day: number
    name: string
    series?: number
    repetitions?: number
    duration?: string
}

const img = 'https://static.wixstatic.com/media/2edbed_0071b46ea32c4f3b9e6d1af5c2cd70ea~mv2.webp';


export function WorkoutPlan() {

    const [loading, setLoading] = useState(true)
    const { data } = useForm()
    const spin = useSharedValue(0);
    const spin2 = useSharedValue(0);

    const { setWorkout, workout } = useWorkout()

    const stylez = useAnimatedStyle(() => {
        return {
            height: interpolate(spin2.value, [0, 360], [200, 100]),
            transform: [
                {
                    rotateZ: `${spin.value}deg`,
                },

            ],
        };
    });


    async function create() {
        try {
            setLoading(true)
            const b = await WorkoutService.create(data)

            setWorkout(b)
        } catch {

        } finally {
            setLoading(false)
        }
    }

    function startAnimation() {
        if (loading) {
            const timing = 3000
            spin.value = withRepeat(withTiming(360, { duration: timing }), -2, false);
            spin2.value = withRepeat(withTiming(360, { duration: timing }), -2, true);
        }
    }

    useEffect(() => {
        startAnimation()
        create()
    }, [])


    if (loading) {
        return (
            <View style={[styles.container]}>
                <View style={{ width: 200, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Animated.Image source={Logo} style={stylez} resizeMode="contain" />
                </View>

                <Text
                    style={{
                        color: theme.colors.gray,
                        fontWeight: 'bold',
                        marginTop: 24
                    }}

                >Estamos criando seu treino...</Text>
            </View>
        )
    }



    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false} >
                <View style={{ gap: 16 }}>

                    {workout.map((item, index) =>

                        <Animated.View
                            key={item.name}
                            style={styles.card}
                            entering={FadeIn.delay(100 * index)}
                        >

                            <Image source={{ uri: img }} style={{ width: 60, aspectRatio: 1 }} />
                            <View style={{ height: 50, justifyContent: 'space-between' }}>

                                <Text style={styles.title}>{item.name}</Text>
                                {item.repetitions &&
                                    <Text style={styles.label}>{`${item.series} Séries X ${item.repetitions} repetições`}</Text>
                                }
                                {item?.duration &&
                                    <Text style={styles.label}>{`${item.series} Séries X ${item.duration}`}</Text>
                                }
                            </View>
                        </Animated.View>
                    )}
                </View>
            </ScrollView>
        </View >
    )
}