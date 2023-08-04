import { useState } from 'react'

import './App.css'
import fetchDefinition from './functions/fetchDefinition'


function App() {
    const [value, setValue] = useState('')


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(e: any) {
        e.preventDefault();

        if (!value) {
            return
        }

        console.log('fetching definition for...', value)

        const definition = fetchDefinition(value) // will be async
        console.log('definition is...', definition)

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
