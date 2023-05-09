import Navbar from './elements/navbar.js';
import Head from 'next/head';

export default function Layout({ children, current_page }){
    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

            <script src="https://kit.fontawesome.com/814092e3ff.js" crossorigin="anonymous"></script>
        </Head>
        <Navbar current_page={current_page}/>
        <main className='mt-16'>
            {children}
        </main>
    </>)
}
