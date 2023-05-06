export default function Navbar({ current_page }){
    const pages = {
        "get_involve": "Get Involve",
        "programs_projects": "Programs and Projects",
        "about_us": "About Us"
    };

    const list_of_link = Object.keys(pages).map((page_id)=> 
        <li key={page_id} className={
            (page_id === current_page ? 'text-blue-500' : '') +
            ''
        }>
            <a href={'/' + page_id}>
                {pages[page_id]}
            </a>
        </li>
    );

    return (<div className='flex justify-between w-full p-5'>
        <p className='font-bold'>
            Impresive Community
        </p>

        <ul className='flex space-x-5'>
            {list_of_link}
        </ul>
    </div>);
}
