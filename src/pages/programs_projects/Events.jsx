import { HeadingFont, TextFont } from '../../styles/font.js';

const events = [
    {
        title: 'Event 1',
        topic: 'Topic in Event 1',
        date: 'December 20, 2023',
        images_url: [
            'https://images.pexels.com/photos/16401186/pexels-photo-16401186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        ]
    },
    {
        title: 'Event 2',
        topic: 'Topic in Event 2',
        date: 'December 20, 2024',
        images_url: [
            'https://images.pexels.com/photos/16401186/pexels-photo-16401186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/16401186/pexels-photo-16401186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        ]
    },
];

export default function Events(){
    const list_of_events = events.map((event, index)=> 
        <div key={index} 
            className='flex w-full justify-between'
        >

            <div className='self-start sticky top-16 text-left'
            >
                <h2 className={HeadingFont.className + ' text-2xl'}>
                    * {event.title}
                </h2>
                <p className={TextFont.className + ' text-lg'}>
                    {event.topic}
                </p>
                <p className={TextFont.className + ' text-lg text-gray-500'}>
                    {event.date}
                </p>
            </div>

            <div className='flex flex-col space-y-10'>
                {event.images_url.map((url, image_index)=>
                    <div key={index + '-' + image_index}
                        style={{
                            backgroundImage: 'url("' + url + '")',
                        }}
                        className='w-[30vw] h-[40vw] mx-10 rounded rounded-[1rem] bg-center bg-cover bg-no-repeat'
                    >
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className='w-full'>
            <h1 className={HeadingFont.className + ' text-5xl pb-10'}>
                Previous Events
            </h1>

            <div className='flex flex-col space-y-20 w-full items-center'>
                {list_of_events}
            </div>
        </div>
    );
}
