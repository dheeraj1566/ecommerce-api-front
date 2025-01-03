import React, { useEffect, useState } from "react";
import instance from "../axiosConfig";

function Home() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await instance.get("/api/product");
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading...</h2>;
  return <div>Home</div>;
}

export default Home;
