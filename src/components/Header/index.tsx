// src/components/Header.tsx
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles }   from './styles'
import { colors } from '@/theme/colors';

export function Header() {
  return (
    <View style={styles.container}>
      
      <MaterialIcons name="inventory-2" size={28} color={colors.gray[100]} />
      
      <Text style={styles.title}>Stock Box</Text>
    </View>
  );
}

