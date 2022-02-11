import { useState } from 'react'
import './TableSquare.css'

export default function TableSquare({board, user}) {
    const [disableBtn, setDisablebtn] = useState(false)
    const [squareOwner, setSquareOwner] = useState('')
    const [taken, setTaken] = useState("yellow")

    function handleAddSquare() {
        console.log(board)
        console.log(user)
        console.log(board.squares.length)
        setSquareOwner(user.name)
        setDisablebtn(true);
        setTaken("red")
    }

    return <button type="submit" style={{backgroundColor: `${taken}`}} onClick={handleAddSquare} className="table-square-btn" disabled={disableBtn}>{squareOwner}</button>
}