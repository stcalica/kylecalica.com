import AboutBanner from "../sections/AboutBanner"
import AboutHowWeWork from "../sections/AboutHowWeWork"
import AboutOurTeam from "../sections/AboutOurTeam"

export const metadata = {
    title: "About"
}

const Page = () => {
    return (
        <>
            <AboutBanner />
            <AboutHowWeWork />
            <AboutOurTeam />
        </>
    )
}

export default Page