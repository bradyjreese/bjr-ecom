import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Xbox Series X is our fastest, most powerful console ever, designed for a console generation that has you at its center.',
                    price: 1.99,
                    belongsTo: [0, 5]
                },
                quantity: 5
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'B81237896',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 2',
                    shippingAddress: '422 West Lehi Ave'
                }
            },
            {
                _id: 2,
                total: 11.57,
                orderNumber: 'C872398466',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 3',
                    shippingAddress: '8988 East Blvd'
                }
            },
            {
                _id: 3,
                total: 12.99,
                orderNumber: 'D9088273874',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 4',
                    shippingAddress: '7777 Spartan Drive'
                }
            },
            {
                _id: 4,
                total: 7.65,
                orderNumber: 'E837ysdg721',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 5',
                    shippingAddress: '3333 Anywhere Lane'
                }
            },
            {
                _id: 5,
                total: 1.99,
                orderNumber: 'F90923jkl',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 6',
                    shippingAddress: '3321 Plase please Me'
                }
            },
            {
                _id: 6,
                total: 27.99,
                orderNumber: 'G90823489G',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 7',
                    shippingAddress: '098789 LIHSHDFJKH Dr'
                }
            },
            {
                _id: 7,
                total: 5.55,
                orderNumber: 'H1249324789sdf',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Test 8',
                    shippingAddress: '543 Why Me Lane'
                }
            },
        ]
    })
}