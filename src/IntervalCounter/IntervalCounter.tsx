import { useEffect, useState } from 'react'

const IntervalCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(
            () => {
                console.log(new Date().getSeconds())
                setCount(prev => prev + 1)
            },
            1000
        )
    }, [])

    return <div>{count}</div>
}

export default IntervalCounter
