import { useState } from 'react'
import './TableSquare.css'

export default function TableSquare({board, user, handleAddSquare}) {
    const [disableBtn, setDisablebtn] = useState(false)
    const [squareOwner, setSquareOwner] = useState('')
    const [taken, setTaken] = useState("yellow")

    async function handleClick() {
        // console.log(board)
        // console.log(user)
        // console.log(board.squares.length)
        await handleAddSquare(board, user);
        setSquareOwner(user.name)
        setDisablebtn(true);
        setTaken("red")
        console.log(board.squares.length)
        // handleAddSquare(board, user);
    }
    
    
    // function handleAddSquare() {
    //     console.log(board)
    //     console.log(user)
    //     console.log(board.squares.length)
    //     setSquareOwner(user.name)
    //     setDisablebtn(true);
    //     setTaken("red")
    // }

    return <button type="submit" style={{backgroundColor: `${taken}`}} onClick={handleClick} className="table-square-btn" disabled={disableBtn}>{squareOwner}</button>
}