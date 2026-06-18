import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';


type ProductCardProps = {
  title: string;
  quantity: string;
  onPress?: () => void;
}

export function ProductCard({ title, quantity, onPress }: ProductCardProps) {
  

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { borderColor: colors.black }]} activeOpacity={0.7}>
      
      <View style={[styles.imageContainer, { borderColor: colors.black }]}>
        <MaterialIcons name="image" size={40} color={colors.black} />
      </View>

      <Text style={[styles.title, { color: colors.black }]}>{title}</Text>
      <Text style={[styles.quantity, { color: colors.black }]}>{quantity}</Text>
      
    </TouchableOpacity>
  );
}

