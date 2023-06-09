import { programs } from './contents.js';
import { HeadingFont, TextFont } from '../../styles/font.js';

export default function Programs(){
    const list_of_programs = programs.map((program, index)=>
        <div key={index} >
            <h2 className={'text-2xl ' + HeadingFont.className + ''}>
                {program.title}
            </h2>
            <p className={ TextFont.className +' text-lg text-gray-700'}>
                {program.description}
            </p>
        </div>
    );

    return (
        <div className='flex flex-col md:flex-row justify-between w-full'>
            <h1 className={'self-start md:sticky top-16 pb-5 ' + HeadingFont.className + ' text-4xl md:text-5xl'}>
                Programs
            </h1>
            <div className='flex flex-col space-y-10 w-full md:w-[50vw]'>
                {list_of_programs}
            </div>
        </div>
    );
}
