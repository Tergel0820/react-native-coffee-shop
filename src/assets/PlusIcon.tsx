import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1895_2238)">
        <Path d="M13 11V5h-2v6H5v2h6v6h2v-6h6v-2h-6z" fill="#D3A762" />
      </G>
      <Defs>
        <ClipPath id="clip0_1895_2238">
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

export default PlusIcon;
