
import style from "./Showcounter.module.css"

const Showcounter = (props)=>{
    return(
        <>
            <div className={style.counter}>
                counter : {props.value}
            </div>
        </>
    )
}

export default Showcounter