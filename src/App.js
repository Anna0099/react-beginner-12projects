import React from 'react';
import './index.scss';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";

function App() {
    const  [open1,setOpen1] = React.useState(false);
    const  [open2,setOpen2] = React.useState(false);
  return (
    <div className="App">
      <button onClick={ ()=>setOpen1(true)} className="open-modal-btn">
          ✨ Открыть окно условного рендера
      </button>
      <button onClick={ ()=>setOpen2(true)} className="open-modal-btn">
          ✨ Открыть окно анимированого рендера
      </button>
        {open1 &&
        <Modal1 open={open1} setOpen={setOpen1}>
            <h2>Модалка условного рендера</h2>
        </Modal1>}
        <Modal2 open={open2} setOpen={setOpen2}/>
    </div>
  );
}

export default App;
