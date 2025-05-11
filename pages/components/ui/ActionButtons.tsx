import { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import OverlayColor from './OverlayColor';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface IActionButtons {
    buttonsSize: number
}

export default function ActionButtons(props: IActionButtons) {
    const [dislike, setDislike] = useState(false);
    const [superLike, setSuperLike] = useState(false);
    const [like, setLike] = useState(false);

    const handleDislike = () => {
        setDislike(true);
        setTimeout(() => setDislike(false), 1000);
    };

    const handleSuperLike = () => {
        setSuperLike(true);
        setTimeout(() => setSuperLike(false), 1000);
    };

    const handleLike = () => {
        setLike(true);
        setTimeout(() => setLike(false), 1000);
    };

    return (
        <View style={styles.actionsContainer}>

            <TouchableOpacity
                style={styles.dislikeButton}
                onPress={handleDislike}
                accessibilityLabel="Dislike"
            >
                <MaterialIcons name="clear" size={props.buttonsSize} color="#FFFFFF" />
            </TouchableOpacity>
            {dislike && (
                <OverlayColor
                    transitionOverLay={null}
                    backgroundColor='rgba(150, 150, 150, 0.6)'
                    icon='dislike'
                    styles={{
                        position: 'absolute',
                        width: width * 0.85,
                        height: height * 0.87,
                        top: -(height * 0.7575),
                        left: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999
                    }} />
            )}
            <TouchableOpacity
                style={styles.superLikeButton}
                onPress={handleSuperLike}
                accessibilityLabel="Super Like"
            >
                <MaterialIcons name="favorite" size={props.buttonsSize * 1.25} color="#FF6B86" />
            </TouchableOpacity>
            {superLike && (
                <OverlayColor
                    transitionOverLay={null}
                    backgroundColor='rgba(250, 190, 190, 0.6)'
                    icon='superLike'
                    styles={{
                        position: 'absolute',
                        width: width * 0.85,
                        height: height * 0.87,
                        top: -(height * 0.7575),
                        left: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999
                    }} />
            )}
            <TouchableOpacity
                style={styles.likeButton}
                onPress={handleLike}
                accessibilityLabel="Like"
            >
                <MaterialIcons name="check" size={props.buttonsSize} color="#FFFFFF" />
            </TouchableOpacity>
            {like && (
                <OverlayColor
                    transitionOverLay={null}
                    backgroundColor='rgba(250, 190, 190, 0.6)'
                    icon='like'
                    styles={{
                        position: 'absolute',
                        width: width * 0.85,
                        height: height * 0.87,
                        top: -(height * 0.7575),
                        left: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999
                    }} />
            )}
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