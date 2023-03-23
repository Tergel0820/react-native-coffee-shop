import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CartIcon = ({color}: {color: string}) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1654_2902)">
        <Path
          d="M4 16V4H2V2h3a1 1 0 011 1v12h12.438l2-8H8V5h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H5a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1654_2902">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CartIcon;
