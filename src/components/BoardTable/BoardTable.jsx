import TableSquare from "../TableSquare/TableSquare"

export default function BoardTable({board, user, handleAddSquare}) {
    // let props ={ board={board}, user={user}}
    let winner;

    if (board.visitScore) {
        winner = parseInt(`${board.visitScore}${board.homeScore}`)
        console.log(winner)
        // console.log(typeof(parseInt(score)))
    }

    // let winner = getWinner();

    // function getWinner() {
    //     if (board.visitScore) {

    //     }
    //     return console.log(board.visitScore + board.homeScore, 'WINNERRRRRRR!!!!')
    //     // console.log(winner)
    // }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td style={{backgroundColor: 'black', borderRadius: '15px'}}></td>
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
                        <td><TableSquare board={board} user={user} pos={0} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={1} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={2} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={3} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={4} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={5} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={6} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={7} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={8} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={9} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{1}</th>
                        <td><TableSquare board={board} user={user} pos={10} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={11} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={12} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={13} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={14} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={15} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={16} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={17} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={18} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={19} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{2}</th>
                        <td><TableSquare board={board} user={user} pos={20} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={21} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={22} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={23} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={24} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={25} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={26} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={27} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={28} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={29} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{3}</th>
                        <td><TableSquare board={board} user={user} pos={30} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={31} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={32} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={33} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={34} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={35} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={36} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={37} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={38} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={39} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{4}</th>
                        <td><TableSquare board={board} user={user} pos={40} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={41} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={42} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={43} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={44} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={45} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={46} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={47} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={48} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={49} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{5}</th>
                        <td><TableSquare board={board} user={user} pos={50} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={51} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={52} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={53} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={54} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={55} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={56} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={57} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={58} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={59} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{6}</th>
                        <td><TableSquare board={board} user={user} pos={60} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={61} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={62} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={63} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={64} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={65} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={66} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={67} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={68} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={69} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{7}</th>
                        <td><TableSquare board={board} user={user} pos={70} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={71} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={72} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={73} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={74} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={75} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={76} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={77} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={78} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={79} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{8}</th>
                        <td><TableSquare board={board} user={user} pos={80} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={81} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={82} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={83} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={84} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={85} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={86} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={87} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={88} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={89} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                    <tr>
                        <th scope="row">{9}</th>
                        <td><TableSquare board={board} user={user} pos={90} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={91} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={92} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={93} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={94} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={95} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={96} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={97} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={98} handleAddSquare={handleAddSquare} winner={winner}/></td>
                        <td><TableSquare board={board} user={user} pos={99} handleAddSquare={handleAddSquare} winner={winner}/></td>
                    </tr>
                </tbody>
            </table>
        {/* {
            board.squares.length === board.size ?
                <button type="submit" onclick={onclick}>PLAY</button>
            :
                <h1>NO</h1>
        } */}
    </>
    )
}