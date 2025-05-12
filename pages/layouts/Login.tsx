import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProps } from '../../types/navigation';
import Frame from '../components/Frame';

export default function Login() {
    const navigation = useNavigation<NavigationStackProps>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('FriendSearch');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

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