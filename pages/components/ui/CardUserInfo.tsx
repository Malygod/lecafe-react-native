import { useState } from 'react' 
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import InfoIcon from './IconInfo';

interface ICardUserInfoProps {
    photo: string;
    name: string;
    age: number;
    location: string;
    interests: string[];
}

export default function CardUserInfo(props: ICardUserInfoProps) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <View style={styles.profileInfo}>
            <View style={styles.textContainer}>
                <View style={styles.iconTextContainer}>
                    <Text style={styles.name}>{`${props.name}, ${props.age}`}</Text>
                    <TouchableOpacity 
                        onPress={() => setShowInfo(!showInfo)}
                    >
                        <InfoIcon/>
                    </TouchableOpacity>
                    {showInfo && (
                        <Image
                            source={require('../../../assets/photos/matches-front-image.jpg')}
                            style={styles.InfoModal}
                        />
                    )}
                </View>
                <Text style={styles.location}>{`${props.location}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfo: {
        position: 'absolute',
        bottom: 105,
        left: 20,
        right: 20,
    },
    textContainer: {
        padding: 15,
        borderRadius: 15,
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        marginBottom: 0
    },
    location: {
        color: 'white',
        fontSize: 14,
        opacity: 1,
        fontWeight: '300',
        marginTop: -12
    },
    InfoModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    Info: {
        color: 'white',
        fontSize: 14,
        opacity: 1,
        fontWeight: '300',
        marginTop: -12
    }
});