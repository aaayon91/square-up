import TableSquare from "../TableSquare/TableSquare"

export default function BoardTable({board, user, handleAddSquare, handleDeleteSquare, winner}) {
    let arr = [...Array(Math.sqrt(board.size)).keys()]

    return (
        <div id="table-scroll" className="table-scroll">
            <table>
                <thead>
                    <tr>
                        <th style={{backgroundColor: 'black', borderRadius: '15px', color: 'white', fontWeight: 'bold'}}>${board.entry}<br></br>/SQ</th>
                            {arr.map((col, idx) => (
                                <th>{col}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <th style={{backgroundColor: 'black', borderRadius: '15px', color: 'white', fontWeight: 'bold'}}>${board.entry}<br></br>/SQ</th>
                        {arr.map((col, idx) => (
                            <th>{col}</th>
                        ))}
                    </tr> */}
                    {arr.map((row, idx) => (
                        <tr>
                            <th>{row}</th>
                            {arr.map((col, idx) => (
                                <td><TableSquare board={board} user={user} pos={(row * 10) + col} handleAddSquare={handleAddSquare} handleDeleteSquare={handleDeleteSquare} winner={winner}/></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}