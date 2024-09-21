import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <div className='h-screen bg-black '> 
      <div className='h-[85%] flex'>
        <Sidebar />
      </div>  
      <Player />
    </div>
  );
}

export default App;
 