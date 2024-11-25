type Props = {
    guest: number
}

const Cup = ({ guest }: Props) => {
    return <h2>כוס שתיה עבור אורח מספר {guest}</h2>
}

const TeaSet = () => (
    <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
    </>
)

export default TeaSet
