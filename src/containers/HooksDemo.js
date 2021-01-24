import React from "react";
import { useFetch } from "../utils/hooks/useFetch";

const HooksDemo = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <div>
      <h5>
        <strong>useFetch</strong> Hook Demo
      </h5>
      {loading
        ? "Loading ..."
        : data && (
            <div>
              <h6>
                {data.id}: {data.title}
              </h6>
              <p>{data.body}</p>
            </div>
          )}
      <hr />
    </div>
  );
};

export default HooksDemo;
