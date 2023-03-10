import { useContext } from 'react';
import { RehabContext } from '../context/RehabContext';


const useRehabContext = () => {

  const context = useContext(RehabContext);

  if(context === undefined){

    throw new Error("Context Hook is outside of the Context Provider");

  };

  return context;

};

export default useRehabContext;
