import { HeadingFont, TextFont } from '../../styles/font.js';

const programs = [
    {
        title: 'Program 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        title: 'Program 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
];

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
        <div className='flex justify-between w-full'>
            <h1 className={'self-start sticky top-16 ' + HeadingFont.className + ' text-5xl'}>
                Programs
            </h1>
            <div className='flex flex-col space-y-10 w-[50vw]'>
                {list_of_programs}
            </div>
        </div>
    );
}
