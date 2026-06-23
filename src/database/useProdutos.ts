import { useSQLiteContext } from "expo-sqlite";

export type ProductCreate = {
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
}

export type ProductResponse = {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    update_at: string; 
}

export function useProductDatabase() {
    const database = useSQLiteContext();
    
    async function create(data: ProductCreate): Promise<void> {
        await database.runAsync(
            "INSERT INTO produtos (name, description, quantity, price, image) VALUES ($name, $description, $quantity, $price, $image)",
            {
                $name: data.name,
                $description: data.description,
                $quantity: data.quantity,
                $price: data.price,
                $image: data.image
            }
        );
    }

    function listBySavedValue() {
        return database.getAllAsync<ProductResponse>(`
                SELECT 
                    id, 
                    name, 
                    description, 
                    quantity, 
                    price, 
                    image,
                    updated_at AS update_at
                FROM produtos
                ORDER BY name ASC
            `);
    }

    async function show(id: number) {
        return await database.getFirstAsync<ProductResponse>(`
            SELECT 
                id, 
                name, 
                description, 
                quantity, 
                price, 
                image,
                updated_at AS update_at
            FROM produtos 
            WHERE id = $id
        `, { $id: id });
    }

    return {
        create,
        listBySavedValue,
        show
    };
}