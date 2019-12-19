import React from 'react'
export const columnsCus = [
    {
        label: <th key='cCode'>Mã đơn hàng</th>
    },
    {
        label: <th key='cFromDate' className='text-center'>Ngày đặt hàng</th>
    },
    {
        label: <th key='cToDate' className='text-center'>Ngày nhận hàng</th>
    },
    {
        label: <th key='cTotal' >Tổng tiền</th>
    },
    {
        label: <th key='cStatus' >Tình trạng</th>
    }
]

export const columnsMan = [
    {
        label: <th key='mCode' >Mã đơn hàng</th>
    },
    {
        label: <th key='mCustomer' >Khách hàng</th>
    },
    {
        label: <th key='mPhone' >Điện thoại</th>
    },
    {
        label: <th key='mFromDate' className='text-center'>Ngày đặt hàng</th>
    },
    {
        label: <th key='mToDate' className='text-center'>Ngày nhận hàng</th>
    },
    {
        label: <th key='mTotal' >Tổng tiền</th>
    },
    {
        label: <th key='mStatus'>Tình trạng</th>
    }
]

export const statuses = {
    success: 'Giao hàng thành công',
    failed: 'Giao hàng thất bại',
    process: 'Đang giao hàng'
}

export const arr_statuses = [
    {
        id: 1,
        name: 'Đang giao hàng'
    },
    {
        id: 2,
        name: 'Giao hàng thành công'
    },
    {
        id: 3,
        name: 'Giao hàng thất bại'
    },
]
export const EMPTY_ORDER = 'Bạn chưa có đơn hàng nào.'

export const TO_BE_CONTINUED = 'Tiếp tục mua sắm.'

export const BACK_HOME = 'Quay lại trang chủ.'

export const DETAIL_ORDER_TITLE = 'Chi tiết đơn hàng #'

export const UPDATE_ORDER = 'Chỉnh sửa đơn hàng #'

export const CREATE_AT = 'Ngày đặt hàng:'

export const END_TIME = 'Ngày nhận hàng:'

export const SHIP_TYPE = 'Hình thức vận chuyển:'

export const NAME = 'Người nhận:'

export const ADDRESS = 'Địa chỉ:'

export const PHONE = 'Số điện thoại:'

export const STATUS = 'Tình trạng:'

export const colsDetailCus = [
    {
        label: <th key='product'>Sản phẩm</th>
    },
    {
        label: <th key='amount' className='text-center'>Số lượng</th>
    },
    {
        label: <th key='price'>Đơn giá</th>
    },
    {
        label: <th key='estiTotal'>Tạm tính</th>
    },
]
