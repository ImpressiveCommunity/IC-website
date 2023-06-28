import { HeadingFont, TextFont } from "@/styles/font.js";
import { missions } from "./about_us/content.js";

export default function OurMission(){
    const list_of_missions = missions.map((mission, index)=><>
        <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] space-y-5' key={index}>
            <h1 className={HeadingFont.className + ' text-3xl md:text-4xl'}>
                {mission.name}
            </h1>
            <p className={TextFont.className + ' text-lg text-gray-600'}>
                {mission.description}
            </p>
        </div>
    </>);

    return (<>
        <div className='w-[100vw] py-[10rem]'>
            <div className='flex w-full justify-center pb-10 text-gray-600'>
                <h1 className={HeadingFont.className + ' text-3xl text-[#2dbdc0]'}>Our Missions</h1>
            </div>
            <div className='w-full flex flex-col space-y-20 items-center'>
                {list_of_missions}
            </div>
        </div>
    </>);
}
