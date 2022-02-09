import { useState, useEffect } from 'react';
import * as usersService from '../../utilities/users-service';
import * as boardsAPI from '../../utilities/boards-api';

export default function OrderHistoryPage({ user, setUser, handleAddBoard }) {
    const [boards, setBoards] = useState([]);

    useEffect(function () {
        async function fetchAllBoards() {
          const boards = await boardsAPI.getAll();
          setBoards(boards);
          // If no orders, activeOrder will be set to null below
        //   setActiveOrder(orders[0] || null);
        }
        fetchAllBoards();
    }, []);

    console.log(boards);

    async function handleAddBoard(boardData) {
        const board = await boardsAPI.add(boardData)
        setBoards([...boards, board])
    }

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return(
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken} >Check When My Login Expires</button>
        </>
    );
}