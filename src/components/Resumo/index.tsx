import {View, Text, ColorValue} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import {styles} from './styles'


export type ResumoProps = {
    label:string,
    value: string
}

type Props = {
    data: ResumoProps,
    icon: {
        nomeIcone: keyof typeof MaterialIcons.glyphMap,
        corIcone: ColorValue
    },
    isRight?: boolean
}

export function Resumo({data, icon, isRight = false}: Props){
    return(
        <View style={styles.container}> 
            <View style={[styles.header, isRight && {justifyContent:"flex-end"}]}>
                <MaterialIcons name={icon.nomeIcone} size={16} color={icon.corIcone} />
                <Text style={styles.label}>{data.label}</Text>
            </View>
            <Text style ={styles.value}>{data.value}</Text>
        </View>
    )
}