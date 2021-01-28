import Flag from "../atoms/Flag"
import TableLink from "../atoms/TableLink"
import Shield from "../molecules/Shield"

import Table from "../organisms/Table"

export interface IData {
  id: number;
  team_src: string;
  team: string;
  hq_location: string;
  region: string;
  team_rating: number;
}

interface IProps {
  data: IData[];
}

const TeamOverviewTable: React.FC<IProps> = ({ data }) => {
  return (
    <Table<IData>
      data={data}
      columns={[
        {
          Header: "",
          accessor: "team_src",
          disableSortBy: true,
          width: 180,
          Cell: ({ value, row }) => <img src={value} alt={row.original.team} />
        },
        {
          Header: "Name",
          accessor: "team",
          width: 260,
          Cell: ({ value, row }) => <TableLink to={`/teams/${row.original.id}`}>{value}</TableLink>
        },
        {
          Header: "Region",
          accessor: "region",
          width: 180,
        },
        {
          Header: "HQ Location",
          disableSortBy: true,
          accessor: "hq_location",
          width: 180,
          Cell: ({ value }) => <Flag country={value} />
        },
        {
          Header: "Team Rating",
          accessor: "team_rating",
          width: 180,
          Cell: ({ value }) => <Shield value={value} variant="Small" />
        },
      ]}
    />
  )
}

export default TeamOverviewTable;