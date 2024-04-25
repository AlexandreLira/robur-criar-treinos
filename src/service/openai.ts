import OpenAI from "openai";
import { FormData } from "../contexts/FormContext";

const openai = new OpenAI({ apiKey: process.env.EXPO_PUBLIC_API_KEY });



const response_json_exemple = {
    data: [
        {
            "day": 1,
            "name": "Agachamento Livre",
            "series": 3,
            "repetitions": 10
        },
        {
            "day": 1,
            "name": "Supino Reto",
            "series": 3,
            "repetitions": 10
        },
        {
            "day": 1,
            "name": "Remada Curvada",
            "series": 3,
            "repetitions": 10
        },
        {
            "day": 2,
            "name": "Levantamento Terra",
            "series": 3,
            "repetitions": 8
        },
        {
            "day": 2,
            "name": "Desenvolvimento com Barra",
            "series": 3,
            "repetitions": 8
        },
        {
            "day": 2,
            "name": "Pull-ups",
            "series": 3,
            "repetitions": "até a falha"
        },
        {
            "day": 3,
            "name": "Agachamento Frontal",
            "series": 3,
            "repetitions": 12
        },
        {
            "day": 3,
            "name": "Supino Inclinado",
            "series": 3,
            "repetitions": 10
        },
        {
            "day": 3,
            "name": "Barra Fixa",
            "series": 3,
            "repetitions": "até a falha"
        }
    ]
}


export async function create_train(data: FormData) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
            {
                role: "system",
                content:
                    `Você é um assistente útil que gera treinos de academia com base em nas características do aluno. Forneça sua resposta em uma estrutura JSON como esta ${JSON.stringify(response_json_exemple)}`,
            },
            {
                role: "user",
                content:
                    ` 
                     Crie um treino para um aluno com as seguintes características.
                    - Objetivo: Ganhar Peso
                    - Nivel: Iniciate
                    - Gênero: Masculino
                    - Idade: 23
                    - Altura: 1.60
                    - Peso: 80 kg`,
            },
            {
                role: "assistant",
                content:
                    `${JSON.stringify(response_json_exemple)}`,
            },
            {
                role: "user",
                content: ` 
                Crie um treino para um aluno com as seguintes características.
               - Objetivo: ${data.objective.value}
               - Nivel: ${data.experience.value}
               - Gênero: ${data.gender.value}
               - Idade: ${data.age.value}
               - Altura: ${data.stature.value}
               - Peso: ${data.weight.value} kg`,
            },
        ],
    });



    const message = response.choices[0].message

    return JSON.parse(message.content!)

}
