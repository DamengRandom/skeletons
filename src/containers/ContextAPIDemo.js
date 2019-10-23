import React, { useContext } from 'react';
import { useFetch } from "../utils/hooks/useFetch";
import { DemoContext } from "../contexts/contextDemo";

export default function ContextAPIDemo() {
  const context = useContext(DemoContext);
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  const handleFetchData = () => {
    if(data) {
      context.fetchDemoData(data); // trigger fetch data and pass data to global state
    }
  }
  return (
    <div>
      <button onClick={handleFetchData}>fetch Data</button>
      {console.log('returned? ', context.demoData)}
    </div>
  )
}
