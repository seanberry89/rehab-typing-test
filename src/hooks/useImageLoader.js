import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';

const useImageLoader = (src, placeholder) => {

  const context = useRehabContext();
  const { setLoading } = context;

  const [ loadImg, setLoadImg ] = useState(placeholder);


  useEffect(() => {

    setLoading(true);

    const img = new Image();

    img.src = src;

    img.onload = () => {

      setLoading(false);

      setLoadImg(src);

    }

    // eslint-disable-next-line
  }, [src])

  return loadImg;

}

export default useImageLoader;
