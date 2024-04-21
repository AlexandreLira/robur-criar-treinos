import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { SelectProps } from "./Select";

type StylesProps = Pick<SelectProps, 'selected'>

export const styling = ({ selected }: StylesProps) => StyleSheet.create({
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
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: selected ? theme.colors.black : theme.colors.gray
    },
    selected: {
        borderWidth: 1,
        borderColor: theme.colors.secodanry
    }
})