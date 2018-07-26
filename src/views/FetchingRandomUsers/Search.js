import React from 'react'
import { TextField } from 'material-ui';

const Search = ({searchPhrase, searchPhraseChangeHandler}) => (

    <TextField
        placeholder={'Search'}
        onChange={searchPhraseChangeHandler}
        value={searchPhrase}
    />
)

export default Search