import { getToken } from './users-service';
const BASE_URL = '/api/boards'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getOne(boardId) {
    return sendRequest(`${BASE_URL}/${boardId}`);
}

export function add(boardData) {
    return sendRequest(BASE_URL, 'POST', boardData);
}

export function deleteBoard(board_id) {
    return sendRequest(BASE_URL, 'DELETE', board_id);
}

export function addScores(board_id) {
    return sendRequest(BASE_URL, 'PUT', board_id);
}

// Helper Function
async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method }
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Ensure the headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}