import sendRequest from './send-request';
const BASE_URL = '/api/squares'

export function addSquare(boardId, pos) {
    return sendRequest(BASE_URL, 'POST', {boardId, pos});
}

export function deleteSquare(boardId, pos) {
    return sendRequest(BASE_URL, 'DELETE', {boardId, pos});
}