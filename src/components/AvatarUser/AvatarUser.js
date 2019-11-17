import React, { Component } from 'react';

import { Avatar } from 'antd'

import './style.scss'
class AvatarUser extends Component {
    state = {}
    handleName = (name) => {
        var check = / /g
        var firstWord = ''
        var secondWord = ''
        var numOfBlank = name.match(check)
        if (numOfBlank !== null) {
            firstWord = name.slice(0, 1)
            var i = name.lastIndexOf(' ')
            secondWord = name.slice(i + 1, i + 2)
        }
        else
            firstWord = name.slice(0, 1)
        return firstWord + secondWord
    }
    render() {
        const { size, name } = this.props
        return (
            <Avatar className='avatar-user font-weight-bold'
                size={size !== undefined ? size : 64}
                style={{ color: '#4dd599' }}>
                {this.handleName(name)}
            </Avatar>
        );
    }
}

export default AvatarUser;