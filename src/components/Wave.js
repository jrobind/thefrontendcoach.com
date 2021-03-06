export default function Wave({ alignment }) {
  return alignment === "bottom" ? 
    <svg 
      className="wave" 
      viewBox="-605.588 168.766 1903.513 129.016"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeWidth="10" d="M 207.067 212.347 C 88.01 151.461 37.625 366.644 -167.21 260.215 C -298.471 192.014 -464.906 237.14 -615.012 293.548 L -615.012 145.359 L 1304.988 145.359 L 1304.988 293.548 C 1124.523 312.044 951.798 112.641 763.115 212.418 C 574.432 312.195 326.124 273.233 207.067 212.347 Z" style={{fill: 'rgb(43, 130, 117)'}}/>
    </svg> :
    <svg 
      className="wave"
      preserveAspectRatio="xMidYMin slice"
      viewBox="-606.652 143.223 1905.641 147.109"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 826.337 25.54 C 678.546 84.297 603.696 68.787 447.802 35.144 C 293.343 1.811 137.334 1.811 0 1.811 L 0 150 L 1920 150 L 1920 1.811 C 1739.535 -16.685 1566.81 182.718 1378.127 82.941 C 1189.444 -16.836 974.129 -33.218 826.337 25.54 Z" fill="#2B8275" transform="matrix(1, 0, 0, 1, -615.011647, 153.801998)"/>
    </svg>
}
