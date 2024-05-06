import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Card } from "../../Card";
import { styles } from "./GenderStyles";
import { Button } from "../../Button";
import { theme } from "../../../theme";
import { useForm } from "../../../hooks/useForm";
import { options } from "../../../utils/constants";
import { ItemType } from "../../../contexts/FormContext";

export function Gender() {
    const { handleNextStep, handlePreviusStep, data, setData } = useForm()

    const items = options.genders

    function handleSelected(event: ItemType) {
        setData(state => ({ ...state, gender: event }))
    }

    return (
        <>

            <Text style={styles.title}>
                Qual é o seu
                gênero?
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

                                selected={data?.gender?.value == item.value}
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
                    disabled={!Boolean(data.gender?.label)}
                    title="Próximo"
                    onPress={handleNextStep}
                />
            </View>
        </>

    )
}