export const API_URL_LOCAL = 'http://localhost:3000'
export const API_URL = 'https://bookeven-backend.herokuapp.com/apis'

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
}

export const roles = {
    manager: {
        couple_btn: {
            l_icon: 'info-circle',
            l_txt: 'Chi tiết',
            r_icon: 'edit',
            r_txt: 'Sửa'
        },
        account_left: [
            {
                path: '/tinh-hinh-don-hang',
                icon: 'truck-loading',
                title: 'Tình hình đơn hàng'
            },
        ],
        over_img_card: [
            {
                icon: 'truck-loading',
                title: 'Tình hình đơn hàng'
            },

        ]
    },
    customer: {
        couple_btn: {
            l_icon: 'info-circle',
            l_txt: 'Chi tiết',
            r_icon: 'shopping-cart',
            r_txt: 'Mua'
        },
        account_left: [
            {
                path: '/gio-hang',
                icon: 'shopping-cart',
                title: 'Giỏ hàng'
            },
            {
                path: '/lich-su-mua-hang',
                icon: 'history',
                title: 'Lịch sử mua hàng'
            },
        ],
        over_img_card: [
            {
                icon: 'history',
                title: 'Lịch sử mua hàng'
            }
        ]
    }
}