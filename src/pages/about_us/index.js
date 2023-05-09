import Layout from '../../components/layout.js';

import ContactInfo from "./ContactInfo";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import OurValue from "./OurValue";
import OurVision from "./OurVision";

export default function AboutUsPage(){
    return ( <Layout current_page='about_us'>
        <OurVision/>,
        <OurMission/>,
        <OurValue/>,
        <OurTeam/>,
        <ContactInfo/>
    </Layout> );
}
