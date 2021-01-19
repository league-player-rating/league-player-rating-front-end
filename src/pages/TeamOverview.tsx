import { useState } from "react";

import SearchFilter from "../components/atoms/SearchFilter";
import RatingFilter from "../components/atoms/RatingFilter";
import TableLink from "../components/atoms/TableLink";
import Flag from "../components/atoms/Flag";

import Hero from "../components/molecules/Hero";
import BodyContainer from "../components/molecules/BodyContainer";
import RegionsFilter from "../components/molecules/RegionsFilter";
import NationalitiesFilter from "../components/molecules/NationalitiesFilter";
import CardContainer from "../components/molecules/CardContainer";

import Table from "../components/organisms/Table";

import useQueryHandler from "../utils/useQueryHandler";
import useDebounce from "../utils/useDebounce";

import TeamHeadingBG from "../assets/teams-heading.png";
// import RegionLogo from "../assets/leagues-tables/RegionLogo";

interface IData {
  id: number;
  team_src: string;
  team: string;
  nationality: string;
  region: string;
  player_rating: number;
}

const TeamOverview = () => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
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
    "teamOverview",
    "/overview/team",
    {
      searchText: useDebounce(searchText),
      region,
      nationality,
      minPlayerRating: useDebounce(playerRating.min),
      maxPlayerRating: useDebounce(playerRating.max),
    }
  );

  let returnedData = data && data.data;

  return (
    <div>
      <Hero small background={TeamHeadingBG}>
        Teams &amp; Regions
      </Hero>
      <BodyContainer>
        <CardContainer fullWidth>
          <SearchFilter value={searchText} updateValue={(str: string) => setSearchText(str)} />
          <RegionsFilter value={region} updateValue={(str: string) => setRegion(str)} />
          <NationalitiesFilter value={nationality} updateValue={(str: string) => setNationality(str)} />
          <RatingFilter metric="Player" value={playerRating} updateValue={(min: number, max: number) => setPlayerRating({ min, max })} />
        </CardContainer>
        <CardContainer fullWidth>
          {loading && <p>Loading...</p>}
          {error && <p>Oops! Something went wrong. Maybe try refreshing the page?</p>}
          {returnedData && <Table<IData>
            data={returnedData}
            columns={[
              {
                Header: "",
                accessor: "team_src",
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

export default TeamOverview;