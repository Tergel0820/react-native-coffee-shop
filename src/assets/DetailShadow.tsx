import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const DetailShadow = () => {
  return (
    <Svg
      width={400}
      height={256}
      viewBox="0 0 400 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path fill="url(#paint0_linear_1848_3079)" d="M0 0H400V256H0z" />
      <Defs>
        <LinearGradient
          id="paint0_linear_1848_3079"
          x1={52.2667}
          y1={364.634}
          x2={93.1856}
          y2={73.3204}
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default DetailShadow;
