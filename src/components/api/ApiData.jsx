import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Initialize loading properly
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const result = await response.json(); // ✅ Await here
      setData(result.slice(0, 20)); // (optional) show only first 20 for performance
    } catch (err) {
      console.error(err);
      setError(true); // ✅ Set error if fetch fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((item) => (
        <div key={item?.id}>
          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiData;
