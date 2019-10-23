import React, { useContext } from 'react';
import { DemoContext } from "../contexts/contextDemo";

export default function ContextConsumer() {
  const { demoData } = useContext(DemoContext);
  return (
    <div>
      {
        demoData ? demoData.map((res, index) => (
          <div key={`${res.title} (${index})`}>
            <h4>{res.title}</h4>
            <p>{res.body}</p>
          </div>
        )) : null
      }
    </div>
  )
}
