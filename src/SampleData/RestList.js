import { HAMBURGER, MEXICAN_FOOD, PH_FOOD, PIZZA, BEVERAGES } from './RestTypes'


export default RestData = [
    //Restaurant One
    {
        key:Math.random(),
        //Restaurant Info
        info:{
            name: 'Marmalade Burger Cafe',
            type: HAMBURGER,
            picture: {uri: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85cfa1d6d003f6e82f46bc5a394a592&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'},
            time: 25
        },

        //Place Reviews
        placeReviews:[
           {
                name: 'Sara Espinosa Garcia',
                picture: {uri:'https://randomuser.me/api/portraits/women/17.jpg'},
                date: 'July 20th, 2016',
                comment:
                'Now this is what i call a burger place! Amazing Food '+
                'Carefully prepared with a best quality ingredients around',
                stars: 5
            },
            {
                name: 'Jose Maria Penardi',
                picture: {uri:'https://randomuser.me/api/portraits/men/45.jpg'},
                date: 'July 19th, 2016',
                comment:
                'This place is good but I feel that the meat is '+
                'Sometimes overcooked. It might be my own taste but',
                stars: 3
            },
            {
                name: 'Francis Renz Castaloni',
                picture: {uri:'https://randomuser.me/api/portraits/men/30.jpg'},
                date: 'November 1st, 1997',
                comment:
                'The meat is suprisingly bad and unsightly absurd '+
                'because I am a toxic customer , my goal is to spread my' +
                'Cancerous reviews',
                stars: 1
            }        
        ]


    },
    //Restaurant Two
    {
        key:Math.random(),
        //Restaurant Info
        info:{
            name: 'La Fabrica de Las Empas',
            type: MEXICAN_FOOD,
            picture: {uri: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8479a73ae3b8e556bada71a2b661adac&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb'},
            time: 35
        },

        //Place Reviews
        placeReviews:[
           {
                name: 'Sara Espinosa Garcia',
                picture: {uri:'https://randomuser.me/api/portraits/women/17.jpg'},
                date: 'July 20th, 2016',
                comment:
                'Now this is what i call a burger place! Amazing Food '+
                'Carefully prepared with a best quality ingredients around',
                stars: 5
            },
            {
                name: 'Jose Maria Penardi',
                picture: {uri:'https://randomuser.me/api/portraits/men/45.jpg'},
                date: 'July 19th, 2016',
                comment:
                'This place is good but I feel that the meat is '+
                'Sometimes overcooked. It might be my own taste but',
                stars: 3
            }     
        ]


    },

    //Restaurant Three
    {
        key:Math.random(),
        //Restaurant Info
        info:{
            name: 'Mervz Restaurant Gaming',
            type: PIZZA,
            picture: {uri: 'https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=f23e22ac67f9dd47c1471491abfdda84&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb'},
            time: 5
        },

        //Place Reviews
        placeReviews:[
           {
                name: 'Sara Espinosa Garcia',
                date: 'July 20th, 2016',
                comment:
                'Now this is what i call a burger place! Amazing Food '+
                'Carefully prepared with a best quality ingredients around',
                stars: 5
            },
            {
                name: 'Jose Maria Penardi',
                date: 'July 19th, 2016',
                comment:
                'This place is good but I feel that the meat is '+
                'Sometimes overcooked. It might be my own taste but',
                stars: 3
            }     
        ]


    }

]