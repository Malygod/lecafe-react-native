import { Svg, Path } from 'react-native-svg'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProps } from '../../../types/navigation';

export default function TopBar() {
    const navigation = useNavigation<NavigationStackProps>();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('SideBar')}
                activeOpacity={1}
                //make it transparent please
                style={{
                    backgroundColor: 'transparent',
                    shadowColor: 'tr',
                    zIndex: 1
                }}
            >
                <Svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 17L22 19L10 19L10 17L22 17Z" fill="white"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11L22 13L2 13L2 11L22 11Z" fill="white"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 5L14 7L2 7L2 5L14 5Z" fill="white"/>
                </Svg>
            </TouchableOpacity>
            <Svg width="26" height="26" viewBox="0 0 24 24" fill="none" >
                <Path d="M19.3325 2H3.66754C3.28927 2 3 2.30709 3 2.70866V5.70866C3 5.87402 3.06675 6.06299 3.17801 6.1811L9.11911 13.1024V22.2913C9.11911 22.5512 9.25262 22.7874 9.45288 22.9055C9.56414 22.9764 9.67539 23 9.78665 23C9.89791 23 10.0092 22.9764 10.1204 22.9055L13.5471 20.8268C13.7474 20.7087 13.8809 20.4724 13.8809 20.2126V13.126L19.822 6.20472C19.9332 6.06299 20 5.89764 20 5.73228V2.70866C20 2.30709 19.7107 2 19.3325 2ZM18.6649 5.4252L12.7238 12.3701C12.6126 12.5118 12.5458 12.6772 12.5458 12.8425V19.8346L10.4542 21.1102V12.8425C10.4542 12.6772 10.3874 12.4882 10.2762 12.3701L4.33508 5.4252V3.41732H18.6649V5.4252Z" fill="white"/>
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
        width: '100%',
    }
});