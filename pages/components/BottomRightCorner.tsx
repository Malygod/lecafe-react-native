import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const BottomRightCorner = () => (
    <Svg
        width={227}
        height={182}
        viewBox="0 0 227 182"
        style={{
            position: 'absolute',
            bottom: 0,
            right: 0
        }}
    >
        <Defs>
            <LinearGradient
                id="paint0_linear_2006_8782"
                x1="49.1075"
                y1="70.4198"
                x2="401.143"
                y2="158.575"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset="0.016" stopColor="#FFD9E9" stopOpacity="0.08" />
                <Stop offset="1" stopColor="white" stopOpacity="0.03" />
            </LinearGradient>
        </Defs>

        <Path
            fill="url(#paint0_linear_2006_8782)"
            d="M227 182L3.12994 182C-0.975815 168.271 -1.12165 153.003 3.16359 139.325C9.70363 118.457 26.3454 101.991 45.5897 97.3492C69.9382 91.4779 95.7674 103.542 119.925 96.7375C136.96 91.9383 151.1 78.0894 161.05 61.8252C167.859 50.6881 173.048 38.2393 181.035 28.1427C192.853 13.2092 209.405 5.05498 227 0.602666L227 182Z"
        />
    </Svg>
);

export default BottomRightCorner;