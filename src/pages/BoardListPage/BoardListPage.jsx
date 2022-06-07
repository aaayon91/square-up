import './BoardListPage.css'
import { useEffect } from 'react';
import * as usersService from '../../utilities/users-service';
import * as boardsAPI from '../../utilities/boards-api';
import BoardCard from '../../components/BoardCard/BoardCard';

export default function BoardListPage({ boards, setBoards, user, handleDeleteBoard }) {

    useEffect(function () {
        async function fetchAllBoards() {
          const boards = await boardsAPI.getAll();
          setBoards(boards);
        }
        fetchAllBoards();
    }, []);

    return (
        <>
            <h1 className="squareup-2">SquareUp</h1>
            <div className="board-container">
                {boards.map((board, idx) => (
                <BoardCard board={board} key={board._id} index={idx} user={user} handleDeleteBoard={handleDeleteBoard}/>
                ))}
            </div>
        </>
    );
}