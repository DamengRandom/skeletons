import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: false
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true
    });
    fetch(url)
      .then(res => res.json())
      .then(data => setState({
        data,
        loading: false
      }));

    // const f = async () => {
      // useEffect: how to call function in a async await format
      // this is async syntax for useEffect hooks (Syntax sugar)
    // }
    // f();
  }, [url]);
  return state;
}
