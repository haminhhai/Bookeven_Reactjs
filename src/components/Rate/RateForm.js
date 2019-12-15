import React, { Component } from 'react';
import { Rate, Progress, Tooltip } from 'antd'
import './style.scss'
import { MDBIcon } from 'mdbreact'

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
            content: 'Đánh giá!',
            icon: ''
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
                content: 'Đánh giá!',
                icon: '',
            })
        else
            this.setState({
                content: rateStatus[e - 1].content,
                icon: rateStatus[e - 1].icon,
            })
    }
    render() {
        const { content, icon } = this.state
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
                    <Tooltip title={<div>{content} <MDBIcon icon={icon} /></div>}>
                        <div>
                            <Rate onHoverChange={this.onChange} />
                        </div>
                    </Tooltip>
                    {/* <b>{status.content}</b><MDBIcon icon={status.icon}/> */}
                </div>
            </div>
        );
    }
}

export default RateForm;