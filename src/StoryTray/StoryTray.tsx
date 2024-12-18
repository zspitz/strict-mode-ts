const newStyle = {
    color: 'gray'
}

type Props = {
    stories: {
        id: string | number,
        label: string
    }[]
}

// https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
const StoryTray = ({ stories }: Props) => {
    stories.push({
        id: 'create',
        label: '(לחץ כאן כדי ליצור סיפור חדש)'
    })

    return (
        <ul>
            {stories.map(story => (
                <li key={story.id} style={story.id === 'create' ? newStyle : {}}>
                    {story.label}
                </li>
            ))}
        </ul>
    )
}

export default StoryTray
