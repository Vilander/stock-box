import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 2,
    borderColor: colors.black, 
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.red[300],
  },
});