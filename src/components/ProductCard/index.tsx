import { useState } from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';


type ProductCardProps = {
  title: string;
  quantity: string;
  image?: string;
  onPress?: () => void;
}

export function ProductCard({ title, quantity, image, onPress }: ProductCardProps) {
  const [erroNaImagem, setErroNaImagem] = useState(false);
  const temImagem = image && image.trim() !== "";

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { borderColor: colors.black }]} activeOpacity={0.7}>
      
      <View style={[styles.imageContainer, { borderColor: colors.black, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }]}>
        
        {temImagem && !erroNaImagem ? (
          <Image 
            source={{ uri: image }} 
            style={{ width: '100%', height: '100%' }} 
            resizeMode="cover" 
            onError={() => setErroNaImagem(true)} // <-- Se a URL não for uma foto válida, ativa o erro e mostra o ícone
          />
        ) : (
          <MaterialIcons name="image" size={40} color={colors.black} />
        )}

      </View>

      <Text style={[styles.title, { color: colors.black }]}>{title}</Text>
      <Text style={[styles.quantity, { color: colors.black }]}>{quantity}</Text>
      
    </TouchableOpacity>
  );
}

