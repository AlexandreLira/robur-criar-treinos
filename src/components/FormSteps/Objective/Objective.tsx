import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { Card } from "../../Card";
import { useForm } from "../../../hooks/useForm";
import { Button } from "../../Button";
import { options } from "../../../utils/constants";

import { styles } from "./ObjectiveStyles";

export function Objective() {
    const { setData, data, handleNextStep } = useForm()

    const items = options.objectives

    function handleSelected(event: typeof items[0]) {
        setData(state => ({ ...state, objective: event }))
    }

    return (
        <>

            <Text style={styles.title}>
                Qual seu objetivo principal?
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

                                selected={data?.objective?.value == item.value}
                                onPress={() => handleSelected(item)}
                            />
                        </Animated.View>
                    )}
                </View>
            </View>

            <View style={styles.footer}>
                <Button
                    disabled={!Boolean(data.objective?.label)}
                    title="Próximo"
                    onPress={handleNextStep}
                />
            </View>
        </>

    )
}