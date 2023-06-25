import React, { useRef, useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/body";

function App() {
  const [pos,setPos] = useState<number>(0);
  window.addEventListener('scroll',() => {setPos(window.scrollY)})
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <header style={{height:'64px'}}>
        <div
          style={{
            margin:'0px 16px',
            height:'100%'
          }}
        >
          <Header bodyref={ref}/>
        </div>
      </header>
      <Body thisref={ref}/>
      <footer>
        This a sample website
      </footer>

      {pos > 64 && <button className="Float" onClick={() => window.scrollTo({top:0})}>
      <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="24" height="24"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z"/></svg>

      </button>}
    </div>
  );
}

export default App;
