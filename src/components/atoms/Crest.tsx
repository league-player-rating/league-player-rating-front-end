interface IProps {
  fill: string;
  width?: string;
  height?: string;
  stroke: string;
  strokeWidth?: number;
}

const Crest: React.FC<IProps> = ({
  fill,
  height = "313.246",
  stroke,
  strokeWidth = 4
}) => {
  return (
    <svg height={height} viewBox="0 0 264.011 313.246">
      <g transform="matrix(1, 0, 0, 1, 0, 0)">
        <path d="M-8646.036-21612.426c.081-8.8-112.723-55.352-112.723-55.352s-9.982-214.246-9.8-214.129c114.589-31.82,129.264-31.51,241.945,0-.368-.227-11.287,214.129-11.287,214.129S-8645.955-21621.252-8646.036-21612.426Z" transform="translate(8779.63 21913.65)" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      </g>
    </svg>
  )
}

export default Crest;