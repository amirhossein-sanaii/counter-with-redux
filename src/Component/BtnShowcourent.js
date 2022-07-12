
import { connect } from "react-redux/es/exports"

import style from "./BtnShowcourent.module.css"

const BtnShowcourent =(props)=>{

    return(
        <>
        <div className={style.BtnShowcourent}>
            <button onClick={props.pushdata} className={style.btn}>Show Counter</button>
            <div>
            {props.stateNow.map((item,index)=>{
                return <p key={index}>{item}</p>
            })}
            </div>
        </div>
        </>
    )
}

const showstate = (state)=>{
    return{
        stateNow : state.arrayCounter
    }
}

const pushcounter = (dispatch)=>{
    return{
        pushdata : ()=>dispatch({type: 'PUSHDATA'})
    }
}

export default connect(showstate,pushcounter)(BtnShowcourent)