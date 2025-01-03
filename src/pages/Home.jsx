import React, { useEffect, useState } from "react";
import instance from "../axiosConfig";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      setLoading(true);
      const response = await instance.get("/api/product");
      setdata(response.data); // Assumes API response contains an array of data
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  const handleDelete = (id) => {
    try {
      const response = instance.delete("/api/product/" + id);
      // setdata(response.data);
      // navigate("/");

      // window.location.href = "/";
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    console.log("Delete product with ID:", id);
  };

  if (loading) return <h2>Loading...</h2>;

  console.log(data);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      {data.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table className="w-[900px] border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2 w-10">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="odd:bg-gray-50 even:bg-gray-200">
                <td className="border p-2">
                  <img
                    src={product.image || product.url} // Fallback image if URL is broken
                    alt={product.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">${product.price}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
