import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        gap: 10,
    },
    label:{
        color: colors.gray[500],
        fontSize: 12,
    },
    input:{
        color: colors.black,
        fontSize: 16,
        padding: 12,
        borderRadius: 6,
        borderBottomColor: colors.gray[400],
        borderBottomWidth: 1,
    },
})