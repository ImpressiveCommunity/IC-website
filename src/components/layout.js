import Navbar from './elements/navbar.js';

export default function Layout({ children, current_page }){
    return (<>
        <Navbar current_page={current_page}/>
        <main>{children}</main>
    </>);
}
