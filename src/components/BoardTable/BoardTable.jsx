import TableSquare from "../TableSquare/TableSquare"

export default function BoardTable({board, user, handleAddSquare}) {
    // let props ={ board={board}, user={user}}

    return (
    <table>
        <tr>
            <td style={{backgroundColor: 'black'}}></td>
            <th scope="col">{0}</th>
            <th scope="col">{1}</th>
            <th scope="col">{2}</th>
            <th scope="col">{3}</th>
            <th scope="col">{4}</th>
            <th scope="col">{5}</th>
            <th scope="col">{6}</th>
            <th scope="col">{7}</th>
            <th scope="col">{8}</th>
            <th scope="col">{9}</th>
        </tr>
        <tr>
            <th scope="row" className="table-num-col">{0}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{1}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{2}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{3}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{4}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{5}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{6}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{7}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{8}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
        <tr>
            <th scope="row">{9}</th>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
            <td><TableSquare board={board} user={user} handleAddSquare={handleAddSquare}/></td>
        </tr>
    </table>
    )
}