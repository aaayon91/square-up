import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewBoardPage from '../NewBoardPage/NewBoardPage';
import BoardListPage from '../BoardListPage/BoardListPage';
import BoardShowPage from '../BoardShowPage/BoardShowPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import * as boardsAPI from '../../utilities/boards-api';
// import * as squaresAPI from '../../utilities/squares-api';

let f=0;
export default function App() {
  const [user, setUser] = useState(getUser());
  const [form, setForm] = useState(1);
  const [boards, setBoards] = useState([]);

  useEffect(function () {
    async function fetchAllBoards() {
      const boards = await boardsAPI.getAll();
      setBoards(boards);
    }
    fetchAllBoards();
  }, []);

  function formDisplayed(evt) {
      f = f + 1;
      if (f % 2 === 0) {
          setForm(1);
      } else {
          setForm(null);
      }
  }

  async function handleAddBoard(boardData) {
    const board = await boardsAPI.add(boardData)
    setBoards([...boards, board])
  }

  async function handleDeleteBoard(board_id) {
    await boardsAPI.deleteBoard({board_id})
    const boards = await boardsAPI.getAll();
    setBoards(boards);
  }

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/boards/new" element={ <NewBoardPage user={user} setUser={setUser} handleAddBoard={handleAddBoard}/> } />
            <Route path="/boards" element={ <BoardListPage user={user} setUser={setUser} boards={boards} setBoards={setBoards} handleAddBoard={handleAddBoard} handleDeleteBoard={handleDeleteBoard}/> } />
            {/* <Route path="/boards" element={ <BoardListPage user={user} setUser={setUser} boards={boards.filter(board => board.game_started === false)} setBoards={setBoards} handleAddBoard={handleAddBoard} handleDeleteBoard={handleDeleteBoard}/> } /> */}
            <Route path="/boards/:boardId" element={<BoardShowPage boards={boards} user={user} />} />
            <Route path="/*" element={<Navigate to="/boards" />} /> 
          </Routes>

        </>
        :
        <>
          <NavBar user={user} setUser={setUser} form={form} formDisplayed={formDisplayed}/>
          <AuthPage setUser={setUser} form={form}/>
        </>
      }
    </main>
  );
}
