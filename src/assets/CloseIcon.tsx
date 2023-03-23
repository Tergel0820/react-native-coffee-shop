import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const CloseIcon = () => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_220_2497)">
        <Path
          d="M10 11.178l-4.125 4.125-1.178-1.178L8.822 10 4.697 5.875l1.178-1.178L10 8.822l4.125-4.125 1.178 1.178L11.178 10l4.125 4.125-1.178 1.178L10 11.178z"
          fill="#2D2A2B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_220_2497">
          <Rect
            x={20}
            y={20}
            width={20}
            height={20}
            rx={2}
            transform="rotate(180 20 20)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CloseIcon;
