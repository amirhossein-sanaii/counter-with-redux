import style from "./Btncourent.module.css"

const Btncourent = (props)=>{
    return(
        <>
                <button className={`${style.btn}`} onClick={props.handeler}> {props.nameBtn} </button>
        </>
    )
}

export default Btncourent