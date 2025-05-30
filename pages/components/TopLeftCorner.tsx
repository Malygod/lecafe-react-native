import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const TopLeftCorner = () => (
    <Svg
        width={257}
        height={104}
        viewBox="0 0 257 104"
        style={{
        position: 'absolute',
        top: 0,
        left: 0
        }}
    >
        <Defs>
        <LinearGradient
            id="paint0_linear_2006_8784"
            x1="87.4264"
            y1="25.7956"
            x2="71.2123"
            y2="127.192"
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset="0" stopColor="white" stopOpacity="0.04" />
            <Stop offset="1" stopColor="white" stopOpacity="0.08" />
        </LinearGradient>
        </Defs>
        
        <Path
        fill="url(#paint0_linear_2006_8784)"
        d="M-1 77.4968V102.527C10.7444 102.052 16.915 96.1927 28.6595 96.5753C38.4181 96.8963 47.5971 100.986 57.1715 102.846C72.3665 105.797 88.6668 102.877 101.804 94.8471C116.199 86.0523 126.169 71.9761 136.961 59.162C147.753 46.3479 160.791 33.89 177.424 30.5964C192.718 27.5665 213.294 31.6969 227.334 25.0304C239.966 17.211 247.695 9.44814 257 0.0324097C257 0.0324097 211.603 0.0324097 195.422 0.0324097H-1V77.4968Z"
        />
    </Svg>
);

export default TopLeftCorner;