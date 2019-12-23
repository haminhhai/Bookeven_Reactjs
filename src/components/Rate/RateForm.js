import React, { Component } from 'react';
import { Rate, Progress, Tooltip, List, Skeleton } from 'antd'
import './style.scss'
import { MDBIcon } from 'mdbreact'

import AvatarUser from '../AvatarUser/AvatarUser'
import { rateStatus } from '../../const/config'
const rateArr = [
    {
        num: 1,
        rate: 0,
    },
    {
        num: 2,
        rate: 0,
    },
    {
        num: 3,
        rate: 0,
    },
    {
        num: 4,
        rate: 0,
    },
    {
        num: 5,
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
            value: 0,
            loading: false,
            acceptRate: false
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
        const { rateBook,detailBook } = this.props
        rateBook({
            book_id: detailBook.id,
            rate: parseInt(e)
        })
    }
    UNSAFE_componentWillReceiveProps( nextProps) {
        const { detailBook, info, rate} = nextProps
        var check = rate.list.findIndex(item => item.fullname === info.fullname)
        if(detailBook.bought && check === -1)
            this.setState({
                acceptRate: true
            })
        else if (detailBook.bought && check !== -1){
            this.setState({
                acceptRate: false,
                value: rate.list[check].rate
            })
        }
        else this.setState({
            acceptRate: false
        })
    }
    render() {
        const { status, acceptRate, value } = this.state
        const {  rate, info } = this.props
        const { content, icon, color } = status
        return (
            <div className='rate-form row'>
                <div id='rate-card' className={`col-${info.role === 2 ? '6' : '4'}`}>
                    <h5>Đánh giá trung bình</h5>
                    <h1>{rate.totalRate}/5</h1>
                    <Rate disabled allowHalf value={rate.totalRate}  />
                    <p>( {rate.list.length} người đã đánh giá )</p>
                </div>
                <div id='rate-card' className={`col-${info.role === 2 ? '6' : '4'}`}>
                    {
                        rate.ratePercents.r1 === null ?
                        rateArr.map((item, index) => this.showProgressRate(item.num, item.rate, index)):
                        rateArr.map((item, index) => this.showProgressRate(item.num, rate.ratePercents[`r${index+1}`], index))

                    }
                </div>
                {
                    info.role === 1 &&
                    <div className={`col-4 user-rate`}>
                        Đánh giá của bạn về sản phẩm này
                    <Tooltip title={<div>{content} <MDBIcon style={{ color: `${color}` }} icon={icon} /></div>}>
                            <div>
                                <Rate disabled={!acceptRate} onHoverChange={this.onChange} onChange={this.onRate} value={value} />
                            </div>
                        </Tooltip>
                    </div>
                }
                <div className='col-12 list-rate'>
                    <List itemLayout='horizontal' dataSource={rate.list} renderItem={item => (
                        <List.Item actions={[<Rate disabled value={parseInt(item.rate)} />]} >
                            <Skeleton
                                avatar
                                title={false}
                                loading={false}
                                active>
                                <List.Item.Meta
                                    avatar={<AvatarUser name={item.fullname} />}
                                    title={item.fullname}
                                    description={
                                        <div>
                                            {rateStatus[parseInt(item.rate) - 1].content}
                                            <MDBIcon
                                                className='ml-2'
                                                style={{ color: rateStatus[parseInt(item.rate) - 1].color }}
                                                icon={rateStatus[parseInt(item.rate) - 1].icon}
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