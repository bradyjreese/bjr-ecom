import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 5]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'Full Stack Development',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 1, 6]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Interface Design',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'User Experience Design',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 7,
                title: 'Advanced Object Oriented Programming',
                description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center. This means a high-fidelity gaming experience enclosed in a quiet and bold design, with the ability to discover thousands of games across four generations, all with more playing and less waiting.',
                price: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}