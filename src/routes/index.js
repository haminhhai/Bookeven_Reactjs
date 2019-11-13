import React from 'react';
import Homepage from '../pages/Homepage'
import BookCategory from '../pages/BookCategory/BookCategory'
import CartContainer from '../containers/CartContainer';
import BookDetailContainer from '../containers/BookDetailContainer'
import AccountCustomer from '../pages/AccountSystem/AccountCustomer'

import apiCaller from '../utils/apiCaller'
var routes = [
    {
        path: '/',
        exact: true,
        main: () => <Homepage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer />
    },
    {
        path: '/account',
        exact: false,
        main: () => <AccountCustomer />
    },

]

var fieldsBook = []
apiCaller('fieldsBook', 'GET', null).then(res => {
    fieldsBook = res.data
})

var listBook = []
apiCaller('products', 'GET', null).then(res => {
    this.listBook = res.data
})
console.log(listBook)
//generate BookCategory routes
var category = []
fieldsBook.map(item => {
    category.push({
        path: '/' + item.path,
        exact: false,
        main: () => <BookCategory parent={item.name} />
    })
})

//generate BookDetail routes
var detail = []
listBook.map(item => {
    var field = fieldsBook.filter(field => {
        return field.id === item.topic
    })
    detail.push({
        path: '/' + item.title,
        exact: false,
        main: () => <BookDetailContainer parent={field[0].name} child={item.title} />
    })
})

category.map(item => {
    routes.push(item)
})
detail.map(item => {
    routes.push(item)
})

export const newroutes = routes


