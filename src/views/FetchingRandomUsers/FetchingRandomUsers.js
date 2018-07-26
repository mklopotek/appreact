import React from 'react'
import User from './User'
import PaperRefined from '../../components/PaperRefined';

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
            <PaperRefined>

                {
                    this.state.randomUserData &&
                    this.state.randomUserData
                        .map(user => (
                            <User
                                user={user}
                                key={user.login.uuid}
                            />)
                        )
                }

            </PaperRefined>)
    }

}


export default FetchingRandomUsers