/* Conection with API */

import { sendAPIQgetJSON } from './infraestructureServices'

const endPoint = "http://localhost:3000/api/"

export async function getResultOfNumber(guessNumber) {
    const responseJson = await sendAPIQgetJSON(endPoint+guessNumber);
    return responseJson;
}