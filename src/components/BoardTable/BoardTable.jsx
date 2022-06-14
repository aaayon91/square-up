import TableSquare from "../TableSquare/TableSquare"

export default function BoardTable({board, user, handleAddSquare}) {
    let winner;
    let arr = [...Array(Math.sqrt(board.size)).keys()]

    if ((board.visitScore || board.visitScore === 0) && board.validated) {
        winner = parseInt(`${board.visitScore % 10}${board.homeScore % 10}`)
    }

    return (
            <table>
                <tbody>
                    <tr>
                        <td style={{backgroundColor: 'black', borderRadius: '15px', color: 'white', fontWeight: 'bold'}}>${board.entry}<br></br>/SQ</td>
                        {arr.map((col, idx) => (
                            <th scope="col">{col}</th>
                        ))}
                    </tr>
                    {arr.map((row, idx) => (
                        <tr>
                            <th scope="row" >{row}</th>
                            {arr.map((col, idx) => (
                                <td><TableSquare board={board} user={user} pos={(row * 10) + col} handleAddSquare={handleAddSquare} winner={winner}/></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}