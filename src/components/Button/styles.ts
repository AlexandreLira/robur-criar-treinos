import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        flex: 1,
        backgroundColor: theme.colors.shape,
        borderRadius: 999,
        ...theme.shadow.card
    },

    gradient: {
        flex: 1,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    title: {
        fontSize: 14,
        color: theme.colors.secodanry,
        fontWeight: 'bold'
    },
    disabled: {
        opacity: 0.5
    }
})