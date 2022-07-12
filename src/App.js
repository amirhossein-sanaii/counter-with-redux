import { connect } from 'react-redux/es/exports';

import style from './App.module.css';

import Btncourent from './Component/Btncourent';
import Header from './Component/Header';
import Showcounter from './Component/Showcounter';
import BtnShowcourent from './Component/BtnShowcourent';

function App(props) {

  return (
    <div className="App">
      <Header/>
      <Showcounter value={props.counter} />
      <hr/>
      <div className={style.DivBtn}>
        <Btncourent handeler={props.onIncremant} nameBtn={"+"}/>
        <Btncourent handeler={props.downIncremant} nameBtn={"-"}/>
        <Btncourent handeler={props.onTowIncremant} nameBtn={"+2"}/>
        <Btncourent handeler={props.downTowIncremant} nameBtn={"-2"}/>
      </div>
      <hr/>
      <BtnShowcourent/>
    </div>
  );
}

const mapStateToProps = (state)=>{
return {
  counter : state.counter
}
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onIncremant : ()=> dispatch({ type:'ADDONE'}),
    downIncremant : ()=> dispatch({ type:'REMOVEONE'}),
    onTowIncremant : ()=> dispatch({ type:'ADDTOW' , value: 2}),
    downTowIncremant : ()=> dispatch({ type:'REMOVETOW' , value: 2})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);