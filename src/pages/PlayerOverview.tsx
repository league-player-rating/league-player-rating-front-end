import { useState } from "react";

import SearchFilter from "../components/atoms/SearchFilter";
import RatingFilter from "../components/atoms/RatingFilter";
import PlayerAvatar from "../components/atoms/PlayerAvatar";
import TableLink from "../components/atoms/TableLink";
import Flag from "../components/atoms/Flag";

import Hero from "../components/molecules/Hero";
import BodyContainer from "../components/molecules/BodyContainer";
import RolesFilter from "../components/molecules/RolesFilter";
import RegionsFilter from "../components/molecules/RegionsFilter";
import NationalitiesFilter from "../components/molecules/NationalitiesFilter";
import CardContainer from "../components/molecules/CardContainer";

import Table from "../components/organisms/Table";

import useQueryHandler from "../utils/useQueryHandler";
import useDebounce from "../utils/useDebounce";

import PlayerHeaderBG from "../assets/player-heading.png";
import RegionLogo from "../assets/leagues-tables/RegionLogo";
import RoleIcon from "../assets/roles/RoleIcon";

interface IData {
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

function PlayerOverview() {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  const [nationality, setNationality] = useState("");
  const [playerRating, setPlayerRating] = useState({
    min: 0,
    max: 100
  });

  const {
    loading,
    data,
    error
  } = useQueryHandler<IData>(
    "playerOverview",
    "/overview/player",
    {
      searchText: useDebounce(searchText),
      region,
      role,
      nationality,
      minPlayerRating: useDebounce(playerRating.min),
      maxPlayerRating: useDebounce(playerRating.max),
    }
  );

  let returnedData = data && data.data;

  return (
    <div>
      <Hero small background={PlayerHeaderBG}>
        Players
      </Hero>
      <BodyContainer>
        <CardContainer fullWidth>
          <SearchFilter value={searchText} updateValue={(str: string) => setSearchText(str)} />
          <RegionsFilter value={region} updateValue={(str: string) => setRegion(str)} />
          <RolesFilter value={role} updateValue={(str: string) => setRole(str)} />
          <NationalitiesFilter value={nationality} updateValue={(str: string) => setNationality(str)} />
          <RatingFilter metric="Player" value={playerRating} updateValue={(min: number, max: number) => setPlayerRating({ min, max })} />
        </CardContainer>
        <CardContainer fullWidth>
          {loading && <p>Loading...</p>}
          {error && <p>Oops! Something went wrong. Maybe try refreshing the page?</p>}
          {returnedData && <Table<IData>
            data={returnedData}
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
                Cell: ({ value }) => <Flag country={value} height={32} />
              },
              {
                Header: "Player Rating",
                accessor: "player_rating",
                width: 180
              },
            ]}
          />}
        </CardContainer>
      </BodyContainer>
    </div>
  );
}

export default PlayerOverview;