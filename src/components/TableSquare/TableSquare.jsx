import { useState } from 'react/cjs/react.production.min';
import './TableSquare.css'

export default function TableSquare({board, user, handleAddSquare, handleDeleteSquare, pos, winner}) {
    // const [click, setClick] = useState(true)
    const square = getSquare()

    async function handleAdd() {
        await handleAddSquare(board._id, pos);
        console.log('Added')
        // setClick(false)
        // console.log(board)
    }

    async function handleDelete() {
        console.log('Deleted')
        await handleDeleteSquare(board._id, pos);
        // console.log(board)
    }

    function getSquare() {
        return board.squares.find(square => square.pos === pos) || null
    }

    return <button style={{backgroundColor: square ? 'grey' : '#FA532E', border: (winner === pos) ? "5px solid red" : null}} onClick={square ? () => handleDelete() : () => handleAdd()} id={pos} className="table-square-btn" >
            { square ? square.user.name : pos }
        </button>
}

// type="submit"
// disabled={square}