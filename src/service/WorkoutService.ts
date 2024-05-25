import AsyncStorage from "@react-native-async-storage/async-storage";
import { IWorkout } from "../contexts/WorkoutContext";
import { create_train } from "./openai";
import { FormData } from "../contexts/FormContext";

const workout_key = "robur-fit:workout"

export class WorkoutService {
    static async get(): Promise<IWorkout[]> {
        try {
            const response = await AsyncStorage.getItem(workout_key)

            if(!response) {
                return []
            }

            const workout: IWorkout[] = JSON.parse(response)

            return workout
        } catch (error) {
            return []
        }

    }

    static async create(data: FormData) {
        try {
            const response = await create_train(data)

            const workout = response.data

            await AsyncStorage.setItem(workout_key, JSON.stringify(workout))

            return workout
        } catch (error) {
            console.log(error)
        }
    }
}