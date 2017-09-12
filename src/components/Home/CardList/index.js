// Créer tableau avec plein de cartes
import React, {Component} from 'react'
import Card from './../Card'
import './CardList.css'

const listOfCards = [
    {
        name: 'AnubArak', 
        description:'Nerubian', 
        image: 'http://media-hearth.cursecdn.com/avatars/327/878/22324.png'
    },
    {
        name: 'Dr. Boom', 
        description:'Kaboom', 
        image: 'http://media-hearth.cursecdn.com/avatars/331/659/12182.png'
    }
]

export default class CardList extends Component {

    constructor(props) {
        super(props)
        // Initiate an empty array
        this.state = {
            listOfCards: []
        }
    }

    // Before component actually loads
    componentWillMount() {
        // Load cards
        this.setState({
            listOfCards
        })
    }

    render() {
        console.log(this.state.listOfCards)
        // Map all cards from the listOfCards array
        return(
            <div className="cardWrapper">
            {this.state.listOfCards.map((card, key) =>
                <Card key={key} card={card}/>
            )}
        </div>
        )
    }
}
// Utiliser pour l'affichage un wrapper en display flex / flex-wrap