import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Card } from "../../Card";
import { useState } from "react";
import { styles } from "./ObjectiveStyles";

const options = [
    {
        text: 'Perder Gordura',
        icon: '🥑'
    },
    {
        text: 'Ficar em Forma',
        icon: '🏃'
    },
    {
        text: 'Construir Músculos',
        icon: '💪'
    },
]

export function Objective() {
    const [selected, setSelected] = useState(options[0])



    return (
        <>

            <Text style={styles.title}>
                Qual seu objetivo principal?
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