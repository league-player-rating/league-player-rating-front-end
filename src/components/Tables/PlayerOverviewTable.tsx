import RegionLogo from "../../assets/leagues-tables/RegionLogo"
import RoleIcon from "../../assets/roles/RoleIcon"
import Flag from "../atoms/Flag"
import PlayerAvatar from "../atoms/PlayerAvatar"
import TableLink from "../atoms/TableLink"
import Shield from "../molecules/Shield"
import Table from "../organisms/Table"

export interface IData {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  nationality: string;
  ign: string;
  team: string;
  team_id?: number;
  role: "top" | "jungle" | "mid" | "bot" | "support";
  region: string;
  player_rating: number;
}

interface IProps {
  data: IData[];
}

const PlayerOverviewTable: React.FC<IProps> = ({ data }) => {
  return (
    <Table<IData>
      data={data}
      pagination
      columns={[
        {
          Header: () => null,
          accessor: "image",
          disableSortBy: true,
          width: 240,
          Cell: ({ value }) => <PlayerAvatar src={value} height={116} />
        },
        {
          Header: "Region",
          accessor: "region",
          width: 180,
          Cell: ({ value }) => <RegionLogo region={value} height={64} />
        },
        {
          Header: "Team",
          accessor: "team",
          width: 180,
          Cell: ({ value, row }) => <TableLink to={`/teams/${row.original.team_id}`}>{value}</TableLink>
        },
        {
          Header: "Role",
          accessor: "role",
          width: 180,
          Cell: ({ value }) => <RoleIcon role={value} dark height={36} />
        },
        {
          Header: "IGN",
          accessor: "ign",
          width: 180,
          Cell: ({ value, row }) => <TableLink to={`/players/${row.original.id}`}>{value}</TableLink>
        },
        {
          Header: "Name",
          accessor: "first_name",
          width: 260,
          Cell: ({ value, row }) => <TableLink to={`/players/${row.original.id}`}>{value} {row.original.last_name}</TableLink>
        },
        {
          Header: "Nationality",
          accessor: "nationality",
          width: 180,
          Cell: ({ value }) => <Flag country={value} />
        },
        {
          Header: "Player Rating",
          accessor: "player_rating",
          width: 180,
          Cell: ({ value }) => <Shield value={value} variant="Small" />
        },
      ]}
    />
  )
}

export default PlayerOverviewTable;