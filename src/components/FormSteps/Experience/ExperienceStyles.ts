import { Platform, StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        padding: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 12
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    wrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center'
    }
});