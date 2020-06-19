import React, { useLayoutEffect, useState, useEffect } from 'react';





function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ShowWindowDimensions = ({ updateWindowWH }) => {
  const [width, height] = useWindowSize();

  useEffect(() => {
    updateWindowWH(width, height)
    console.log("Hello")
  });
  
  return <h1>Window size: {width} x {height}</h1>;
}


export default ShowWindowDimensions;