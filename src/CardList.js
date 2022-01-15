import React from "react"
import Card from "./Card"


class CardList extends React.Component{
    render(){
        return(
            this.props.robots.map((robot, i) =>{
                return <Card key={i} name={robot.name} email={robot.email} id={robot.id}/>
            })
        )
    }
}

export default CardList