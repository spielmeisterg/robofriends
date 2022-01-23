import React from "react"
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import "./app.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField : event.target.value })
        
    }



    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return<h1>Loading...</h1>
        }
        return(
                <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App