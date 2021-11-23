export default {
    get_data() { return {
    line : 'pd',
    teachers : [
        'sinb', 'fros', 'lpte', 'lkri', 'henk'
    ],
    maincourse : {
        "H5" : {
            duration : 50,
            courses : [
                { 
                    name : 'Serverside programmering III',
                    short : 'Serverside',
                    primary_teacher : 'lpte',
                    secondary_teacher : 'sinb',
                    duration : 15
                },
                { 
                    name : 'Systemudvikling og projektstyring',
                    short : 'Sys.udv.',
                    primary_teacher : 'sinb',
                    secondary_teacher : 'fros',
                    duration : 15
                }
            ]  
        }
    },
    allocation : {
        'H5' : {
            'week_1' : {
                'monday' : {
                    morning: 'Serverside',
                    afternoon: '',
                    primary_teacher: '',
                    secondary_teacher: '',
                    note: ''
                }
            }
        }
    }
}}
}