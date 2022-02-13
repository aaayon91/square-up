import { useState } from 'react'
import './TableSquare.css'

export default function TableSquare({board, user, handleAddSquare, pos}) {
    const square = getSquare()
    // const [disableBtn, setDisablebtn] = useState(getSquare())
    // const [squareOwner, setSquareOwner] = useState()
    // const [taken, setTaken] = useState("yellow")

    async function handleClick() {
        // console.log(board)
        // console.log(user)
        // console.log(board.squares.length)
        await handleAddSquare(board, pos);
        // setSquareOwner(user.name)
        // setDisablebtn(true);
        // setTaken("red")
        // let square = board.squares.length
        // console.log(square)
        // handleAddSquare(board, user);
    }

    function getSquare() {
        return board.squares.find(square => square.pos === pos) || null
    }
    
    
    // function handleAddSquare() {
    //     console.log(board)
    //     console.log(user)
    //     console.log(board.squares.length)
    //     setSquareOwner(user.name)
    //     setDisablebtn(true);
    //     setTaken("red")
    // }

    return <button type="submit" style={{backgroundColor: square ? 'red' : 'yellow'}} onClick={handleClick} id={pos} className="table-square-btn" disabled={square}>
            { square ? square.user.name : null }
        </button>
}