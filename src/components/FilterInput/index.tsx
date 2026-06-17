import { styles } from './styles';
import { colors } from '@/theme/colors';
import { TextInput, StyleSheet, View } from 'react-native';

export function FilterInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="filtro por nome"
        placeholderTextColor= {colors.gray[400]}
      />
    </View>
  );
}

