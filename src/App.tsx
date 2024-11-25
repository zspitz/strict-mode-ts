/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import GeoData from './GeoApi/GeoData'
import TeaSet from './TeaSet/TeaSet'
import StoryTray from './StoryTray/StoryTray'
import IntervalCounter from './IntervalCounter/IntervalCounter'

const App = () => {
    const [theme, setTheme] = useState('light')
    const [show, setShow] = useState(true)

    const style = {
        color: theme == 'dark' ? 'white' : 'black',
        backgroundColor: theme == 'dark' ? 'black' : 'white'
    }

    const clickHandler = () => setTheme(
        prev => prev == 'dark' ? 'light' : 'dark'
    )

    return (
        <>
            <button onClick={clickHandler}>החלף מערכת צבעים</button>
            <br />
            <span>הצג קומפוננטה</span>
            <input type="checkbox" checked={show} onChange={e => setShow(e.target.checked)} />
            <hr />
            <div style={style}>
                {
                    show ?
                        <GeoData />
                        // <TeaSet />
                        // <StoryTray stories={initialStories} />
                        // <IntervalCounter />
                        : <></>
                }
            </div>
        </>
    )
}

const initialStories = [
    { id: 0, label: 'סיפורו של דוד' },
    { id: 1, label: 'סיפורה של רינה' },
    { id: 2, label: 'סיפורו של משה' }
]

export default App
