import { styles } from "../_styles";
import { colors } from "@/theme/colors";

import { View } from "react-native";
import {router} from 'expo-router'

import { Header } from '@/components/Header'
import { Separador } from "@/components/Separador";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";



export default function Index() {
  return (
    <View style={styles.container}>
        <View style={{marginBottom:10, gap:15}}>
            <Header />
        </View>
        <Separador color={colors.gray[100]} />
        
    </View>
  );
}

