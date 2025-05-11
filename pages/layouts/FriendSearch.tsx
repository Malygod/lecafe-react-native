import { View, StyleSheet, Image } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import Frame from '../components/Frame';

export default function FriendSearch() {

    return (
            <Frame colorFrom='#9072E5' colorTo='#7086E3'>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/photos/Sandra Gómez.svg')}
                        style={styles.userImg}
                    />
                </View>
            </Frame>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    userImg: {
        width: '90%',
        aspectRatio: 18/9,
        borderRadius: 20,
    }
});