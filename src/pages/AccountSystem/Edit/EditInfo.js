import React, { Component } from 'react';

import { MDBBtn, MDBInput } from "mdbreact";

import '../../../styles/account.scss'
class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullnameEdit: '',
            phoneEdit: '',
            isUpdating: false

        }
    }

    changeHandler = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
            isUpdating: true
        });
    };
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { fullnameEdit, phoneEdit } = this.state
        const { updateUser } = this.props
        updateUser({
            fullname: fullnameEdit,
            phone: phoneEdit
        })
    };
    componentDidMount() {
        const { info } = this.props
        this.setState({
            fullnameEdit: info.fullname,
            phoneEdit: info.phone
        })
    }
    render() {
        const { fullnameEdit, phoneEdit, isUpdating} = this.state
        return (
            <form
                className='needs-validation'
                onSubmit={this.submitHandler}>
                <div className='row'>
                    <div className='col-12 container'>
                        <MDBInput
                            outline
                            label="Họ tên"
                            type="text"
                            name='fullnameEdit'
                            value={fullnameEdit}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div className='col-12 container'>
                        <MDBInput
                            outline
                            label="Số điện thoại"
                            type="tel"
                            name='phoneEdit'
                            value={phoneEdit}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div className='col-6 container'>
                        <MDBBtn disabled={!isUpdating} gradient='sunny-morning' type='submit'>Cập nhật</MDBBtn>
                    </div>
                </div>
            </form>
        );
    }
}


export default EditInfo;