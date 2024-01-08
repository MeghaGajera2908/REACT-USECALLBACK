import './App.css';
import { useState, useCallback } from 'react';

function App() {
  const [inputdata, setInputdata] = useState({ firstname: "", age: "", address: "" });
  const [record, setRecord] = useState([]);

  const handleonchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = () => {
    setRecord([...record, inputdata]);
    setInputdata({ firstname: "", lastname: "", address: "" });
  }
  // callback function return kre use memo value return kre
  // peramitor pass krva mate callback no use thay
  const getData = useCallback((value, ele) => {
    if (value === "test") {
      return <h1>Hello</h1>
    }
    else if (value === "test2") {
      return <h1>Test 2</h1>
    }
    else if (value === "test3") {
      return <h1>Test3</h1>
    }
    else if (ele === "test3") {
      return <h1>Test3 Email</h1>
    }
    else return <h1>megha</h1>
  }, [inputdata.firstname, inputdata.address]);

  return (
    <div className="App">
      <div>
        <label htmlFor='fname'>first Name</label>
        <input type='text' id='fname' name='firstname' value={inputdata.firstname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='lname'>last Name</label>
        <input type='text' id='lname' name='lastName' value={inputdata.age} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='address'>address</label>
        <input type='text' id='age' name='address' value={inputdata.address} onChange={(e) => handleonchange(e)} />
      </div>
      {getData(inputdata.firstname, inputdata.address)}
      <div>
        <button type='submit' onClick={() => handlesubmit()}>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;