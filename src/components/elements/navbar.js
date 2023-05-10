import { HeadingFont, TextFont } from "@/styles/font";
import { useState } from "react";

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
            ' md:bg-white'
        }>
            <a href={'/' + page_id}>
                {pages[page_id]}
            </a>
        </li>
    );

    const [menu_state, toggleMenu] = useState(false); 

    return (<div className='fixed top-0 left-0 z-20 flex flex-col bg-[#ffffffaa] h-16 md:bg-[#ffffff00] md:flex-row md:justify-between md:items-center w-full px-5'
        style={{
            // backgroundColor: '#ffffffe8',
            backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0) 1px, white 1px)',
            backdropFilter: 'blur(3px)',
            backgroundSize: '10px 10px'
        }}
    >
        <div className='p-5'>
            <a href='./' className={HeadingFont.className + ' text-lg z-20'}>
                <span className='text-[#2dbdc0]'>Impresive</span>
                <span className='text-[#fcba2a]'>Community</span>
            </a>
        </div>

        <button className='fixed md:hidden top-4 right-5'
            onClick={()=> toggleMenu(!menu_state)}
        >
            {
                menu_state 
                ? <i className="fa-solid fa-xmark text-xl"></i>
                : <i className="fa-solid fa-bars text-xl"></i>
            }
        </button>

        <ul 
            className={`${menu_state ? 'flex' : 'hidden'} md:flex flex-col md:flex-row p-5 w-[100%] pr-10 items-end h-[100vh] fixed md:relative md:h-auto md:relative pt-20 md:pt-0 z-[-1] md:w-auto bg-[#ffffffee] md:p-0 space-y-10 md:space-y-0 md:space-x-5`}
        >
            {list_of_link}
        </ul>

    </div>);
}
