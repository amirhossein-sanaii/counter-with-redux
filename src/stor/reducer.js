
import * as actionType from './actions'

const inistialState = {
    counter :0,
    hed: "this is header",
    arrayCounter :[]
}

const reducer = (state = inistialState , action)=>{

    switch (action.type) {
        case actionType.ADDONE:
            return{
                ...state,
                counter: state.counter +1
            }
        case actionType.REMOVEONE:
            return{
                ...state,
                counter: state.counter -1
            }
        case actionType.ADDTOW:
            return{
                ...state,
                counter: state.counter + action.value
            }
        case actionType.REMOVETOW:
                return{
                    ...state,
                    counter: state.counter - action.value
            }
        case actionType.LOGLOG:
            return{
                ...state,
                hed: "you click in the header"
            }

        case actionType.PUSHDATA:
            return{
                ...state,
                arrayCounter: state.arrayCounter.concat(state.counter)
            }
        default:
            return state
    }
}
export default reducer