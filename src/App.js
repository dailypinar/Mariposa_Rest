import './App.css';
import Header from "../src/Components/Header/Header.jsx";
import PrincipalContainer from "../src/Components/PrincipalContainer/PrincipalContainer.jsx"
import {useRef} from 'react';
import {useEffect} from 'react';
function App() {
  const ref = useRef(null);

  function scrollInto(idName){
     console.log(ref.current);
      let container = ref.current;
      console.log(idName);
      let target = container.querySelector(`#${idName}`);
      let pos = target.getBoundingClientRect().top;
      console.log(pos);

      target.scrollIntoView({
        behavior : "smooth",
        
        inline:'nearest',
      });
  }

  return (
    <div className="App">
      <Header backFunction={scrollInto}/>
      <PrincipalContainer ref={ref}/>
    </div>
  );
}

export default App;
