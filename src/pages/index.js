import Layout from '../components/layout.js';

export default function Home(){
    return (<html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        </head>
        <body>
            <Layout current_page='home'>
                <h1>Home</h1>
            </Layout>
        </body>
    </html>);
}
