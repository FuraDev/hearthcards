import React, {Component} from 'react'
import UserService from '../../../services/UserService'
import './header.css';
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()

        // Initialisation du state, on affecte aucune valeur
        this.state = {username : null}
    }

    componentWillMount(){
        if(!this.userService.username){
            this.props.history.push('/')

            return
        }

        this.setState({username : this.userService.username})
    }
    render() {
        return(
            <div className="headerWrapper">
                <h3>Welcome <span className="userName">{this.state.username}</span> </h3>
            </div>
        )
    }

}