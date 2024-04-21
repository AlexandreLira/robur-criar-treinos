import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styling } from "./SelectStyles";

export interface SelectProps extends TouchableOpacityProps {
    title: string;
    value: string;
    selected: boolean;
}

export function Select(props: SelectProps) {
    const { title, selected, value, ...rest } = props;

    const styles = styling({ selected })
    return (
        <TouchableOpacity style={styles.container} {...rest} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </TouchableOpacity>
    )
}