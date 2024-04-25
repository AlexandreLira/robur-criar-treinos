import { ReactNode, createContext, useEffect, useState } from "react";

export type ItemType = {
    key: string;
    label: string;
    value: string;
    icon?: string;
}

export type FormData = {
    objective: ItemType;
    gender: ItemType;
    experience: ItemType;
    age: ItemType;
    weight: ItemType;
    stature: ItemType;
}

export type AuthContextDataProps = {
    steps: string[];
    position: number;
    handleNextStep: () => void
    handlePreviusStep: () => void;
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
}

type FormContextProviderProps = {
    children: ReactNode
}


export const FormContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function FormContextProvider({ children }: FormContextProviderProps) {
    const [position, setPosition] = useState(0)
    const [data, setData] = useState<FormData>({} as FormData)

    const steps = [
        'Objetivo',
        'Gênero',
        'Experiencia',
        'Medidas',
        'Fim'
    ]


    function handleNextStep() {
        const number = position + 1
        if (number == steps.length) return
        setPosition(number)
    }
    function handlePreviusStep() {
        const number = position - 1
        if (number == -1) return
        setPosition(number)
    }

    return (
        <FormContext.Provider
            value={{
                handleNextStep,
                handlePreviusStep,
                setData,
                position,
                steps,
                data,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}