import React from 'react';
import Homepage from '../pages/Homepage'
import BookCategory from '../pages/BookCategory/BookCategory'
import * as data from '../const/listbook'
import CartContainer from '../containers/CartContainer';
import BookDetailContainer from '../containers/BookDetailContainer'
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
]

//generate BookCategory routes
var category = []
data.fieldsBook.map(item => {
    category.push({
        path: '/' + item.path,
        exact: false,
        main: () => <BookCategory parent={item.name} />
    })
})

//generate BookDetail routes
var detail = []
data.list.map(item => {
    var field = data.fieldsBook.filter(field => {
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


