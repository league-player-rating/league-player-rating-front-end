import nationalities from "../../constants/nationalities";
import SelectFilter, { ISelectProps } from "../atoms/SelectFilter"

interface IProps extends ISelectProps {};

const NationalitiesFilter: React.FC<IProps> = ({
  value,
  updateValue
}) => {
  return (
    <SelectFilter
      metric="Nationality"
      value={value}
      updateValue={updateValue}
      options={Object.keys(nationalities)}
    />
  )
}

export default NationalitiesFilter;