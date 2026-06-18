import { styles } from "./_styles";
import { colors } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "react-native";
import {router} from 'expo-router'

import { FilterInput } from "../components/FilterInput";
import { Header } from '@/components/Header'
import { Separador } from "@/components/Separador";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";



export default function Index() {
  return (
    <View style={styles.container}>
        
          <View>
            <View style={{ marginBottom: 10, gap: 15 }}>
                <Header />
            </View>
            <Separador color={colors.gray[300]} />
            <FilterInput />
          </View>

        <View style={styles.cardsRow}>
           <ProductCard 
            onPress={() => router.navigate("/produto/1")}
             title="Cimento" 
             quantity="50 un." 
           />
           <ProductCard
             title="Tijolos" 
             quantity="2000 un." 
           />
           <ProductCard 
             title="Telha" 
             quantity="2000 un." 
           />
           <ProductCard 
             title="Madeira" 
             quantity="2000 un." 
           />
        </View>

        <View style={{ padding: 24, marginBottom: 32 }}>
            <Button titulo='Adicionar Produto' onPress={() => router.navigate("/add-produto")}/>
        </View>
    </View>
  );
}

