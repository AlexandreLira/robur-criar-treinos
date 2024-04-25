import { Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from "react-native";
import { styling } from "./InputStyles";
import { theme } from "../../theme";

export interface InputProps extends TextInputProps {
    title: string;
    inputRef?: React.LegacyRef<TextInput> | undefined
    prefix?: string
}

export function Input(props: InputProps) {
    const { title, value, inputRef, prefix, ...rest } = props;

    const styles = styling()
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <TextInput
                key={title}
                ref={inputRef}
                {...rest}
                style={styles.input}
                placeholderTextColor={theme.colors.gray}
                selectionColor={theme.colors.primary}
            />
            {prefix && <Text style={styles.prefix}>{prefix}</Text>}

        </View>
    )
}