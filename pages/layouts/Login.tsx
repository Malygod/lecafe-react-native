import { View, StyleSheet, Image } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import Frame from '../components/Frame';

export default function Login() {

    return (
            <Frame colorFrom='#FF6295' colorTo='#FF7971'>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/images/lecafé.png')}
                        style={styles.logoImg}
                    />
                </View>
            </Frame>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    logoImg: {
        top: '40%',
        alignSelf: 'center',
        position: 'absolute'
    },
});