import React, {Component} from 'react'
import UserService from '../../services/UserService'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {username: ''}
        this.UserService = UserService.getInstance()
    }

    handleChange = event => {
        this.setState({ username: event.target.value});
    }

    submit = event => {
        event.preventDefault()
        this.UserService.username = this.state.username
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} action="">
                    <p>Saisissez votre nom</p>
                    <input value={this.state.username} placeholder="name" type="text" onChange={this.handleChange}/>
                    <button type="submit">Connexion</button>
                </form>     
            </div>
        )
    }

}