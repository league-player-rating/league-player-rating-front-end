import styled from "styled-components";
import Crest from "../atoms/Crest";

type IVariant = "Large" | "Big" | "Default" | "Small";

interface IProps {
  value: number;
  metric?: string;
  variant?: IVariant;
}

const crestShades = {
  gold: {
    fill: "#C89300",
    stroke: "#AD7F00",
  },
  silver: {
    fill: "#AAA495",
    stroke: "#938D81"
  },
  bronze: {
    fill: "#924a13",
    stroke: "#7e4010"
  }
}

const Shield: React.FC<IProps> = ({
  value,
  metric,
  variant = "Default"
}) => {
  const shade = value >= 88
    ? crestShades.gold
    : value >= 70 && value < 88
    ? crestShades.silver
    : crestShades.bronze;
  const height = variant === "Large"
    ? ""
    : variant === "Big"
    ? "108px"
    : variant === "Small"
    ? "46px"
    : "54px";
  const strokeWidth = variant === "Large"
  ? 4
  : variant === "Big"
  ? 8
  : variant === "Small"
  ? 16
  : 10;

  return (
    <Wrapper>
      <Content variant={variant}>
        {metric
          ? <Metric>{metric} Rating</Metric>
          : <Break />
        }
        <Value>{value}</Value>
      </Content>
      <Crest
        height={height}
        strokeWidth={strokeWidth}
        {...shade}
      />
    </Wrapper>
  )
}

export default Shield;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Break = styled.div`
  height: 12px;
`;

const Content = styled.div<{ variant: IVariant;}>`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h4 {
    font-size: ${({ variant }) => variant === "Large"
      ? "26px"
      : variant === "Big"
      ? "10px"
      : variant === "Small"
      ? ""
      : "10px"
    };
  }

  > p {
    font-size: ${({ variant }) => variant === "Large"
      ? "120px"
      : variant === "Big"
      ? "58px"
      : variant === "Small"
      ? "21px"
      : "58px"
    };
  }
`;

const Metric = styled.h4`
  margin: 0;
  white-space: nowrap;
  z-index: 1;
`;

const Value = styled.p`
  margin: -16px 0 0;
  font-weight: bold;
`;