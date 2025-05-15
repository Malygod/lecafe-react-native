import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendsButton from './Buttons/FriendsButton';
import DatesButton from './Buttons/DatesButton';
import MatchesButton from './Buttons/MatchesButton';

export default function FriendMatchNavigation() {
    return (
        <View style={styles.actionsContainer}>
                <FriendsButton type="friendState"/>
                <DatesButton type="datesState"/>
                <MatchesButton type="matchesState"/>
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