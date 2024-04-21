import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Card } from "../../Card";
import { useState } from "react";
import { styles } from "./GenderStyles";

const options = [
    {
        icon: '👨',
        text: 'Masculino',
    },
    {
        icon: '👩',
        text: 'Feminino',
    },
]

export function Gender() {
    const [selected, setSelected] = useState(options[0])


    return (
        <>

            <Text style={styles.title}>
                Qual é o seu
                gênero?
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