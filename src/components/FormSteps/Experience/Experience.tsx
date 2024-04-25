import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { Card } from "../../Card";
import { Button } from "../../Button";

import { styles } from "./ExperienceStyles";
import { useForm } from "../../../hooks/useForm";
import { options } from "../../../utils/constants";

import { theme } from "../../../theme";
import { ItemType } from "../../../contexts/FormContext";



export function Experience() {
    const { handleNextStep, handlePreviusStep, setData, data } = useForm()

    const items = options.experiences
    function handleSelected(event: ItemType) {
        setData(state => ({ ...state, experience: event }))
    }

    return (
        <>

            <Text style={styles.title}>
                Quão ativo é você?
            </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    {items.map((item, index) =>
                        <Animated.View
                            entering={FadeIn.delay(100 * index)}
                            key={item.key}
                        >
                            <Card
                                icon={item.icon!}
                                text={item.value}
                                selected={data?.experience?.value == item.value}
                                onPress={() => handleSelected(item)}
                            />
                        </Animated.View>
                    )}
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
                    disabled={!Boolean(data.experience)}
                    title="Próximo"
                    onPress={handleNextStep}
                />
            </View>
        </>

    )
}