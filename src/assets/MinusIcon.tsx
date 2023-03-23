import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const MinusIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1895_2242)">
        <Path d="M19 11H5v2h14v-2z" fill="#D3A762" />
      </G>
      <Defs>
        <ClipPath id="clip0_1895_2242">
          <Rect
            width={24}
            height={24}
            rx={2}
            transform="matrix(-1 0 0 1 24 0)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MinusIcon;
