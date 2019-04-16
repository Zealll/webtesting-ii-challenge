import React from 'react'


function Dashboard(props) {



    return(
        <div>
            <button onClick={props.strikes}>Strike</button>
            <button onClick={props.balls}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
        </div>
    )
}


export default Dashboard