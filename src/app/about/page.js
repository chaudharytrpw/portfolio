import Banner from "../components/BannerProps";
import AboutSplitSection from "./AboutSplitSection";
import Hobbies from "./Hobbies";

import SkillsSection from "./SkillsSection";
// import Testimonials from "./Testimonials";

export default function AboutPage() {
  return (
   <>
      <Banner title="About"/>
   
   <AboutSplitSection/>
   <SkillsSection/>
   <Hobbies/>
   {/* <Testimonials/> */}
   </>
  );
}
