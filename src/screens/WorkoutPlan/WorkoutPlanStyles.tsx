import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        
        backgroundColor: theme.colors.shape,
        width: '100%',
        borderRadius: 6,
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 12,
        gap: 12,
        alignItems: 'center',
        ...theme.shadow.light
    },
    content: {
        flex: 1,
        gap: 16,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.black
    },
    label: {
        fontSize: 14,
        color: theme.colors.gray
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