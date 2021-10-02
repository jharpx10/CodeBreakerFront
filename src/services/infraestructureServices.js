/* Sends API query */
export async function sendAPIQgetJSON(APIQuery) {
 
    const response = await fetch(APIQuery, {
        headers: {
            "Accept": "application/json"
        },
        method: 'GET',
    });
  
    const responseJson = await response.json();
    return await responseJson
}
