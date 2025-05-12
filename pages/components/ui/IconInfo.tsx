import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const InfoIcon = () => (
  <View style={styles.container}>
    {/* Sombra difuminada */}
    <View style={styles.shadow}>
      {/* Círculo principal */}
      <View style={styles.circle}>
        {/* Icono de información */}
        <Svg
          width={26}
          height={26}
          viewBox="0 0 24 24"
          style={styles.icon}
        >
          <Path
            fill="#FFFFFF"
            d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </Svg>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 16,
    backgroundColor: '#FF6B86',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center'
  },
});

export default InfoIcon;