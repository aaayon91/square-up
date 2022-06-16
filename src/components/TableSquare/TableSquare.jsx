import './TableSquare.css'

export default function TableSquare({board, user, handleAddSquare, handleDeleteSquare, pos, winner}) {
    const square = getSquare()

    async function handleAdd() {
        await handleAddSquare(board._id, pos);
    }

    async function handleDelete() {
        await handleDeleteSquare(board._id, pos);
    }

    function getSquare() {
        return board.squares.find(square => square.pos === pos) || null
    }

    return <button style={{backgroundColor: square ? 'grey' : '#FA532E', border: (winner === pos) ? "5px solid red" : null}} onClick={square ? () => handleDelete() : () => handleAdd()} id={pos} className="table-square-btn" >
            { square ? square.user.name : pos }
        </button>
}