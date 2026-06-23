import { Stack, Tabs } from "expo-router"
import {colors} from "@/theme/colors"
import { SQLiteProvider } from "expo-sqlite"
import { migrate } from "@/database/migrate"

export default function Layout(){
    return (
            <SQLiteProvider
                databaseName="produtos.db"
                onInit={migrate}
                >
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {backgroundColor: colors.white}
                }} />
            </SQLiteProvider>
    )
}


