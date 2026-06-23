import { useState } from 'react';
import { styles } from "./_styles";
import { colors } from "@/theme/colors";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons'; 

import { LinearGradient } from "expo-linear-gradient";
import { Header } from '@/components/Header';
import { Separador } from "@/components/Separador";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useProductDatabase } from "@/database/useProdutos";

export default function AddProduto() {
  const [image, setImage] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const useProduct = useProductDatabase();

  function saveProduct() {
    if (!nome.trim() || !quantidade.trim() || !valor.trim()) {
      return Alert.alert("Atenção!", "Preencha os campos obrigatórios.");
    }
    salvarDadosProduto();
  }

  async function salvarDadosProduto() {
    try {
      await useProduct.create({
        name: nome,
        description: descricao,
        quantity: Number(quantidade),
        price: Number(valor),
        image: image
      });
      
      Alert.alert("Sucesso", "Produto criado com sucesso!", [
        {
          text: "Ok", onPress: () => router.back()
        }
      ]);
    } catch (error) {
      Alert.alert("Erro", "Falha ao criar novo produto");
      console.log(error);
    }
  }

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
        <Input 
          label="Imagem" 
          placeholder="url da imagem" 
          value={image}
          onChangeText={setImage}
        />
        
        <Input 
          label="Nome" 
          placeholder="nome do produto (título)" 
          value={nome}
          onChangeText={setNome}
        />
        
        <Input 
          label="Descricão" 
          placeholder="descrição produto (opcional)" 
          multiline 
          value={descricao}
          onChangeText={setDescricao}
        />
        
        <Input
          label="Quantidade" 
          placeholder="quantidade atual do produto em estoque" 
          value={quantidade}
          onChangeText={setQuantidade}
        />
        
        <Input 
          label="Valor"
          placeholder="valor unitário do produto" 
          value={valor}
          onChangeText={setValor}
        />
      </ScrollView>

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button titulo="salvar" onPress={() => saveProduct()} />
      </View>

    </View>
  );
}