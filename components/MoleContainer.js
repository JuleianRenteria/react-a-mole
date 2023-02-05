import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const bopAMole = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            {displayMole==true ? <Mole handleClick ={bopAMole} setDisplayMole={setDisplayMole} />
             : <EmptySlot setDisplayMole={setDisplayMole}></EmptySlot>}
        </div>
    )
}

export default MoleContainer
