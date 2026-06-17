import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";


export const styles = StyleSheet.create({
  card: {
    width: '48%', 
    borderWidth: 2,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center', 
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: 80, 
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
  },
});