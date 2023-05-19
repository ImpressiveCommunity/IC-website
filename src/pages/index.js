import { HeadingFont, TextFont } from '@/styles/font.js';
import Layout from '../components/layout.js';
import { ListOfPages } from '../components/elements/navbar.js';

export default function Home(){
    return (<>
        <Layout current_page='home'>
            <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
                <div className='flex space-x-20'>
                    <div>
                        <div className={HeadingFont.className + " text-8xl"}>
                            <div className='absolute gradient-bg-1 w-[40vw] h-[30vh] z-[-1] opacity-[0.3]' />
                            <h1 className='text-[#2dbdc0]'>Impressive</h1>
                            <h1 className='text-[#fcba2a]'>Community</h1>
                        </div>
                        <div>
                            <p className={TextFont.className + " text-gray-700 text-lg"}>Together for better KPC</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-left justify-center'>
                        <ul className={'flex flex-col space-y-10 text-4xl'}>
                            <ListOfPages />
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    </>);
}
