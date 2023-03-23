import * as React from 'react';
import Svg, {Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

const BannerShadow = () => {
  return (
    <Svg
      width={343}
      height={204}
      viewBox="0 0 343 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        width={343}
        height={204}
        rx={4}
        fill="url(#paint0_linear_220_2109)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_220_2109"
          x1={161}
          y1={449}
          x2={162.5}
          y2={13}
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default BannerShadow;
