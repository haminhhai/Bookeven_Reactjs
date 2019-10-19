import React, { Component } from 'react';
import './spinner.scss'
/* types of loading spinner
    point
    radius
    corner
    sound
*/
const list = ['point', 'radius', 'corner', 'sound', 'default']
class Radius extends Component {
    setType2Render(prop) {
        var result = 
        <div class="con-fl-loading" >
            <h4 class="title-loading">{this.props.title}</h4>
            <div class={`fl-loading ${prop}`}>
                <div class="effect-1 effects"></div>
                <div class="effect-2 effects"></div>
                <div class="effect-3 effects"></div>
            </div>
        </div>
        let valid = -1
        list.map((item) => {
            if (item === prop)
                valid = 0
        })
        if (prop !== undefined && valid === 0)
            return result
        else {
            prop = 'default'
            var newres = result
            
            return newres
        }

    }

    render() {
        return (
            <div>
                {this.setType2Render(this.props.type)}
            </div>
        );
    }
}

export default Radius;