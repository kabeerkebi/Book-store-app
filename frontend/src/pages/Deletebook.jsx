import React, { useState } from "react";
import BackButton from "../comp/BackButton";
import Spinner from "../comp/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const Deletebook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    console.log(id);
    axios
      .delete(`http://localhost:5555/books/${id}`)

      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Delete SuccessFully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("some mistake in your code go to console")
        enqueueSnackbar("ERROR", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-sky-400 border-2 rounded-xlw-{600px} p-8 mx-auto">
        <h3 className="text-2xl">Are you sure want to delete this book </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Deletebook;
