import {StyleSheet} from 'react-native';
import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[500],
        height: 48,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    titulo: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 500,
    },
})