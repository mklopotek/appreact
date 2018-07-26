import React from 'react'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return (
                    this.setState({ randomUserData: data.results })
                )
            }
            )
    }


    render() {
        return (
            <div>

                {
                    this.state.randomUserData &&
                    this.state.randomUserData
                        .map(user => (
                            <div 
                                key={user.login.uuid}
                            >
                                {user.name.first}
                            </div>)   
                        ) 
                }

            </div>)
    }

}


export default FetchingRandomUsers