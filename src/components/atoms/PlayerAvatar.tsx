import { useEffect, useState } from "react";
import styled from "styled-components";
import Placeholder from "../../assets/player-placeholder.png";

interface IProps {
  src: string;
  height?: number;
}

const PlayerAvatar: React.FC<IProps> = ({ src, height }) => {
  const [imgExists, setImgExists] = useState(false);

  useEffect(() => {
    const http = new XMLHttpRequest();
    http.open('HEAD', src, false);
    http.send();
    setImgExists(http.status !== 404);
  }, [imgExists, src])

  return (
    <Image
      src={imgExists ? src : Placeholder}
      alt={imgExists ? "Player" : "Placeholder"}
      height={height}
    />
  )
}

export default PlayerAvatar;

const Image = styled.img<{ height?: number }>`
  height: ${({ height }) => height ? `${height}px` : "auto"};
`;