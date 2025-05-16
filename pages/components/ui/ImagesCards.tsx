import React, { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image, Dimensions, Animated, PanResponder } from "react-native"
import FriendMatchNavigation from 'pages/components/ui/FriendMatchNavigation';
import ActionButtons from './ActionButtons';
import CardUserInfo from './CardUserInfo';
import OverlayColor from 'pages/components/ui/OverlayColor';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;

type UserDataList = {
    imageUrl: any;
    alt: string;
    name: string;
    age: number;
    location: string;
    interests: string[];
}[]

interface ImagesCards {
    imagesList: UserDataList
}

const GradientOverlay = memo(() => (
    <ExpoLinearGradient
        colors={[
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.1)',
            'transparent',
            'rgba(0, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.9)'
        ]}
        locations={[0, 0.2, 0.5, 0.8, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.overlay}
    />
));

const MemoizedFriendMatchNavigation = memo(FriendMatchNavigation);
const MemoizedActionButtons = memo(ActionButtons);
const MemoizedCardUserInfo = memo(CardUserInfo);
const MemoizedOverlayColor = memo(OverlayColor);

export default function ImagesCards({ imagesList }: ImagesCards) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const pan = useRef(new Animated.ValueXY()).current;

    const handleCompleteSwipe = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % imagesList.length);
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true
        })
    }, [imagesList.length]);

    const panResponder = useMemo(() =>
        PanResponder.create({
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
        }), [handleCompleteSwipe])

    useEffect(() => {
        pan.setValue({ x: 0, y: 0 });
    }, [currentIndex]);

    const getCardStyle = useCallback(() => {
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
    }, [pan.x]);

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

    const visibleImages = imagesList.slice(currentIndex, currentIndex + 2);


    return (
        <View
            style={styles.container}
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setContainerHeight(h => h !== height ? height : h);
            }}
        >
            {visibleImages.map((image, relativeIndex) => {
                const absoluteIndex = currentIndex + relativeIndex;
                const isCurrent = relativeIndex === 0;
                const cardHeight = containerHeight * (isCurrent ? 0.90 : 1);
                const bottomOffset = containerHeight * (isCurrent ? 0.070 : 0.04);

                return isCurrent ? (
                    <Animated.View
                        key={absoluteIndex}
                        {...panResponder.panHandlers}
                        style={[
                            styles.animatedCard,
                            { height: cardHeight, bottom: bottomOffset },
                            getCardStyle(),
                            styles.topCard
                        ]}
                    >
                        <Image
                            source={image.imageUrl}
                            style={styles.cardImage}
                            resizeMode="cover"
                            alt={image.alt}
                        />
                        <MemoizedOverlayColor
                            transitionOverLay={leftOverlay}
                            backgroundColor='rgba(150, 150, 150, 1)'
                            icon='dislike'
                        />
                        <MemoizedOverlayColor
                            transitionOverLay={rightOverLay}
                            backgroundColor='rgba(250, 190, 190, 1)'
                            icon='like'
                        />
                        <View style={styles.overlay} />
                        <GradientOverlay />
                        <MemoizedFriendMatchNavigation />
                        <MemoizedCardUserInfo
                            photo={image.imageUrl}
                            name={image.name}
                            age={image.age}
                            location={image.location}
                            interests={image.interests}
                        />
                        <MemoizedActionButtons
                            buttonsSize={width * 0.075}
                            cardHeight={cardHeight}
                        />
                    </Animated.View>
                ) : (
                    <View
                        key={absoluteIndex}
                        style={[
                            styles.behindCard,
                            { height: cardHeight, bottom: bottomOffset }
                        ]}
                    >
                        <Image
                            source={image.imageUrl}
                            style={styles.cardImage}
                            resizeMode="cover"
                            alt={image.alt}
                        />
                        <MemoizedFriendMatchNavigation />
                        <MemoizedCardUserInfo
                            photo={image.imageUrl}
                            name={image.name}
                            age={image.age}
                            location={image.location}
                            interests={image.interests}
                        />
                        <GradientOverlay />
                        <MemoizedActionButtons buttonsSize={width * 0.07} />
                    </View>
                );
            })}
        </View>
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
        width: width * 0.85,
        position: 'absolute',
        borderRadius: 30,
        zIndex: 2,
        shadowColor: '#68697F1A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5
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
        width: width * 0.88,
        zIndex: 1,
        transform: [{ scale: 0.9 }]
    },
});