import { Text, TextInput, View } from "react-native";

import { useRef } from "react";
import { styles } from "./MeasurementsStyles";

import { Button } from "../../Button";
import { theme } from "../../../theme";
import { Input } from "../../Input";
import { useForm } from "../../../hooks/useForm";
import { options } from "../../../utils/constants";
import { ItemType } from "../../../contexts/FormContext";


export function Measurements() {
    const { handleNextStep, handlePreviusStep, data, setData } = useForm()

    const items = options.measurements

    function handleOnChangeText(item: ItemType, value: string) {
        setData(state => ({
            ...state, [item.key]: {
                ...item,
                value,

            }
        }))
    }


    const weightRef = useRef<TextInput>(null);
    const statureRef = useRef<TextInput>(null);


    return (
        <>

            <Text style={styles.title}>
                Conte-me mais sobre você.
            </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Input
                        title={items[0].label}
                        onChangeText={(value) => handleOnChangeText(items[0], value)}
                        value={data.age?.value}
                        keyboardType="number-pad"
                        returnKeyType="next"
                        placeholder={'ex: 23'}
                        onSubmitEditing={() => {
                            weightRef.current?.focus();
                        }}
                        blurOnSubmit={false}
                    />
                    <Input
                        inputRef={weightRef}
                        keyboardType="number-pad"
                        title={items[1].label}
                        onChangeText={(value) => handleOnChangeText(items[1], value)}
                        value={data.weight?.value}
                        returnKeyType="next"
                        placeholder={'Peso'}
                        onSubmitEditing={() => {
                            statureRef.current?.focus();
                        }}
                    />
                    <Input
                        inputRef={statureRef}
                        title={items[2].label}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleOnChangeText(items[2], value)}
                        value={data.stature?.value}
                        returnKeyType="done"
                        placeholder={'Altura'}
                    />

                </View>
            </View>

            <View style={styles.footer}>
                <Button
                    title="Voltar"
                    colors={[theme.colors.shape, theme.colors.shape]}
                    textColor={theme.colors.gray}
                    onPress={handlePreviusStep}
                />
                <Button
                    title="Próximo"
                    onPress={handleNextStep}
                />
            </View>
        </>

    )
}