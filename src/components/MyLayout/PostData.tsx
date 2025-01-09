import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('your-api-endpoint-here')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('error:', error);
      });
  }, []);

  console.log("data", data);

  return (
    <div>
      {data.map((item) => (
        <div></div>
      ))}
    </div>
  );
};

export default PostData;