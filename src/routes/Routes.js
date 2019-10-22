import React from 'react';
import Homepage from '../pages/Home/Homepage'
import BookCategory from '../pages/BookCategory/BookCategory'
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
    
]