import HomeBanner from "./sections/HomeBanner"
import HomeContact from "./sections/HomeContact"
import HomeFAQpage from "./sections/HomeFAQpage"
import HomeFeatures from "./sections/HomeFeatures"
import OurExpertise from "./sections/OurExpertise"

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeFeatures />
      <OurExpertise />
      <HomeFAQpage />
      <HomeContact />
    </>
  )
}