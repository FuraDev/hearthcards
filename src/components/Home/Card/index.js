import React, {Component} from 'react'
import './Card.css'

export default class Card extends Component {

    render() {
        return(
            <div>
                <img className='card' src={this.props.card.image}/>
                <div>{this.props.card.description}</div>
            </div>
        )
    }

}