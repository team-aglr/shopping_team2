import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
}

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...initialState, isLoading: true};
    case 'SUCCESS':
      return {...initialState, data: action.payload};
    case 'ERROR':
      return {...initialState, isError: true};
    default:
      return state;
  }
}


// Goal: setProduct working
const useAsync = (url) => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'LOADING'})
      try {
        const response = await axios.get(url);
        const data = response.data;
        dispatch({type: 'SUCCESS', payload: data});
      } catch (err) {
        dispatch({type: 'ERROR'});
      }
    } 
    
    fetchData();
  }, [url]);
  
  const setState = (data) => {
    dispatch({type: 'SUCCESS', payload: data});
  } 

  return [state, setState];
}

export default useAsync;



/*


useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'LOADING'})
      try {
        const response = await axios.get(url);
        const data = response.data;
        dispatch({type: 'SUCCESS', payload: data});
      } catch (err) {
        dispatch({type: 'ERROR'});
      }
    } 

    fetchData();
  }, [url]);


const useEntity = (url) => {
  const [value, dispatch] = useReducer('')

  const setValue = async (method, payload) => {
    response = await axios.method(payload)
    data = response.data
    dispatch({type: SET_VALUE, data})
  }

  // do fetch
  setValue(fetchedData)

  return {
    value,
    setValue
  }
}



const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

*/