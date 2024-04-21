import { Pressable, PressableProps, Text, View } from "react-native";
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { styles } from "./styles";
import { theme } from "../../theme";
import { useEffect } from "react";

interface CardProps extends PressableProps {
    text: string;
    icon: string;
    selected?: boolean;
}

export function Card(props: CardProps) {
    const { icon, text, selected, ...rest } = props

    const animation = useSharedValue(0);

    const RStyles = useAnimatedStyle(() => {
        const input = [0, 100]
        return {
            borderWidth: interpolate(animation.value, input, [0, 1]),
            borderColor: interpolateColor(animation.value, input, [theme.colors.shape, theme.colors.secodanry])
        }
    })

    function startAnimation() {
        if (selected) {
            animation.value = withTiming(100)
            return

        }
        animation.value = withTiming(0)
    }

    useEffect(() => {
        startAnimation()
    }, [selected])


    return (
        <Pressable
            {...rest}
        >
            <Animated.View style={[styles.container, RStyles]}>

                <Text style={styles.icon}>{icon}</Text>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}