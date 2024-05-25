import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./WorkoutStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { ExerciseCard } from "../../components/ExerciseCard";
import { useWorkout } from "../../hooks/useWorkout";
import { useNavigation } from "@react-navigation/native";

const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

export function Workout() {
    const [selected, setSelected] = useState<number | null>(null)
    const [exercises, setExercises] = useState([])
    const { workout, loading } = useWorkout()

    const navigation = useNavigation()

    function handleSelectedDay(day: number) {
        const a = workout.filter(item => item.day == day)
        setExercises(a)
        setSelected(day)
    }

    useEffect(() => {
        if (workout.length === 0 && !loading) {
            navigation.navigate('Form')
        }
    }, [workout])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Meu Treino</Text>
            </View>
            <View style={styles.content}>


                <View style={styles.calendar}>
                    {Array(7).fill('').map((item, index) => {
                        const date = new Date()
                        date.setDate(date.getDate() + index)
                        const day = date.getDate()
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.calendar_item, index == selected && styles.selected]}
                                onPress={() => handleSelectedDay(index)}
                            >
                                <Text style={styles.calendar_text}>{days[date.getDay()]}</Text>
                                <Text style={styles.calendar_number}>{day}</Text>
                            </TouchableOpacity>
                        )
                    }

                    )}
                </View>

                <Text>Exercícios</Text>
                <ScrollView contentContainerStyle={{ gap: 12 }} style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                    {exercises.map(item =>
                        <ExerciseCard data={item} key={item.name} />
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export const workout = 'workout'