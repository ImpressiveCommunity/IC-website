import { HeadingFont, TextFont } from '../../styles/font.js';

export default function Overview(){
    return (
        <div className='flex justify-between w-full'>
            <h1 className={'self-start sticky top-16 ' + HeadingFont.className + ' text-5xl'}>
                Overview 
            </h1>
            <p className={TextFont.className + ' text-lg text-gray-700 w-[50vw]'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
    )
}
