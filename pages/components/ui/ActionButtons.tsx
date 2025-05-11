import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface IActionButtons {
    buttonsSize: number
}


export default function ActionButtons(props: IActionButtons) {
    const handleLike = () => console.log('Like');
    const handleDislike = () => console.log('Dislike');
    const handleSuperLike = () => console.log('Super Like');
    
    return (
        <View style={styles.actionsContainer}>
            <TouchableOpacity 
                style={styles.dislikeButton} 
                onPress={handleDislike}
                accessibilityLabel="Dislike"
            >
                <MaterialIcons name="clear" size={props.buttonsSize} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.superLikeButton} 
                onPress={handleSuperLike}
                accessibilityLabel="Super Like"
            >
                <MaterialIcons name="favorite" size={props.buttonsSize * 1.25} color="#FF6B86" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.likeButton} 
                onPress={handleLike}
                accessibilityLabel="Like"
            >
                <MaterialIcons name="check" size={props.buttonsSize} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    dislikeButton: {
        backgroundColor: '#D0BFBF',
        padding: 15,
        borderRadius: 50,
        shadowColor: '#FF486840',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    superLikeButton: {
        backgroundColor: '#FFFFFFFF',
        padding: 12,
        borderRadius: 55,
        shadowColor: '#FF486840',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    likeButton: {
        backgroundColor: '#FEB5DB',
        padding: 15,
        borderRadius: 50,
        shadowColor: '#FF486840',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    }
});