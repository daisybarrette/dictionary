import { useEffect, useState, FormEvent } from 'react'

import fetchDefinition from './functions/fetchDefinition'
import ThemeContext from './components/ThemeContext'
import DefinitionCard from './components/DefinitionCard'
import Spinner from './components/Spinner'
import Error from './components/Error'
import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'


const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

function App() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("userTheme")
        const initialValue = saved ? JSON.parse(saved) : null
        return initialValue || THEMES.LIGHT
    });

    const [isFetching, setIsFetching] = useState(false)
    const [hasError, setHasError] = useState(false)

    const [value, setValue] = useState('') // current value in input
    const [word, setWord] = useState('') // submitted word to search for
    const [definition, setDefintion] = useState({
        word: '',
    })

    useEffect(() => {
        if (theme === THEMES.DARK) {
            document.body.classList.add('is-dark-mode')
        }

        if (theme === THEMES.LIGHT && document.body.classList.contains('is-dark-mode')) {
            document.body.classList.remove('is-dark-mode')
        }

        localStorage.setItem('userTheme', JSON.stringify(theme));
    }, [theme])

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

    function handleSubmit(e: FormEvent) {
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
        <ThemeContext.Provider value={theme}>
            <header>
                <label className='dark-mode-toggle'>
                    <input
                        type='checkbox'
                        checked={theme === THEMES.DARK}
                        onChange={(e) => {
                            setTheme(e.target.checked ? THEMES.DARK : THEMES.LIGHT);
                        }}
                    />
                    {/* Label is hidden visually, but available to screen readers */}
                    <span className='sr-only'>
                        {theme === THEMES.LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}
                    </span>

                    <SunIcon className={`icon-sun ${theme === THEMES.LIGHT ? 'hidden' : 'visible'}`} />
                    <MoonIcon className={`icon-moon ${theme === THEMES.DARK ? 'hidden' : 'visible'}`} />
                </label>

                <h1><a href="/">Dictionary</a></h1>
            </header>

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

                <div className='wrapper'>
                    <ComponentToDisplay definition={definition} />
                </div>
            </main>

            <footer className='glass'>
                <div>by <a href='https://www.daisybarrette.com/'>Daisy Barrette</a> on{' '}
                    <a href='https://github.com/daisybarrette/dictionary'>GitHub</a></div>
            </footer>
        </ThemeContext.Provider>
    )
}

export default App
