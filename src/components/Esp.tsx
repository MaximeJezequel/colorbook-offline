import { espLinePath } from "../data/espLinePath"
import { espPath } from "../data/espPath"

export const Esp = ({
  fillColors,
  onFill,
}: {
  fillColors: any
  onFill: any
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1152.000000pt"
      height="2048.000000pt"
      viewBox="0 0 1200.000000 2200.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(20.000000,2100.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        {espPath.map((path, index) => (
          <path
            key={index}
            onClick={() => onFill(index)}
            fillRule="evenodd"
            fill={fillColors[index]}
            d={path}
          />
        ))}
        {espLinePath.map((linePath, index) => (
          <path key={index} d={linePath} />
        ))}
      </g>
    </svg>
  )
}
