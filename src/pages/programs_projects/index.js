import Layout from '../../components/layout.js';

const brief_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

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

const events = [
    {
        title: 'Event 1',
        topic: 'Topic in Event 1',
        date: 'December 20, 2023',
        images_url: [
            'https://images.pexels.com/photos/16401186/pexels-photo-16401186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
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

export default function ProgramAndProjectPage(){

    const list_of_programs = programs.map((program, index)=>
        <div key={index}>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
        </div>
    );

    const list_of_events = events.map((event, index)=>
        <div key={index}
            className='flex items-stretch'>

            <div className='self-start sticky top-0
                text-right'>

                <h2>{event.title}</h2>
                <p>{event.topic}</p>
                <p>{event.date}</p>
            </div>

            <div>
                {event.images_url.map((url, image_index)=>
                    <div key={index + '-' + image_index}
                        style={{
                            backgroundImage: 'url("' + url + '")',
                        }}
                        className='w-[40vw] h-[50vw] 
                        bg-center bg-contain bg-no-repeat'
                    >
                    </div>
                )}
            </div>
        </div>
    );

    return ( <Layout current_page='programs_projects'>
        <div className='flex'>
            <h1 className='self-start sticky top-0'>
                Overview 
            </h1>
            <p>
                {brief_description}
            </p>
        </div>

        <div className='flex items-stretch'>
            <h1 className='self-start sticky top-0'>
                Programs
            </h1>
            <div>
                {list_of_programs}
            </div>
        </div>

        <h1 className='flex-1'>
            Previous Event
        </h1>

        <div>
            {list_of_events}
        </div>
    </Layout> );
}


