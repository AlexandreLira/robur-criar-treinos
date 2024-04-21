import { ReactNode, createContext, useEffect, useState } from "react";





export type AuthContextDataProps = {
    steps: string[];
    position: number;
    handleNextStep: () => void
    handlePreviusStep: () => void
}

type FormContextProviderProps = {
    children: ReactNode
}


export const FormContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function FormContextProvider({ children }: FormContextProviderProps) {
    const [position, setPosition] = useState(0)

    const steps = [
        'Objetivo',
        'Gênero',
        'Medidas',
        'Experiencia',
        'Final'
    ]
    
    function handleNextStep() {
        const number = position + 1
        if (number == steps.length + 1) return
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
                position,
                steps
            }}
        >
            {children}
        </FormContext.Provider>
    )
}