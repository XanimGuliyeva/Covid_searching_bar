import React,{useEffect,useState} from 'react'
import axios from 'axios'

function App() {

  const [data,setData] = useState();
  const [date,setDate] = useState("");

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setData(res.data[date]))
    .catch(err=>console.log(err))
  },[data,date])
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">Searching Bar</h2>
            <input placeholder="DD/MM//YYYY" className="form-control" onChange={(e)=>setDate(e.target.value)}/>
            <table class="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Number of tests</th>
                  <th scope="col">Number of patient</th>
                  <th scope="col">Numbur of death</th>
                </tr>
              </thead>
              <tbody>
                <tr className={data===undefined?"bg-danger":"bg-success"}>
                  <th scope="row" >{data===undefined?"Data is loading":data.date}</th>
                  <td >{data===undefined?"Data is loading":data.totalTests}</td>
                  <td >{data===undefined?"Data is loading":data.patients}</td>
                  <td >{data===undefined?"Data is loading":data.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
