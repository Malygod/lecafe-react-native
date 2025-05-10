import { LinearGradient } from "expo-linear-gradient"
import { View, Text, StyleSheet } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';

export default function Login() {
    return (
        <LinearGradient
            colors={['#FF6295', '#FFB03A']}
            start={{ x: 0.005, y: 0.468 }}
            end={{ x: 0.995, y: 1.0 }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Texto con fondo degradado</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});