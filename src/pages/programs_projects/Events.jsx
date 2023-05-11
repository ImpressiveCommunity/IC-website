import { events } from './contents.js';
import { HeadingFont, TextFont } from '../../styles/font.js';

export default function Events(){
    const list_of_events = events.map((event, index)=> 
        <div key={index} 
            className='flex flex-col md:flex-row w-full justify-between'
        >

            <div className='self-start md:sticky top-16 text-left'
            >
                <h2 className={HeadingFont.className + ' text-2xl'}>
                    {event.title}
                </h2>
                <p className={TextFont.className + ' text-lg'}>
                    {event.topic}
                </p>
                <p className={TextFont.className + ' text-lg text-gray-500'}>
                    {event.date}
                </p>
            </div>

            <div className='flex flex-col space-y-5 md:space-y-10'>
                {event.images_url.map((url, image_index)=>
                    <div key={index + '-' + image_index}
                        style={{
                            backgroundImage: 'url("' + url + '")',
                        }}
                        className='w-full h-[100vw] md:w-[30vw] md:h-[40vw] md:mx-10 rounded rounded-[1rem] bg-center bg-cover bg-no-repeat'
                    >
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className='w-full'>
            <h1 className={HeadingFont.className + ' text-4xl md:text-5xl pb-5 md:pb-10'}>
                Previous Events
            </h1>

            <div className='flex flex-col space-y-20 w-full items-center'>
                {list_of_events}
            </div>
        </div>
    );
}
