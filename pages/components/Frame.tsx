import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import BottomLeftCorner from "./BottomLeftCorner";
import BottomRightCorner from "./BottomRightCorner";
import TopRightCorner from "./TopRightCorner";
import TopLeftCorner from "./TopLeftCorner";

interface FrameProps {
    children?: React.ReactNode;
    colorFrom: string;
    colorTo: string;
}

export default function Frame({ children, colorFrom, colorTo }: FrameProps) {
    
    return (
        <ExpoLinearGradient
            colors={[colorFrom, colorTo]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.1, y: 1 }}
            style={styles.background}
        >
            <TopRightCorner/>
            <TopLeftCorner/>
            <BottomRightCorner/>
            <BottomLeftCorner/>
            {children}
        </ExpoLinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'relative'
    },
});