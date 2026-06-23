import { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from "react-native";
import { useLocalSearchParams, router, useFocusEffect } from "expo-router";
import { Feather, MaterialIcons } from '@expo/vector-icons'; 
import { colors } from "@/theme/colors";
import { Header } from "@/components/Header";
import { styles } from '../_styles';

import { useProductDatabase, ProductResponse } from "@/database/useProdutos";

export default function ProdutoDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const [produto, setProduto] = useState<ProductResponse | null>(null);
  const [erroNaImagem, setErroNaImagem] = useState(false); 
  
  const productDB = useProductDatabase();

  useFocusEffect(
    useCallback(() => {
      async function carregarProduto() {
        if (!id) return;
        
        try {
          const dadosProduto = await productDB.show(Number(id));
          if (dadosProduto) {
            setProduto(dadosProduto);
            setErroNaImagem(false); 
          } else {
            Alert.alert("Erro", "Produto não encontrado.");
            router.back();
          }
        } catch (error) {
          console.error(error);
          Alert.alert("Erro", "Falha ao carregar os detalhes do produto.");
        }
      }

      carregarProduto();
    }, [id])
  );

  const formatarMoeda = (valor: number) => {
    return valor.toFixed(2).replace('.', ',');
  };

  if (!produto) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const precoBruto = produto.price * produto.quantity;
  const temImagem = produto.image && produto.image.trim() !== ""; 

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View style={{ marginBottom: 10, gap: 15 }}>
            <Header />
        </View>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 20 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color={colors.gray[500]} />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.gray[500] }}>
          detalhes do produto
        </Text>

        <TouchableOpacity onPress={() => console.log("Ir para tela de edição")}>
          <Feather name="edit-2" size={20} color={colors.gray[500]} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        
        <View style={{ 
          height: 250, 
          borderWidth: 1.5, 
          borderColor: colors.gray[500], 
          borderRadius: 20, 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginBottom: 32,
          overflow: 'hidden' 
        }}>
           {temImagem && !erroNaImagem ? (
             <Image 
               source={{ uri: produto.image }} 
               style={{ width: '100%', height: '100%' }} 
               resizeMode="cover" 
               onError={() => setErroNaImagem(true)} 
             />
           ) : (
             <MaterialIcons name="image" size={80} color={colors.gray[500]} />
           )}
        </View>

        <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.gray[500], marginBottom: 8 }}>
          {produto.name}
        </Text>

        <Text style={{ fontSize: 18, color: colors.gray[500], marginBottom: 4 }}>
          qntd. estoque: {produto.quantity}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.gray[500], marginBottom: 4 }}>
          R$ {formatarMoeda(produto.price)}
        </Text>

        <Text style={{ fontSize: 16, color: colors.gray[800], marginBottom: 24 }}>
          Total em estoque: R$ {formatarMoeda(precoBruto)}
        </Text>

        <Text style={{ fontSize: 16, color: colors.gray[500], lineHeight: 24 }}>
          {produto.description ? produto.description : "Nenhuma descrição informada."}
        </Text>
        
      </View>
    </ScrollView>
  );
}