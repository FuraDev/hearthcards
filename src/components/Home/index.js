import React, {Component} from 'react'
import Header from './Header'
import Card from './Card'
import CardList from './CardList'
export default class Home extends Component {

render() {
    return(
        <div>
            <Header history={this.props.history} />
            <div>
                <CardList />
                
            </div>
        </div>
    )
}

}