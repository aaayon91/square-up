import { useState } from 'react'
import './TableSquare.css'

export default function TableSquare({board, user, handleAddSquare, pos}) {
    const square = getSquare()
    // const [disableBtn, setDisablebtn] = useState(getSquare())
    // const [squareOwner, setSquareOwner] = useState()
    // const [taken, setTaken] = useState("yellow")

    async function handleClick() {
        await handleAddSquare(board, pos);
    }

    function getSquare() {
        return board.squares.find(square => square.pos === pos) || null
    }

    return <button type="submit" style={{backgroundColor: square ? 'red' : 'yellow'}} onClick={handleClick} id={pos} className="table-square-btn" disabled={square}>
            { square ? square.user.name : null }
        </button>
}