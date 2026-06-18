import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Feather } from '@expo/vector-icons'; 
import { colors } from "@/theme/colors";
import { Header } from "@/components/Header";
import {styles} from '../_styles'

export default function ProdutoDetalhes() {
  const { id } = useLocalSearchParams();


  const nomeProduto = "Cimento";
  const quantidade = 50;
  const precoUnitario = 35.90;
  
  const precoBruto = precoUnitario * quantidade;

  const formatarMoeda = (valor:number) => {
    return valor.toFixed(2).replace('.', ',');
  };

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
          página atual
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
          marginBottom: 32 
        }}>
           <Text style={{ color: colors.gray[500], fontSize: 16 }}>
             imagem do produto
           </Text>
        </View>

        <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.gray[500], marginBottom: 8 }}>
          {nomeProduto}
        </Text>

        <Text style={{ fontSize: 18, color: colors.gray[500], marginBottom: 4 }}>
          qntd. estoque: {quantidade}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.gray[500], marginBottom: 4 }}>
          R$ {formatarMoeda(precoUnitario)}
        </Text>

        <Text style={{ fontSize: 16, color: colors.gray[800], marginBottom: 24 }}>
          R$ {formatarMoeda(precoBruto)}
        </Text>

        <Text style={{ fontSize: 16, color: colors.gray[500], lineHeight: 24 }}>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.
        </Text>
        
      </View>
    </ScrollView>
  );
}