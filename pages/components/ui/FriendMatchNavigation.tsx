import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardsNavigationContext, type StateProvider } from '../../context/cards-navigation-context';
import FriendsButton from './Buttons/FriendsButton';
import DatesButton from './Buttons/DatesButton';
import MatchesButton from './Buttons/MatchesButton';

export default function FriendMatchNavigation() {
    const [state, setState] = useState<StateProvider>({
        friendState: true,
        datesState: false,
        matchesState: false
    });

  const setActiveButton = (button: keyof StateProvider) => {
    setState(prev => ({
      friendState: button === 'friendState',
      datesState: button === 'datesState',
      matchesState: button === 'matchesState'
    }));
  };

    return (
        <View style={styles.actionsContainer}>
            <CardsNavigationContext.Provider value={{states: state, setActiveButton}}>
                <FriendsButton type="friendState"/>
                <DatesButton type="datesState"/>
                <MatchesButton type="matchesState"/>
            </CardsNavigationContext.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        position: 'absolute',
        top: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 25,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        zIndex: 100
    }
});