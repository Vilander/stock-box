import { useCallback, useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { router, useFocusEffect } from 'expo-router';
import { styles } from "./_styles";
import { colors } from "@/theme/colors";

import { FilterInput } from "../components/FilterInput";
import { Header } from '@/components/Header';
import { Separador } from "@/components/Separador";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";
import { useProductDatabase } from "@/database/useProdutos"; 

export type ProductCardProps = {
    id: string;
    title: string;
    quantity: string;
}

export default function Index() {
    const productDatabase = useProductDatabase();
    const [produtos, setProdutos] = useState<ProductCardProps[]>([]);
    
    async function fetchProducts(): Promise<ProductCardProps[]> {
        try {
            const response = await productDatabase.listBySavedValue();
            console.log(response);
            
            return response.map(
                (item) => ({
                    id: String(item.id),
                    title: item.name,
                    quantity: `${item.quantity} un.`,
                    image: item.image
                })
            );

        } catch (error) {
            Alert.alert("Erro", "Falha ao carregar os produtos!");
            console.log(error);
            return [];
        }
    }

    async function fetchData() {
        const productPromise = fetchProducts();
        const [productData] = await Promise.all([productPromise]);

        setProdutos(productData);
    }

    useFocusEffect(
        useCallback(() => { fetchData() }, [])
    );

    return (
        <View style={styles.container}>
            
            <View>
                <View style={{ marginBottom: 10, gap: 15 }}>
                    <Header />
                </View>
                <Separador color={colors.gray[300]} />
                <FilterInput />
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <View style={styles.cardsRow}>
                    {produtos.length > 0 ? (
                        produtos.map((produto) => (
                            <ProductCard 
                                key={produto.id}
                                title={produto.title} 
                                quantity={produto.quantity} 
                                image={produto.image}
                                onPress={() => router.navigate(`/produto/${produto.id}`)}
                            />
                        ))
                    ) : (
                        null
                    )}
                </View>
            </ScrollView>

            <View style={{ padding: 24, marginBottom: 32 }}>
                <Button titulo='Adicionar Produto' onPress={() => router.navigate("/add-produto")}/>
            </View>
            
        </View>
    );
}