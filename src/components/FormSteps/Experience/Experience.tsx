import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Card } from "../../Card";
import { useState } from "react";
import { styles } from "./ExperienceStyles";

const options = [
    {
        icon: '🐣',
        text: 'Sedentária',
    },
    {
        icon: '🐥',
        text: 'Levemente ativo',
    },
    {
        icon: '🐓',
        text: 'Moderadamente ativo',
    },
    {
        icon: '💪',
        text: 'Fortemente ativo',
    },
    {
        icon: '🐭',
        text: 'Extremamente ativo',
    },
]

export function Experience() {
    const [selected, setSelected] = useState(options[0])


    return (
        <>

            <Text style={styles.title}>
                Quão ativo é você?
            </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    {options.map((item, index) =>
                        <Animated.View
                            entering={FadeIn.delay(100 * index)}
                            key={item.text}
                        >

                            <Card
                                icon={item.icon}
                                text={item.text}

                                selected={selected.text == item.text}
                                onPress={() => setSelected(item)}
                            />
                        </Animated.View>
                    )}
                </View>
            </View>
        </>

    )
}