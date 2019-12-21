import AccountContainer from "../containers/Account/AccountContainer";
import OrderContainer from "../containers/Account/OrderContainer";
import CartContainer from "../containers/CartContainer";
import PaymentContainer from "../containers/Account/PaymentContainer";
import Homepage from "../pages/Homepage";
import BookFieldContainer from "../containers/BookContainer/BookFieldContainer";
import BookDetailContainer from "../containers/BookContainer/BookDetailContainer";
import ManSignup from "../pages/ManSignup";

export const API_URL_LOCAL = 'http://localhost:3000'
export const API_URL = 'https://bookeven-backend.herokuapp.com/apis'

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
}

export const MANAGER_ROUTES = [
    {
        path: '/tinh-hinh-don-hang',
        exact: false,
        component: OrderContainer
    },
]

export const CUSTOMER_ROUTES = [
    {
        path: '/lich-su-mua-hang',
        exact: false,
        component: OrderContainer
    },
    {
        path: '/gio-hang',
        exact: false,
        component: CartContainer
    },
    {
        path: '/thanh-toan',
        exact: false,
        component: PaymentContainer
    },
]

export const DEFAULT_ROUTES = [
    {
        path: '/',
        exact: true,
        component: Homepage
    },
    {
        path: '/search',
        exact: false,
        component: BookFieldContainer
    },
    {
        path: '/tai-khoan',
        exact: false,
        component: AccountContainer
    },
    {
        path: '/sach-theo-danh-muc/:id',
        exact: false,
        component: BookFieldContainer
    },
    {
        path: '/sach-giam-gia',
        exact: false,
        component: BookFieldContainer
    },
    {
        path: '/sach-moi',
        exact: false,
        component: BookFieldContainer
    },
    {
        path: '/sach-ban-chay',
        exact: false,
        component: BookFieldContainer
    },
    {
        path: '/chi-tiet-sach/:id',
        exact: false,
        component: BookDetailContainer
    },
    {
        path: '/dang-ky-cho-quan-ly',
        exact: false,
        component: ManSignup
    },
]

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

export const rateStatus = [
    {
        content: 'Rất không hài lòng!',
        icon: 'angry',
        color: '#fa4252'
    },
    {
        content: 'Không hài lòng!',
        icon: 'frown-open',
        color: '#ff971d'
    },
    {
        content: 'Bình thường!',
        icon: 'meh',
        color: '#ffd271'
    },
    {
        content: 'Hài lòng!',
        icon: 'grin-beam',
        color: '#ebd245'
    },
    {
        content: 'Rất hài lòng!',
        icon: 'grin-stars',
        color: '#ffd800'
    },
]