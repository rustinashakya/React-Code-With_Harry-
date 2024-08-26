// import logo from './logo.svg';
import {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="Ahuja">
      <Navbar></Navbar>
      <div className='value'> {value} </div>
      <button onClick={()=> {setValue(value+1)}}>Click Me</button>
      <Footer></Footer>
    </div>
  );
}



export default App;
