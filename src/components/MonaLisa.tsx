import { monalisaLinePath } from "../data/monalisaLinePath";
import { monalisaPath } from "../data/monalisaPath";

export const MonaLisa = ({
  fillColors,
  onFill,
}: {
  fillColors: any;
  onFill: any;
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1500.000000pt"
      height="2048.000000pt"
      viewBox="0 0 1500.000000 1300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1700.000000) scale(0.10000,-0.10000)"
        fill="#000000"
        stroke="none"
      >
        {monalisaPath.map((path, index) => (
          <path
            key={index}
            onClick={() => onFill(index)}
            fillRule="evenodd"
            fill={fillColors[index]}
            d={path}
          />
        ))}
        {monalisaLinePath.map((linePath, index) => (
          <path key={index} d={linePath} />
        ))}
      </g>
    </svg>
  );
};
