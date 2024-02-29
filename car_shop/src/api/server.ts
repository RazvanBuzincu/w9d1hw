let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTIxODk1OCwianRpIjoiNzk5OTk3ZTctOTNlYi00MzFmLWEzNDAtOTczNjc4M2FjMTk4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgY2FyIHNob3AiLCJuYmYiOjE3MDkyMTg5NTgsImNzcmYiOiI5Mjc3ODU5Ni0yMDE1LTRkMzItOWIzMy1hYzFkOTNiMmNiZTAiLCJleHAiOjE3NDA3NTQ5NTh9.w_iSh3hvPMjSSr-MH5R9YjbNb2psr1hJRuxS0BwVqRg"
let userId = localStorage.getItem('uuid') //grabbing the uuid from Google Authentication 



// putting all our API calls in a giant dictionary/object

export const serverCalls = {

    getShop: async () => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://razvancarshop.onrender.com/api/token`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}