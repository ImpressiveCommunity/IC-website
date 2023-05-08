import { HeadingFont, TextFont } from "@/styles/font";

export default function Navbar({ current_page }){
    const pages = {
        "get_involve": "Get Involve",
        "programs_projects": "Programs and Projects",
        "about_us": "About Us"
    };

    const list_of_link = Object.keys(pages).map((page_id)=> 
        <li key={page_id} className={
            (page_id === current_page ? 'text-blue-500 ' : '') +
            TextFont.className +
            ''
        }>
            <a href={'/' + page_id}>
                {pages[page_id]}
            </a>
        </li>
    );

    return (<div className='fixed top-0 left-0 z-10 flex justify-between w-full p-5'
        style={{
            backgroundColor: '#ffffffe8',
            backdropFilter: 'blur(3px)'
        }}
    >
        <a href='./' className={HeadingFont.className + ' text-lg'}>
            <span className='text-[#2dbdc0]'>Impresive</span>
            <span className='text-[#fcba2a]'>Community</span>
        </a>

        <ul className='flex space-x-5'>
            {list_of_link}
        </ul>
    </div>);
}
