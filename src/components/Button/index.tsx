import {Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import { styles } from './styles';  
import { colors } from '@/theme/colors';

type Props = TouchableOpacityProps & {
    titulo: string,
    isLoading?: boolean
}

export function Button({titulo, isLoading = false, ...rest}: Props) {
  return (
    <TouchableOpacity
     style={styles.container}
     activeOpacity={0.8}
     disabled={isLoading}
     {...rest}
     >
        <Text style={styles.titulo}>
            {
            isLoading ? (<ActivityIndicator size={'small'} color={colors.white} />) : titulo
            }
        </Text>
    </TouchableOpacity>
  );
}