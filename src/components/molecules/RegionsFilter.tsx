import regions from "../../constants/regions";
import SelectFilter, { ISelectProps } from "../atoms/SelectFilter"

interface IProps extends ISelectProps {};

const RegionsFilter: React.FC<IProps> = ({
  value,
  updateValue
}) => {
  return (
    <SelectFilter
      metric="Region"
      value={value}
      updateValue={updateValue}
      options={regions.map(el => el.region)}
    />
  )
}

export default RegionsFilter;