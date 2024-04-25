import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styling = () => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.shape,
        width: '100%',
        height: 52,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        ...theme.shadow.card
    },
    icon: {
        fontSize: 24
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        width: '20%'
    },
    input: {
        textAlign: 'left',
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.black,
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1
    },
    selected: {
        borderWidth: 1,
        borderColor: theme.colors.secodanry
    },
    prefix: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginLeft: 12
    }
})