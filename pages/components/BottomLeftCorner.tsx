import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const BottomLeftCorner = () => (
    <Svg
        width={226}
        height={279}
        viewBox="0 0 226 279"
        style={{
            position: 'absolute',
            bottom: 0,
            left: 0
        }}
    >
        <Defs>
            <LinearGradient
                id="paint0_linear"
                x1="58.9%"
                y1="43.8%"
                x2="-49.8%"
                y2="137.3%"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset="0" stopColor="white" stopOpacity="0.08" />
                <Stop offset="1" stopColor="white" stopOpacity="0" />
            </LinearGradient>
        </Defs>

        <Path
            fill="url(#paint0_linear)"
            d="M-0.999982 9.92249e-06C15.8113 11.4508 27.2409 29.3175 27.2999 48.1522C27.3268 56.2717 25.5168 64.3817 26.2311 72.4775C27.2194 83.691 33.2457 94.4964 42.704 102.023C42.704 102.023 53.7791 107.214 79.56 120.502C105.341 133.789 122.528 159.414 116.083 185.04C109.638 210.665 117.179 220.09 117.179 220.09C123.06 228.959 133.27 236.348 144.904 236.519C156.108 236.685 166.109 230.35 177.152 228.693C195.316 225.969 213.723 237.098 221.189 251.979C225.432 260.44 226.64 269.746 225.7 279L-0.999969 279L-0.999982 9.92249e-06Z"
        />
    </Svg>
);

export default BottomLeftCorner;