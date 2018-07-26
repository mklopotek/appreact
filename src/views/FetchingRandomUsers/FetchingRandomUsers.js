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
        const displayUser = user => (
            <User
                user={user}
                key={user.login.uuid}
            />
        )
        

        const usersList = (
            this.state.randomUserData &&
            this.state.randomUserData
                .map(displayUser)
        )

        const searchResults = (
            this.state.randomUserData &&
            this.state.randomUserData
                .filter(user => (
                    user.name.first+' '+user.name.last)
                    .indexOf(this.state.searchPhrase) !== -1
                    || 
                    user.email.indexOf(this.state.searchPhrase) !== -1
            )
                .map(displayUser)
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
                  {searchResults}
                </PaperRefined>
                <PaperRefined>
                    {usersList}
                </PaperRefined>
            </div>)
    }

}


export default FetchingRandomUsers