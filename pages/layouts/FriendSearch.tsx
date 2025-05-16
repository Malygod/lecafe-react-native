import React, { useState, useMemo } from 'react';
import TopBar from 'pages/components/ui/TopBar';
import ImagesCards from '../components/ui/ImagesCards';
import { CardsNavigationContext, type StateProvider } from '../context/cards-navigation-context';
import Frame from '../components/Frame';
import { View, StyleSheet } from 'react-native';

export default function FriendSearch() {
    const [activeTab, setActiveTab] = useState<keyof StateProvider>('friendState');
    
    const frameColors = useMemo(() => [
        { value: 'friendState', colorFrom: '#9072E5', colorTo: '#7086E3' },
        { value: 'datesState', colorFrom: '#FFB03A', colorTo: '#FF6B86' },
        { value: 'matchesState', colorFrom: '#FF6B86', colorTo: '#FF58A4' },
    ], []);

    const imageLists = useMemo(() => ({
        friendState: [
            { imageUrl: require('../../assets/photos/sandra-gomez.png'), alt: 'first image', name: 'Sandra Gómez', age: 21, location: 'Surco, Perú', interests: ['Viajar','Leer','Amistad','Salir de fiesta','Pasarlo bien'] },
            { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina', interests: ['Viajar','Leer','Pasarlo bien'] }
        ],
        datesState: [
            { imageUrl: require('../../assets/photos/dates-front-image.jpg'), alt: 'first image', name: 'Beatriz', age: 22, location: '22 Km, Lima', interests: ['Viajar','Leer','Salir de fiesta'] },
            { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina', interests: ['Viajar','Leer','Pasarlo bien'] }
        ],
        matchesState: [
            { imageUrl: require('../../assets/photos/matches-front-image.jpg'), alt: 'first image', name: 'Carmen', age: 22, location: 'Miraflores, Perú', interests: ['Viajar','Leer','Pasarlo bien'] },
            { imageUrl: require('../../assets/photos/how-to-whiten-teeth.png'), alt: 'behind image', name: 'Belen Sanchez', age: 25, location: 'Buenos aires, Argentina', interests: ['Viajar','Leer','Pasarlo bien'] }
        ]
    }), []);

    const currentFrameColor = frameColors.find(color => color.value === activeTab) || frameColors[0]; 

    return (
        <Frame colorFrom={currentFrameColor.colorFrom} colorTo={currentFrameColor.colorTo}>
            <CardsNavigationContext.Provider value={{
                states: {
                    friendState: activeTab === 'friendState',
                    datesState: activeTab === 'datesState',
                    matchesState: activeTab === 'matchesState'
                },
                setActiveButton: (button) => {
                    setActiveTab(button);
                }
            }}>
                <TopBar />
                
                {/* componentes renderizados simultaneamente */}
                <View style={styles.cardsContainer}>
                    <View style={[styles.tabContent, activeTab !== 'friendState' && styles.hiddenTab]}>
                        <ImagesCards 
                            key="friends" 
                            imagesList={imageLists.friendState} 
                        />
                    </View>
                    
                    <View style={[styles.tabContent, activeTab !== 'datesState' && styles.hiddenTab]}>
                        <ImagesCards 
                            key="dates" 
                            imagesList={imageLists.datesState} 
                        />
                    </View>
                    
                    <View style={[styles.tabContent, activeTab !== 'matchesState' && styles.hiddenTab]}>
                        <ImagesCards 
                            key="matches" 
                            imagesList={imageLists.matchesState} 
                        />
                    </View>
                </View>
            </CardsNavigationContext.Provider>
        </Frame>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        position: 'relative',
    },
    tabContent: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    hiddenTab: {
        opacity: 0,
        pointerEvents: 'none',
        zIndex: -1,
    },
});