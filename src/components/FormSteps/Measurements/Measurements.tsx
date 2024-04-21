import { Text, View } from "react-native";
import { RulerPicker } from 'react-native-ruler-picker';

import { useState } from "react";
import { styles } from "./MeasurementsStyles";
import { Select } from "../../Select";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button";



const options = [
    {
        value: 'Idade',
        key: 'age'
    },
    {
        value: 'Peso',
        key: 'weight'
    },
    {
        value: 'Altura',
        key: 'stature'
    },

]

export function Measurements() {
    const [selected, setSelected] = useState(options[0])

    const [modals, setModals] = useState({
        age: false,
        weight: false,
        stature: false,
    })

    const modal = {
        open: (modal: keyof typeof modals) => {
            setModals(state => ({ ...state, [modal]: true }))
        },
        close: (modal: keyof typeof modals) => {
            setModals(state => ({ ...state, [modal]: false }))
        },
    }

    return (
        <>

            <Text style={styles.title}>
                Conte-me mais sobre você.
            </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    {options.map((item, index) =>
                        <Select
                            key={item.value}
                            title={item.value}
                            selected={index == 1}
                            value={index == 1 ? '23' : 'Selecione'}
                            onPress={() => setModals(state => ({ ...state, [item.key]: true }))}
                        />
                    )}
                </View>
            </View>

            <Modal
                isOpen={modals.age}
                onClosed={() => setModals(state => ({ ...state, age: false }))}
            >


                <RulerPicker
                    min={0}
                    max={280}
                    unit="cm"
                    initialValue={100}
                    fractionDigits={0}
                    // height={260}
                // onValueChange={(number) => console.log(number)}
                // onValueChangeEnd={(number) => console.log(number)}
                />

                <View style={{ paddingHorizontal: 24, width: '100%', height: 52 }}>
                    <Button title="Confimar" onPress={() => modal.close('age')} />
                </View>
            </Modal>
        </>

    )
}