import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as spinnerActions from '../../const/actionType'

import './spinner.scss'
/* types of loading spinner
    point
    radius
    corner
    sound
*/
const list = ['point', 'radius', 'corner', 'sound', 'default']
class Spinner extends Component {
    setType2Render(prop) {
        let type = ''
        let valid = -1
        list.map((item) => {
            if (item === prop)
                valid = 0
        })
        if (prop !== undefined && valid === 0)
            type = prop
        else {
            type = 'default'
        }

        var result =
            <div class="con-fl-loading" >
                <h4 class="title-loading">{this.props.title}</h4>
                <div class={`fl-loading ${type}`}>
                    <div class="effect-1 effects"></div>
                    <div class="effect-2 effects"></div>
                    <div class="effect-3 effects"></div>
                </div>
            </div>
        if (this.props.disable)
            result = ''
        return result

    }

    render() {
        const { showLoading } = this.props
        let xhtml = null
        if (showLoading)
            xhtml = (
                <div class="con-fl-loading" >
                    {/* <h4 class="title-loading">{this.props.title}</h4> */}
                    <div class={`fl-loading ${list[Math.floor(Math.random() * 4)]}`}>
                        <div class="effect-1 effects"></div>
                        <div class="effect-2 effects"></div>
                        <div class="effect-3 effects"></div>
                    </div>
                </div>
            )
        return xhtml
    }
}

Spinner.propType = {
    showLoading: PropTypes.object
}

const mapStateToProps = state => {
    return {
        showLoading: state.spinner.showLoading
    }
}

export default connect(mapStateToProps, null)(Spinner);

