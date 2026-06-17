import {View, ColorValue} from 'react-native';
import { styles } from './styles';

export function Separador({color}: {color: ColorValue}) {
    return (
        <View style={[styles.separador, {backgroundColor:color}]}></View>
    )
}
