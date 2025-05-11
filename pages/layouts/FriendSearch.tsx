import React, { useState, useRef } from 'react';
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image, Dimensions, Animated, PanResponder } from "react-native"
import { NavigationStackProps } from '../../types/navigation';
import FriendMatchNavigation from 'pages/components/ui/FriendMatchNavigation';
import ActionButtons from '../components/ui/ActionButtons';
import CardUserInfo from 'pages/components/ui/CardUserInfo';
import OverlayColor from 'pages/components/ui/OverlayColor';
import TopBar from 'pages/components/ui/TopBar';
import Frame from '../components/Frame';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;

export default function FriendSearch() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const pan = useRef(new Animated.ValueXY()).current;

    const imagesList = [
        { imageUri: require('../../assets/photos/sandra-gomez.png'), alt: 'first image', name: 'Sandra Gómez', age: 21, location: 'Surco, Perú' },
        { imageUri: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina' }
    ];

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            pan.setValue({ x: gesture.dx, y: 0 });
        },
        onPanResponderRelease: (_, gesture) => {
            if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
                Animated.timing(pan, {
                    toValue: { x: gesture.dx > 0 ? width : -width, y: 0 },
                    duration: 200,
                    useNativeDriver: true
                }).start(() => handleCompleteSwipe());
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true
                }).start();
            }
        }
    });

    const handleCompleteSwipe = () => {
        setCurrentIndex(prev => (prev + 1) % imagesList.length);
        pan.setValue({ x: 0, y: 0 });
    }

    const getCardStyle = () => {
        const rotate = pan.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: ['-30deg', '0deg', '30deg'],
            extrapolate: 'extend'
        });

        return {
            transform: [
                { translateX: pan.x },
                { rotate: rotate }
            ]
        };
    };

    const leftOverlay = pan.x.interpolate({
        inputRange: [-width / 2, 0],
        outputRange: [0.8, 0],
        extrapolate: 'clamp'
    });

    const rightOverLay = pan.x.interpolate({
        inputRange: [0, width / 2],
        outputRange: [0, 0.8],
        extrapolate: 'clamp'
    });

    return (
        <Frame colorFrom='#9072E5' colorTo='#7086E3'>
            <TopBar />
            <View style={styles.container}>
                {imagesList.map((image, index) => {
                    if (index < currentIndex) return null;

                    return index === currentIndex ? (
                        <Animated.View
                            key={index}
                            {...panResponder.panHandlers}
                            style={[styles.animatedCard, getCardStyle(), styles.topCard]}
                        >
                            <Image
                                source={image.imageUri}
                                style={styles.cardImage}
                                resizeMode="cover"
                                alt={image.alt}
                            />

                            <OverlayColor
                                transitionOverLay={leftOverlay}
                                backgroundColor='rgba(150, 150, 150, 1)'
                                icon='dislike'
                            />

                            <OverlayColor
                                transitionOverLay={rightOverLay}
                                backgroundColor='rgba(250, 190, 190, 1)'
                                icon='like'
                            />

                            <View style={styles.overlay} />
                            <ExpoLinearGradient
                                colors={[
                                    'rgba(0, 0, 0, 0.45)',
                                    'transparent',
                                    'transparent',
                                    'transparent',
                                    'rgba(0, 0, 0, 0.45)'
                                ]}
                                locations={[0, 0.2, 0.45, 0.8, 1]}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={styles.overlay}
                            />
                            <FriendMatchNavigation />
                            <CardUserInfo
                                name={image.name}
                                age={image.age}
                                location={image.location}
                            />
                            <ActionButtons buttonsSize={width * 0.075} />
                        </Animated.View>
                    ) : (
                        <View key={index} style={[styles.cardImage, styles.behindCard]}>
                            <Image
                                source={image.imageUri}
                                style={styles.cardImage}
                                resizeMode="cover"
                                alt={image.alt}
                            />
                            <FriendMatchNavigation />
                            <CardUserInfo
                                name={image.name}
                                age={image.age}
                                location={image.location}
                            />
                            <ActionButtons buttonsSize={width * 0.07} />
                        </View>
                    );
                })}
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
        overflow: 'hidden'
    },
    animatedCard: {
        bottom: width * 0.120,
        width: width * 0.85,
        height: height * 0.87,
        position: 'absolute',
        borderRadius: 30
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 30,
        paddingVertical: 50,
    },
    topCard: {
        zIndex: 2,
        shadowColor: '#68697F1A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5
    },
    behindCard: {
        position: 'absolute',
        bottom: width * 0.090,
        width: width * 0.88,
        height: height * 0.95,
        zIndex: 1,
        transform: [{ scale: 0.9 }]
    }
});