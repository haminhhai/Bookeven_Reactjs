import React from 'react'
export const columnsCus = [
    {
        label: <th>Mã đơn hàng</th>
    },
    {
        label: <th className='text-center'>Ngày đặt hàng</th>
    },
    {
        label: <th className='text-center'>Ngày nhận hàng</th>
    },
    {
        label: <th>Tổng tiền</th>
    },
    {
        label: <th>Tình trạng</th>
    }
]

export const columnsMan = [
    {
        label: <th>Mã đơn hàng</th>
    },
    {
        label: <th>Khách hàng</th>
    },
    {
        label: <th>Điện thoại</th>
    },
    {
        label: <th className='text-center'>Ngày đặt hàng</th>
    },
    {
        label: <th className='text-center'>Ngày nhận hàng</th>
    },
    {
        label: <th>Tổng tiền</th>
    },
    {
        label: <th>Tình trạng</th>
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
        label: <th>Sản phẩm</th>
    },
    {
        label: <th className='text-center'>Số lượng</th>
    },
    {
        label: <th>Đơn giá</th>
    },
    {
        label: <th>Tạm tính</th>
    },
]
