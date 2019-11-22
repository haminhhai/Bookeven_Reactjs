import React from 'react'
export const columns = [
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

export const statuses = {
    success: 'Giao hàng thành công',
    failed: 'Giao hàng thất bại',
    process: 'Đang giao hàng'
}

export const EMPTY_INVOICE = 'Bạn chưa có đơn hàng nào.'

export const DETAIL_INVOICE_TITLE = 'Chi tiết đơn hàng #'

export const CREATE_AT = 'Ngày đặt hàng:'

export const END_TIME = 'Ngày nhận hàng:'

export const SHIP_TYPE = 'Hình thức vận chuyển:'

export const NAME = 'Người nhận:'

export const ADDRESS = 'Địa chỉ:'

export const PHONE = 'Số điện thoại:'

export const colsDetail = [
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
