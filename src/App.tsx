import { useEffect, useState } from 'react'

import './App.css'
import fetchDefinition from './functions/fetchDefinition'
import DefinitionCard from './components/DefintionCard'


function App() {
    const [value, setValue] = useState('') // current value in input
    const [word, setWord] = useState('') // submitted word to search for
    const [definition, setDefintion] = useState({
        word: '',
        phonetic: '',
        meanings: [],
    }) // definition returned from API


    useEffect(() => {
        const getDefinition = async () => {
            try {
                const response = await fetchDefinition(word)

                console.log(response)
                setDefintion(response)
            }

            catch (err) {
                console.log(err)
            }

            finally {
                // @TODO update loading state here
                console.log('fetched')
            }
        }

        if (word !== '') {
            getDefinition()
        }

    }, [word])

    // @TODO clean up
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(e: any) {
        e.preventDefault();

        if (!value) {
            return
        }

        console.log('form submitted')

        setWord(value)
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

            <DefinitionCard definition={definition} />
        </main>
    )
}

export default App
