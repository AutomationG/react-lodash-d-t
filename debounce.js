import React,{useState,useCallback,useRef} from 'react';
import debounce from 'lodash/debounce';


const Debounce = () =>{
  const [view,setView] = useState('')
  const [modelD,setModelD] = useState('')
  const [modelT,setModelT] = useState('')

  const debounceHandler = useCallback(
    debounce((value) => {
      setModelD(value);
    }, 1000),
    []
  );

  const throttleHandler = useCallback(
    debounce((value) => {
      setModelT(value);
    }, 1000),
    []
  );
 

  const setData = (event) =>{
    const data = event.target.value; 
    setView(data);
    debounceHandler(data);
    throttleHandler(data)
  }
  
  return(
    <div>
    <textarea value={view} onChange={setData}></textarea>
    <div>
    <label>View: </label>
    {view}
    </div>
    <div>
    <label>Debounce: </label>
    {modelD}
    </div>
    <div>
    <label>Throttle: </label>
    {modelT}
    </div>
    </div>
    )
   
}

export default Debounce;
