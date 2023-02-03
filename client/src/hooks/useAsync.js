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

  return state;
}

export default useAsync;
