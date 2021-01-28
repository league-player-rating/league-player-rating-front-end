import { useState } from "react";

import SearchFilter from "../components/atoms/SearchFilter";
import RatingFilter from "../components/atoms/RatingFilter";

import Hero from "../components/molecules/Hero";
import BodyContainer from "../components/molecules/BodyContainer";
import RolesFilter from "../components/molecules/RolesFilter";
import RegionsFilter from "../components/molecules/RegionsFilter";
import NationalitiesFilter from "../components/molecules/NationalitiesFilter";
import CardContainer from "../components/molecules/CardContainer";

import PlayerOverviewTable, { IData } from "../components/Tables/PlayerOverviewTable";

import useQueryHandler from "../utils/useQueryHandler";
import useDebounce from "../utils/useDebounce";

import PlayerHeaderBG from "../assets/player-heading.png";
import FilterContainer from "../components/atoms/FilterContainer";

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

  let returnedData = data?.data;

  return (
    <div>
      <Hero small background={PlayerHeaderBG}>
        Players
      </Hero>
      <BodyContainer>
        <CardContainer fullWidth>
          <FilterContainer>
            <SearchFilter value={searchText} updateValue={(str: string) => setSearchText(str)} />
            <RegionsFilter value={region} updateValue={(str: string) => setRegion(str)} />
            <RolesFilter value={role} updateValue={(str: string) => setRole(str)} />
            <NationalitiesFilter value={nationality} updateValue={(str: string) => setNationality(str)} />
            <RatingFilter metric="Player" value={playerRating} updateValue={(min: number, max: number) => setPlayerRating({ min, max })} />
          </FilterContainer>
        </CardContainer>
        <CardContainer fullWidth>
          {loading && <p>Loading...</p>}
          {error && <p>Oops! Something went wrong. Maybe try refreshing the page?</p>}
          {returnedData && <PlayerOverviewTable data={returnedData} />}
        </CardContainer>
      </BodyContainer>
    </div>
  );
}

export default PlayerOverview;