import { ItemType } from "../contexts/FormContext"

const measurements: ItemType[] = [
    {
        key: 'age',
        label: 'Idade',
        value: '',
    },
    {
        key: 'weight',
        label: 'Peso',
        value: '',
    },
    {
        key: 'stature',
        label: 'Altura',
        value: '',
    },
]

const objectives: ItemType[] = [
    {
        key: '1',
        label: 'Objetivo',
        icon: '🥑',
        value: 'Perder Gordura'
    },
    {
        key: '2',
        label: 'Objetivo',
        icon: '🏃',
        value: 'Ficar em Forma'
    },
    {
       
        key: '3',
        icon: '💪',
        value:  'Construir Músculos',
        label: 'Objetivo',
    },
]

const genders: ItemType[] = [
    {
        key: '1',
        icon: '👨',
        label: 'Gênero',
        value: 'Masculino'
    },
    {
        key: '2',
        icon: '👩',
        label: 'Gênero',
        value: 'Feminino'
    },
]

const experiences: ItemType[] = [
    {
        key: '1',
        icon: '🐣',
        label: 'Experiencia',
        value: 'Sedentária',
    },
    {
        key: '2',
        icon: '🐥',
        label: 'Experiencia',
        value: 'Levemente ativo',
    },
    {
        key: '3',
        icon: '🐓',
        label: 'Experiencia',
        value: 'Moderadamente ativo',
    },
    {
        key: '4',
        icon: '💪',
        label: 'Experiencia',
        value: 'Fortemente ativo',
    },
    {
        key: '5',
        icon: '🐭',
        label: 'Experiencia',
        value: 'Extremamente ativo',
    },
]


export const options = {
    measurements,
    objectives,
    genders,
    experiences
}



