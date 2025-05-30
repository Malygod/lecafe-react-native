import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const TopRightCorner = () => (
    <Svg
        width={279}
        height={201}
        viewBox="0 0 279 201"
        style={{
        position: 'absolute',
        top: 0,
        right: 0
        }}
    >
        <Defs>
        <LinearGradient
            id="paint0_linear_2006_8781"
            x1="122.312"
            y1="118.547"
            x2="352.839"
            y2="-127.469"
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset="0" stopColor="white" stopOpacity="0.08" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
        </Defs>
        
        <Path
        fill="url(#paint0_linear_2006_8781)"
        d="M1.75273e-05 0.00165405C11.4612 14.8496 29.3439 24.9443 48.1957 24.9964C56.3225 25.0202 64.4398 23.4215 72.5429 24.0524C83.7666 24.9253 94.5818 30.2478 102.115 38.6015C102.115 38.6015 107.311 48.3831 120.61 71.153C133.91 93.923 159.558 109.103 185.207 103.41C210.856 97.718 220.289 104.378 220.289 104.378C229.166 109.573 236.561 118.59 236.732 128.865C236.898 138.761 230.558 147.594 228.9 157.347C226.174 173.39 237.312 189.647 252.207 196.241C260.676 199.988 269.99 201.056 279.252 200.226L279.252 0.00167847L1.75273e-05 0.00165405Z"
        />
    </Svg>
);

export default TopRightCorner;