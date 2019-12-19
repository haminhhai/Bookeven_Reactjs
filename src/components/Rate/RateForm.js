import React, { Component } from 'react';
import { Rate, Progress, Tooltip, List, Skeleton } from 'antd'
import './style.scss'
import { MDBIcon } from 'mdbreact'

import AvatarUser from '../AvatarUser/AvatarUser'
import { rateStatus } from '../../const/config'
const rateArr = [
    {
        num: 5,
        rate: 50,
    },
    {
        num: 4,
        rate: 80,
    },
    {
        num: 3,
        rate: 0,
    },
    {
        num: 2,
        rate: 0,
    },
    {
        num: 1,
        rate: 0,
    },
]
class RateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                content: 'Đánh giá!',
                icon: '',
                color: '',
            },
            loading: false,
            data: [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                },
            ]
        }
    }

    showProgressRate = (num, rate, i) => {
        return <div className='row mb-3' key={i}>
            <div className='col-2'>
                {num}<MDBIcon icon="star" />
            </div>
            <div className='col-10'>
                <Progress
                    strokeColor={{
                        '0%': '#F7743E',
                        '100%': '#E9F110',
                    }}
                    percent={rate}
                    status="active"
                />
            </div>
        </div>
    }
    onChange = e => {
        if (e === undefined)
            this.setState({
                status: {
                    content: 'Đánh giá!',
                    icon: '',
                    color: '',
                }
            })
        else
            this.setState({
                status: rateStatus[e - 1]
            })
    }
    onRate = e => {
        console.log(e)
    }
    render() {
        const { status, data, loading } = this.state
        const { disabled } = this.props
        const { content, icon, color } = status
        return (
            <div className='rate-form row'>
                <div id='rate-card' className='col-4'>
                    <h5>Đánh giá trung bình</h5>
                    <h1>4/5</h1>
                    <Rate disabled defaultValue={4} />
                    <p>( 2 người đã đánh giá )</p>
                </div>
                <div id='rate-card' className='col-4'>
                    {
                        rateArr.map((item, index) => this.showProgressRate(item.num, item.rate, index))
                    }
                </div>
                <div className='col-4 user-rate'>
                    Đánh giá của bạn về sản phẩm này
                    <Tooltip title={<div>{content} <MDBIcon style={{ color: `${color}` }} icon={icon} /></div>}>
                        <div>
                            <Rate disabled onHoverChange={this.onChange} onChange={this.onRate} />
                        </div>
                    </Tooltip>
                </div>
                <div className='col-12 list-rate'>
                    <List itemLayout='horizontal' dataSource={data} renderItem={item => (
                        <List.Item actions={[<Rate disabled defaultValue={5} />]} >
                            <Skeleton
                                avatar
                                title={false}
                                loading={true}
                                active>
                                <List.Item.Meta
                                    avatar={<AvatarUser name='Lò Đào Tạo' />}
                                    title='Lò Đào Tạo'
                                    description={
                                        <div>
                                            {rateStatus[4].content}
                                            <MDBIcon
                                                className='ml-2'
                                                style={{ color: `${color}` }}
                                                icon={rateStatus[4].icon}
                                                size='2x' />
                                        </div>}
                                />
                            </Skeleton>
                        </List.Item>
                    )} />
                </div>
            </div>
        );
    }
}

export default RateForm;