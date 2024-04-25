import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    card: {
        backgroundColor: theme.colors.shape,
        width: '100%',
        height: 52,
        borderRadius: 6,
        flexDirection: 'row',

        alignItems: 'center',
        paddingHorizontal: 12,
        ...theme.shadow.card
    },
    content: {
        flex: 1,
        gap: 16,
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    label: {
        width: '30%',
        fontSize: 12,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 12,
        textAlign: 'center'
    },
    footer: {
        padding: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 12
    },
})