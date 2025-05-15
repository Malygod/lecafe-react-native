import React, { useState, useEffect } from 'react';
import TopBar from 'pages/components/ui/TopBar';
import ImagesCards from '../components/ui/ImagesCards';
import { CardsNavigationContext, type StateProvider } from '../context/cards-navigation-context';
import Frame from '../components/Frame';

type TypeFrameColors = {
    value: string,
    colorFrom: string,
    colorTo: string
}

export default function FriendSearch() {
    const [state, setState] = useState<StateProvider>({
        friendState: true,
        datesState: false,
        matchesState: false
    });

    const setActiveButton = (button: keyof StateProvider) => {
        setFrameColor(frameColors.find(color => color.value === button) ?? frameColors[0]);
        setState(prev => ({
            friendState: button === 'friendState',
            datesState: button === 'datesState',
            matchesState: button === 'matchesState'
        }));
    };

    const [frameColor, setFrameColor] = useState<TypeFrameColors>({
        value: 'friendState',
        colorFrom: '#9072E5',
        colorTo: '#7086E3'
    });

    const frameColors: TypeFrameColors[] = [
        { value: 'friendState', colorFrom: '#9072E5', colorTo: '#7086E3' },
        { value: 'datesState', colorFrom: '#FFB03A', colorTo: '#FF6B86' },
        { value: 'matchesState', colorFrom: '#FF6B86', colorTo: '#FF58A4' },
    ];

    const friendsImagesList = [
        { imageUrl: require('../../assets/photos/sandra-gomez.png'), alt: 'first image', name: 'Sandra Gómez', age: 21, location: 'Surco, Perú' },
        { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina' }
    ];

    const datesImagesList = [
        { imageUrl: require('../../assets/photos/dates-front-image.jpg'), alt: 'first image', name: 'Beatriz', age: 22, location: '22 Km, Lima' },
        { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina' }
    ]

    const matchesImagesList = [
        { imageUrl: require('../../assets/photos/matches-front-image.jpg'), alt: 'first image', name: 'Carmen', age: 22, location: 'Miraflores, Perú' },
        { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina' }
    ]

    return (
        <Frame colorFrom={`${frameColor.colorFrom}`} colorTo={`${frameColor.colorTo}`}>
            <CardsNavigationContext.Provider value={{ states: state, setActiveButton }}>
                <TopBar />
                {state.friendState && <ImagesCards imagesList={friendsImagesList} />}
                {state.datesState && <ImagesCards imagesList={datesImagesList} />}
                {state.matchesState && <ImagesCards imagesList={matchesImagesList} />}
            </CardsNavigationContext.Provider>
        </Frame>
    );
}
