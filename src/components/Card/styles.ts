import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.shape,
        width: 120,
        height: 120,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 12,

        ...theme.shadow.card
    },
    icon: {
        fontSize: 24
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
    selected: {
        borderWidth: 1,
        borderColor: theme.colors.secodanry
    }
})