import { useEffect, useState } from 'react'

import './App.css'
import fetchDefinition from './functions/fetchDefinition'
import DefinitionCard from './components/DefintionCard'
import Spinner from './components/Spinner'


function App() {
    const [isFetching, setIsFetching] = useState(false)
    const [hasError, setHasError] = useState(false)

    const [value, setValue] = useState('') // current value in input
    const [word, setWord] = useState('') // submitted word to search for
    const [definition, setDefintion] = useState({
        word: '',
        phonetic: '',
        meanings: [],
    }) // definition returned from API


    useEffect(() => {
        const getDefinition = async () => {
            setIsFetching(true)
            setHasError(false)

            try {
                const response = await fetchDefinition(word)

                if (response.word === '') {
                    setHasError(true)
                }

                setDefintion(response)
            }

            catch (err) {
                setHasError(true)
            }

            finally {
                setIsFetching(false)
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

        setWord(value)
        setValue('')
    }

    const ComponentToDisplay = isFetching
        ? Spinner
        : hasError
            ? Error
            : DefinitionCard

    return (
        <>
            <h1><a href="/">Dictionary</a></h1>

            <main className='glass'>
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

                <ComponentToDisplay definition={definition} />
            </main>
        </>
    )
}

// @TODO extract to separate components, style
const Error = () => <div>'ERROR here'</div>

export default App
