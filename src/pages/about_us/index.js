import Layout from '../../components/layout.js';

import ContactInfo from "@/components/ContactInfo";
import OurMission from "@/components/OurMission";
import OurTeam from "@/components/OurTeam";
import OurValue from "@/components/OurValue";
import OurVision from "@/components/OurVision";

export default function AboutUsPage(){
    return ( <Layout current_page='about_us'>
        <OurVision/>,
        <OurMission/>,
        <OurValue/>,
        <OurTeam/>,
        <ContactInfo/>
    </Layout> );
}
