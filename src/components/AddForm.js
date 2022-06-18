import React, { useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { addItem } from "../redux/actions";

const AddForm = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleSubmit = () => {
    if (item === "" || amount === "") {
      const notify = () => toast("Please enter valid data!");
      notify();
      return;
    }
    const data = {
      item, //title:title,
      amount, //amount:amount,
      createdAt: new Date(),
    };
    setModalOpen(true);
    dispatch(addItem(data));
  };

  return (
    <div className="container flex flex-col w-3/4 min-h-[80vh] max-h-full mx-auto p-5 rounded-xl border shadow-md bg-white">
      {modalOpen && <Modal className="modal  absolute" />}
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
      />
      <div className="form-item my-2 ml-20 mt-5">
        <label className="mr-2 ">Item</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Give a name to your item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="form-item my-2 ml-[35px]">
        <label className="mr-2">Amount Rs</label>
        <input
          type="text"
          placeholder="Enter amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96 p-2.5  dark:text-white"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div
        className="m-5 ml-[62rem] right-side-content form-add-button flex justify-center items-center w-24 h-10
        bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 duration-200  cursor-pointer"
        onClick={handleSubmit}
      >
        <label className="mr-3">Add</label>
        <BiPaperPlane className=" cursor-pointer " />
      </div>
    </div>
  );
};

export default AddForm;
