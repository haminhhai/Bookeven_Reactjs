import React, { Component } from 'react';
import {MDBAlert, MDBIcon} from 'mdbreact'

import '../../styles/cart.scss'

class Message extends Component {
    state = {}
    render() {
        var {message} = this.props
        return (
            message !== '' &&
            <div>
                <MDBAlert>
                    <MDBIcon className='mr-3' icon="check" />
                    {message}
                </MDBAlert>
            </div>
        );
    }
}

export default Message;