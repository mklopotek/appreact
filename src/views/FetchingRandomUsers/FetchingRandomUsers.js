import React from 'react'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null
    }

    componentDidMount(){
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => this.setState({randomUserData: data}))
    }

    render(){
        return(
    <div>
        <div>{JSON.stringify(this.state.randomUserData)}</div>
        <div></div>
    </div>)
    }

}


export default FetchingRandomUsers