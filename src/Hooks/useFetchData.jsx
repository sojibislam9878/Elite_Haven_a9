import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/estateData.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetchData;
