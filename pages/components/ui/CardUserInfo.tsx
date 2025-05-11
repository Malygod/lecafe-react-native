import { View, Text, StyleSheet } from 'react-native'
import InfoIcon from './IconInfo';

interface ICardUserInfoProps {
    name: string;
    age: number;
    location: string;
}

export default function CardUserInfo(props: ICardUserInfoProps) {
    return (
        <View style={styles.profileInfo}>
            <View style={styles.textContainer}>
                <View style={styles.iconTextContainer}>
                    <Text style={styles.name}>{`${props.name}, ${props.age}`}</Text>
                    <InfoIcon/>
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
    }
});