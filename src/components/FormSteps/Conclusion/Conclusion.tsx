import { useState } from "react"
import { useForm } from "../../../hooks/useForm"
import { Text, View } from "react-native"
import { styles } from "./ConclusionStyles"
import { theme } from "../../../theme"
import { Button } from "../../Button"
import { create_train } from "../../../service/openai"
import { useNavigation } from "@react-navigation/native"

export function Conclusion() {
    const { data, handlePreviusStep } = useForm()

    const navigation = useNavigation()

    async function handleCreate() {
        // @ts-ignore
        navigation.navigate('WorkoutPlan')
    }

    const list = Object.entries(data)
 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Confirme suas informações.
            </Text>
            <View style={styles.content}>
                {list.map(item =>
                    <View key={item[0]} style={styles.card}>
                        <Text style={styles.label}>{`${item[1].label}:`}</Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Text style={styles.value}>{`${item[1].value}`}</Text>
                            <Text style={styles.value}> {item[1].icon}</Text>
                        </View>
                    </View>

                )}
            </View>
            <View style={styles.footer}>
                <Button
                    title="Voltar"
                    colors={[theme.colors.shape, theme.colors.shape]}
                    textColor={theme.colors.gray}
                    onPress={handlePreviusStep}
                />
                <Button
                    title="Confirmar"
                    onPress={handleCreate}
                 
                />
            </View>
        </View>
    )
}