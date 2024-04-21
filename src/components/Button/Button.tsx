import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    colors?: string[]
    textColor?: string;
}

export function Button(props: ButtonProps) {
    const {
        title = 'Confirmar',
        colors = [theme.colors.primary, theme.colors.secodanry],
        textColor = theme.colors.shape,
        ...rest
    } = props
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <LinearGradient
                colors={colors}
                style={styles.gradient}
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}
            >
                <Text style={[styles.title, { color: textColor }]}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}