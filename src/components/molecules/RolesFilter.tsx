import roles from "../../constants/roles"
import SelectFilter, { ISelectProps } from "../atoms/SelectFilter"

interface IProps extends ISelectProps {};

const RolesFilter: React.FC<IProps> = ({
  value,
  updateValue
}) => {
  return (
    <SelectFilter
      metric="Role"
      value={value}
      updateValue={updateValue}
      options={roles.map(el => el.role)}
    />
  )
}

export default RolesFilter;