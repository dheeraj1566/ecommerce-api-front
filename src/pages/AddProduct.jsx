import { useState } from "react";
import instance from "../axiosConfig";

function AddProduct() {
  const [data, setData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
    inStock: "",
    inventory: "",
    url: "",
  });

  function handleChange(e) {
    if (e.target.name === "url") {
      setData({ ...data, url: e.target.files[0] });
      console.log(e.target.files);
    }
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("brand", data.brand);
    // formData.append("category", data.category);

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData.entries());

    console.log(finalData);

    const response = await instance.post("/api/product", finalData);

    console.log(response);
  }

  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Add Product</h2>
      <form
        className="w-2/3 my-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            type="text"
            placeholder="Product Name"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="brand">
            Brand
          </label>
          <input
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            type="text"
            placeholder="Product Brand"
            name="brand"
            id="brand"
            value={data.brand}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            placeholder="Product Category"
            name="category"
            id="category"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="pricey">
            Price
          </label>
          <input
            type="text"
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            placeholder="Product Price"
            name="price"
            id="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="description">
            Description
          </label>
          <textarea
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            name="description"
            id="description"
            placeholder="Enter Description"
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="inStock">
            In Stock
          </label>
          <input
            type="radio"
            name="inStock"
            id="inStock"
            value={true}
            onChange={handleChange}
          />
          Yes
          <input
            type="radio"
            name="inStock"
            id="inStock"
            value={false}
            onChange={handleChange}
          />
          No
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="inventory">
            Inventory
          </label>
          <input
            type="text"
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            placeholder="Product Inventory"
            name="inventory"
            id="inventory"
            value={data.inventory}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="w-1/6 inline-block" htmlFor="url">
            Image
          </label>
          <input
            className="border-2 border-blue-300 rounded w-5/6 p-2"
            type="file"
            name="url"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-400 text-white px-6 py-1 rounded w-full"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
