import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './spinner.scss'
/* types of loading spinner
    point
    radius
    corner
    sound
*/
const list = ['point', 'radius', 'corner', 'sound', 'default']
class Spinner extends Component {
    render() {
        const { showLoading } = this.props.ui
        let xhtml = null
        if (showLoading)
            xhtml = (
                <div class="con-fl-loading" >
                    <h4 class="title-loading">Đang xử lý...</h4>
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
    ui: PropTypes.object
}

const mapStateToProps = state => {
    return {
       ui : state.ui
    }
}

export default connect(mapStateToProps, null)(Spinner);

