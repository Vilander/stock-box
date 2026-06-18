import { styles } from "./_styles";
import { colors } from "@/theme/colors";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons'; 

import { LinearGradient } from "expo-linear-gradient";
import { Header } from '@/components/Header';
import { Separador } from "@/components/Separador";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";



export default function AddProduto() {
  return (
    <View style={styles.container}>
      
      <View style={{ marginBottom: 10, gap: 15 }}>
          <Header /> 
      </View>
      
      <Separador color={colors.gray[100]} />
      <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color={colors.gray[500]} />
      </TouchableOpacity>
      <Text
        onPress={() => router.back()}
        style={{marginTop:15, alignSelf:"center", fontSize:21, fontWeight:700}}> Produtos
      </Text>

      <ScrollView 
        contentContainerStyle={{ padding: 24, gap: 16 }} 
        showsVerticalScrollIndicator={false}
      >
        <Input label="Imagem" placeholder="url da imagem" />
        
        <Input label="Nome" placeholder="nome do produto (título)" />
        
        <Input label="Descricão" placeholder="descrição produto (opcional)" multiline />
        
        <Input
          label="Quantidade" 
          placeholder="quantidade atual do produto em estoque" 
          keyboardType="numeric" 
        />
        
        <Input 
          label="Valor"
          placeholder="valor <produto>" 
          keyboardType="numeric" 
        />
      </ScrollView>

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button titulo="salvar" onPress={() => console.log('Salvar clicado!')} />
      </View>

    </View>
  );
}