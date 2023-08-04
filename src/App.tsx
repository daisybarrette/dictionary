import { useState } from 'react'

import './App.css'
import fetchDefinition from './functions/fetchDefinition'


function App() {
    const [value, setValue] = useState('')


    function handleSubmit(e) {
        e.preventDefault();

        if (!value) {
            return
        }

        console.log('fetching definition for...', value)

        const definition = fetchDefinition(value) // will be async

        setValue('')
    }


    return (
        <main>
            <h1>Dictionary</h1>

            <form
                id='searchForm'
                data-testid='searchForm'
                onSubmit={handleSubmit}
            >
                <label htmlFor='searchInput'>Search for a definition: </label>
                <input
                    id='searchInput'
                    data-testid='searchInput'
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </main>
    )
}

export default App
