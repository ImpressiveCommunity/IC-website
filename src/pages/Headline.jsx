import { ListOfPages } from '../components/elements/navbar.js';
import { HeadingFont, TextFont } from '@/styles/font.js';

export default function Headline(){
    return (<>
        <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
            <div className='flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20'>
                <div>
                    <div className={HeadingFont.className + " text-7xl md:text-7xl"}>
                        <div className='absolute gradient-bg-1 w-[30vw] h-[30vh] z-[-1] opacity-[0.1]' />
                        <h1 className='text-[#2dbdc0]'>Impressive</h1>
                        <h1 className='text-[#fcba2a]'>Community</h1>
                    </div>
                    <div>
                        <p className={TextFont.className + " text-gray-700 text-lg"}>Together for better KPC</p>
                    </div>
                </div>
                <div className='flex flex-col items-left justify-center'>
                    <ul className={'flex flex-col space-y-10 text-2xl md:text-3xl'}>
                        <ListOfPages />
                    </ul>
                </div>
            </div>
        </div>
    </>);
}
