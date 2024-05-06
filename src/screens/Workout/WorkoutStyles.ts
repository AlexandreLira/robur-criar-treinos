import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,

    },
    content: {
        paddingHorizontal: 24,
    },
    header: {
        height: 68,
        borderBottomColor: theme.colors.gray_light,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    calendar: {
        flexDirection: 'row',
        marginVertical: 16,
        backgroundColor: theme.colors.shape,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        ...theme.shadow.light
    },
    calendar_item: {
        alignItems: 'center',

        width: 42,
        aspectRatio: 1,
        borderRadius: 6,
        justifyContent: 'space-evenly',
        ...theme.shadow.light
    },
    calendar_number: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.black
    },
    calendar_text: {
        fontSize: 8,
        fontWeight: 'bold',
        color: theme.colors.gray
    },
    selected: {
        borderWidth: 1,
        borderColor: theme.colors.primary
    }
})