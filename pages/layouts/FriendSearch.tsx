import React from 'react';
import TopBar from 'pages/components/ui/TopBar';
import ImagesCards from '../components/ui/ImagesCards';
import Frame from '../components/Frame';

export default function FriendSearch() {

    const imagesList = [
        { imageUrl: require('../../assets/photos/sandra-gomez.png'), alt: 'first image', name: 'Sandra Gómez', age: 21, location: 'Surco, Perú' },
        { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina' }
    ];

    return (
        <Frame colorFrom='#9072E5' colorTo='#7086E3'>
            <TopBar />
            <ImagesCards
                imagesList={imagesList}
            />
        </Frame>
    );
}
