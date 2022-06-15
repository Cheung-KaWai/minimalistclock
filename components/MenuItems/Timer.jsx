import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Timer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#868e96"
    strokeWidth={2}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </Svg>
);

export default Timer;
