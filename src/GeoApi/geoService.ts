const delayedPromise = (interval: number) =>
    new Promise(
        resolver => setTimeout(
            () => resolver(true),
            interval
        )
    )

export const citiesApi = async () => {
    await delayedPromise(10000)
    return [
        'ירושלים',
        'תל אביב',
        'חיפה',
        'אשקלון',
        'מודיעין',
        'באר שבע',
        'אילת'
    ]
}

export const countriesApi = async () => {
    await delayedPromise(500)
    return [
        'ישראל',
        'ארה"ב',
        'קנדה',
        'איחוד האמירויות',
        'בלגיה'
    ]
}
