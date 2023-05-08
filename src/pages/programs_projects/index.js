import Layout from '@/components/layout.js';

import Overview from './Overview.jsx';
import Programs from './Programs.jsx';
import Events from './Events.jsx';

export default function ProgramAndProjectPage(){

    return ( <Layout current_page='programs_projects'>
        <div className='center items-center p-5 sm:p-10 md:p-20
            flex flex-col space-y-[8rem]'>
            <Overview />
            <Programs />
            <Events />
        </div>
    </Layout> );
}


