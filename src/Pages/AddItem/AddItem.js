import React from "react";
import "./AddItem.css";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto py-5">
      <h1>Please add a item</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Enter book name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Enter supplier name"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Enter description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Enter photo url"
          {...register("picture")}
        />
        <input
          className="mb-2"
          placeholder="Enter price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Enter quantity"
          type="number"
          {...register("quantity")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
