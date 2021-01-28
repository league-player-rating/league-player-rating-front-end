import { useState } from "react";
import styled from "styled-components";

import SearchFilter from "../components/atoms/SearchFilter";
import RatingFilter from "../components/atoms/RatingFilter";
import FilterContainer from "../components/atoms/FilterContainer";

import Hero from "../components/molecules/Hero";
import BodyContainer from "../components/molecules/BodyContainer";
import RegionsFilter from "../components/molecules/RegionsFilter";
import CardContainer from "../components/molecules/CardContainer";
import Shield from "../components/molecules/Shield";

import TeamOverviewTable, { IData } from "../components/Tables/TeamOverviewTable";

import useQueryHandler from "../utils/useQueryHandler";
import useDebounce from "../utils/useDebounce";
import groupSort from "../utils/groupSort";

import TeamHeadingBG from "../assets/teams-heading.png";
import RegionLogo from "../assets/leagues-tables/RegionLogo";

const TeamOverview = () => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
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
      minPlayerRating: useDebounce(playerRating.min),
      maxPlayerRating: useDebounce(playerRating.max),
    }
  );

  let returnedData = data?.data;

  const groupedData = returnedData && groupSort<IData>(returnedData, "region");
  console.log(groupedData);
  return (
    <div>
      <Hero small background={TeamHeadingBG}>
        Teams &amp; Regions
      </Hero>
      <BodyContainer>
        <CardContainer fullWidth>
          <FilterContainer>
            <SearchFilter value={searchText} updateValue={(str: string) => setSearchText(str)} />
            <RegionsFilter value={region} updateValue={(str: string) => setRegion(str)} />
            <RatingFilter metric="Player" value={playerRating} updateValue={(min: number, max: number) => setPlayerRating({ min, max })} />
          </FilterContainer>
        </CardContainer>
        {(loading || error) && (
          <CardContainer fullWidth>
            {loading && <p>Loading...</p>}
            {error && <p>Oops! Something went wrong. Maybe try refreshing the page?</p>}
          </CardContainer>
        )}
        {groupedData && Object.keys(groupedData).map((el) => {
          const totalCombinedRating = groupedData[el].reduce((acc: number | IData, curr: IData) => {
            const total = typeof acc === "number" ? acc : Number(acc.team_rating);
            return total + Number(curr.team_rating)
          });
          const leagueRating = Math.round(totalCombinedRating/groupedData[el].length)
          return (
            <CardContainer fullWidth key={el} marginOverride="64px">
              <Wrapper>
                <RegionLogo region={el} height={100} />
                <Shield metric="League" value={leagueRating} variant="Big" />
              </Wrapper>
              <TeamOverviewTable data={groupedData[el]} />
            </CardContainer>
          );
        })}
      </BodyContainer>
    </div>
  );
}

export default TeamOverview;

const Wrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: 0 40px;
  top: -54px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;