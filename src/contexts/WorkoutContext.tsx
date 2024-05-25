import { ReactNode, createContext, useEffect, useState } from "react";
import { WorkoutService } from "../service/WorkoutService";

interface WorkoutDataProps {
    workout: IWorkout[]
    loading: boolean;
    setWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>
}

interface WorkoutContextProviderProps {
    children: ReactNode
}



export interface IWorkout {
    day: number;
    name: string;
    series: number;
    repetitions: number;
}

export const WorkoutContext = createContext<WorkoutDataProps>({} as WorkoutDataProps)


export function WorkoutContextProvider({ children }: WorkoutContextProviderProps) {

    const [workout, setWorkout] = useState<IWorkout[]>([])
    const [loading, setLoading] = useState(true)

    async function load() {
        setLoading(true)
        const reponse = await WorkoutService.get()

        setWorkout(reponse)
        setLoading(false)
    }

    useEffect(() => {

        load()
    }, [])

    return (
        <WorkoutContext.Provider value={{ workout, setWorkout, loading }}>
            {children}
        </WorkoutContext.Provider>
    )

}