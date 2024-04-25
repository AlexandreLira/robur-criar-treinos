import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";

import { styles } from "./WorkoutPlanStyles";
import { create_train } from "../../service/openai";
import { useForm } from "../../hooks/useForm";
import { theme } from "../../theme";

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
    const [plan, setPlan] = useState<PlanType[]>([])
    const { data } = useForm()


    async function create() {
        try {
            setLoading(true)
            const response = await create_train(data)
            setPlan(response.data)
        } catch {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
       create()
    }, [])


    if (loading) {
        return (
            <View style={[styles.container]}>
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.secodanry]}
                    style={{ justifyContent: 'center', alignItems: 'center', gap: 24, flex: 1, }}
                    start={[0.0, 0.0]}
                    end={[1.0, 1.0]}
                >
                    <ActivityIndicator color={theme.colors.shape} size={"large"} />
                    <Text style={[styles.label, { color: theme.colors.shape }]}>Estamos criando seu treino...</Text>

                </LinearGradient>
            </View>
        )
    }



    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false} >
                <View style={{ gap: 16 }}>

                    {plan.map((item, index) =>

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
                                {item.duration &&
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