import React, { Component } from 'react';
import Header from '../../layouts/Header/Header';
import { MDBIcon } from 'mdbreact';

import '../../styles/bookdb.scss'
import NBCard from '../../components/Cards/NewBookCard/NewBookCard';
class BookDB extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { fieldsBook } = this.props
        return (
            <div>
                <Header carousel={false} parent='Cơ sở dữ liệu sách' />
                <div className='container'>
                    <div className='bookdb'>
                        <h4><MDBIcon className='mr-2' icon="search" />Tra cứu</h4>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <NBCard fieldsBook={fieldsBook}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookDB;