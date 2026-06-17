import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles= StyleSheet.create({
    container:{
        gap:5
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    label: {
        fontSize: 10,
        color:colors.blue[300]
    },
    value: {
        fontSize: 18,
        color: colors.white
    },
})