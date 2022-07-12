import { connect } from "react-redux/es/exports"

import style from "./Header.module.css"

const Header =(props)=>{
    return(
        <>
        <h1 onClick={props.loglog} className={style.text}>{props.hed}</h1>
        </>
    )
}

const ops = (state)=>{
    return {
      hed : state.hed,
      ctr: state.counter
    }
}

const opsaction = (dispatch)=>{
return{
    loglog : ()=> dispatch({ type:'LOGLOG'}),
}
}

export default connect(ops,opsaction)(Header)