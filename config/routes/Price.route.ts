import type {RouteType} from './RouteType';
export const Price: RouteType = {
    name: 'price',
    icon: 'highlight',
    path:'/price',
    routes: [
        {
            path: '/',
            redirect:'/price/list'
        },
        {
            name:'list',
            path:'/price/list',
            component:'./price/list'
        }
    ]
};