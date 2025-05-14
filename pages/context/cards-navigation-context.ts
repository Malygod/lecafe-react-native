import React from 'react';

export type StateProvider = {
    friendState: boolean;
    datesState: boolean;
    matchesState: boolean;
};

export type ContextType = {
    states: StateProvider;
    setActiveButton: (button: keyof StateProvider) => void;
};

export const CardsNavigationContext = React.createContext<ContextType>({
    states: {
        friendState: true,
        datesState: false,
        matchesState: false
    },
    setActiveButton: () => { }
});