import React from 'react'
import User from './User'
import PaperRefined from '../../components/PaperRefined';
import Search from './Search';

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null, 
        searchPhrase: null  
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

    searchPhraseChangeHandler = (event) => {
        this.setState({searchPhrase: event.target.value})
    }

    render() {
        const usersList = (
            this.state.randomUserData &&
            this.state.randomUserData
                .filter(user => user.name.first.indexOf(this.state.searchPhrase)>= 0)
                .map(user => (
                    <User
                        user={user}
                        key={user.login.uuid}
                    />)
                
                )
        )

        return (
            <div>
                <PaperRefined>
                    <Search 
                      searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                      searchPhrase={this.state.searchPhrase}  
                    />
                </PaperRefined>
                <PaperRefined>
                    {usersList}
                </PaperRefined>
            </div>)
    }

}


export default FetchingRandomUsers