export const API_URL = 'http://localhost:3000'

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
                path: '/bill-status',
                icon: 'truck-loading',
                title: 'Tình hình đơn hàng'
            },
            {
                path: '/database',
                icon: 'database',
                title: 'Cơ sở dữ liệu sách'
            },
        ],
        account_right: [
            {
                tab_title: 'Tài khoản của tôi'
            }
        ],
        over_img_card: [
            {
                icon: 'truck-loading',
                title: 'Tình hình đơn hàng'
            },
            {
                icon: 'database',
                title: 'Cơ sở dữ liệu sách'
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
                path: '/cart',
                icon: 'shopping-cart',
                title: 'Giỏ hàng'
            },
            {
                path: '/history',
                icon: 'history',
                title: 'Lịch sử mua hàng'
            },
        ],
        account_right: [
            {
                tab_title: 'Tài khoản của tôi'
            },
            {
                tab_title: 'Sổ địa chỉ'
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