import HeroSection from '../components/HeroSection';
import Trending from '../components/Trending';
import TopCreators from '../components/TopCreators';
import BrowseCategories from '../components/BrowseCategories';
import MoreNFT from '../components/MoreNFT';
import Highlight from '../components/Highlight';
import HowItWorks from '../components/HowItWorks';
import WeeklyDigest from '../components/WeeklyDigest';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <Trending />
      <TopCreators />
      <BrowseCategories />
      <MoreNFT />
      <Highlight />
      <HowItWorks />
      <WeeklyDigest />
    </>
  )
}