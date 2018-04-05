const FIREBASE_URL = 'https://sticker-album-b07ad.firebaseio.com/-L9JVjKGRx9fCydg_2eC/.json'

export default async data => {
    const req = await fetch(FIREBASE_URL, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    })
    return await req.json()
}
