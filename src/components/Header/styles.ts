import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red[700],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
    paddingBottom: 20, 
    borderRadius:15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray[400],
    marginLeft: 10,
  },
});