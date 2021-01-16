import Hero from "../components/molecules/Hero";
import TeamHeadingBG from "../assets/teams-heading.png";

function TeamOverview() {
  return (
    <Hero small background={TeamHeadingBG}>
      Teams &amp; Regions
    </Hero>
  );
}

export default TeamOverview;