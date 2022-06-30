import sendRequest from './send-request';
const BASE_URL = '/api/games'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getOne(gameRef) {
    return sendRequest(`${BASE_URL}/${gameRef}`);
}