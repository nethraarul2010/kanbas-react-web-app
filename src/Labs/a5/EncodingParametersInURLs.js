import React, {useEffect,useState} from "react";
import axios from "axios";
function EncodingParametersInURLs(){
    const[a,setA]= useState(34);
    const[b,setB]=useState(23);
    const [result, setResult] = useState(0);
    const fetchSum = async (a, b) => {
      const response = await
        axios.get(`https://kanbas-node-server-app-uhp6.onrender.com/a5/add/${a}/${b}`);
      setResult(response.data);
    };
    const fetchSubtraction = async (a, b) => {
      const response = await axios.get(
        `https://kanbas-node-server-app-uhp6.onrender.com/a5/subtract/${a}/${b}`);
      setResult(response.data);
    };
  
    return(
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Calculator</h4>
            <input onChange={(e)=>setA(e.target.value)} type="number" value={a}
            className="form-control mb-2" />
            <input onChange={(e)=>setB(e.target.value)} type="number" value={b}
            className="form-control mb-2" />
                <input value={result}
        className="form-control mb-2" type="number" readOnly
      />
            <h4>Fetch result</h4>
            <button onClick={()=>fetchSum(a,b)} className="btn btn-danger mb-2 w-75">
              Fetch sum of {a}+{b}
            </button>
            <button onClick={()=>fetchSubtraction(a,b)} className="btn btn-primary mb-2 w-75">
              Fetch subtract of {a}-{b}
            </button>

    </div>
    );
}
export default EncodingParametersInURLs;