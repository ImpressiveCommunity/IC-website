import Layout from '../components/layout.js';
import Headline from './Headline.jsx';
import OurMission from './OurMission.jsx';

export default function Home(){
    return (<>
        <Layout current_page='home'>
            <Headline />
            <div className='w-[100vw] flex justify-center'>
                <div className='w-[80%] h-[1.2px] bg-gray-200' />
            </div>
            <OurMission />
        </Layout>
    </>);
}
