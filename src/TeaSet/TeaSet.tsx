let guest = 0

const Cup = () => {
    guest += 1
    return <h2>כוס שתיה עבור אורח מספר {guest}</h2>
}

const TeaSet = () => (
    <>
        <Cup />
        <Cup />
        <Cup />
    </>
)

export default TeaSet
