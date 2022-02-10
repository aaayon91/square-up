import './BoardListPage.css'
import { useState, useEffect } from 'react';
import * as usersService from '../../utilities/users-service';
import * as boardsAPI from '../../utilities/boards-api';
import BoardCard from '../../components/BoardCard/BoardCard';

export default function BoardListPage({ boards, setBoards, user, board, setUser, handleDeleteBoard }) {
    // const [boards, setBoards] = useState([]);

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

    // async function handleAddBoard(boardData) {
    //     const board = await boardsAPI.add(boardData)
    //     setBoards([...boards, board])
    // }

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>AVAILABLE SQUARES</h1>
            <div className="board-container">
                {boards.map((board, idx) => (
                <BoardCard board={board} key={board._id} index={idx} user={user} handleDeleteBoard={handleDeleteBoard}/>
                ))}
            </div>
        </>
    );
}