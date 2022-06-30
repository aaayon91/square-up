import './BoardListPage.css'
import BoardCard from '../../components/BoardCard/BoardCard';

export default function BoardListPage({ boards, user, handleDeleteBoard }) {

    return (
        <>
            {/* <h1 className="squareup-2">SquareUp</h1> */}
            <div className="board-container">
                {boards.map((board, idx) => (
                <BoardCard board={board} key={board._id} index={idx} user={user} handleDeleteBoard={handleDeleteBoard}/>
                ))}
            </div>
        </>
    );
}