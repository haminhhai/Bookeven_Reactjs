import React from 'react';
import Homepage from '../pages/Home/Homepage'
import BookCategory from '../pages/BookCategory/BookCategory'
import BookDetail from '../pages/BookDetail/BookDetail'
export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Homepage />
    },
    {
        path: '/store',
        exact: false,
        main: () => <BookCategory />
    },
    {
        path: '/detail',
        exact: false,
        main: () => <BookDetail />
    }
    
]