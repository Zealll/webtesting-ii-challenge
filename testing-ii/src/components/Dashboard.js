import React from 'react'


function Dashboard(props) {



    return(
        <div>
            <button title='strikeButton' onClick={props.strikes}>Strike</button>
            <button title='ballButton' onClick={props.balls}>Ball</button>
            <button title='foulButton' onClick={props.foul}>Foul</button>
            <button title='hitButton' onClick={props.hit}>Hit</button>
        </div>
    )
}


export default Dashboard