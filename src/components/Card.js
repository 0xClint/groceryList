import React from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions";

const Card = ({ items, notifySuccess }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(items));
    notifySuccess();
  };
  return (
    <div className="w-3/4 mx-auto ">
      <div className="card-inner-container flex justify-between px-8 py-2 mx-4 rounded-lg shadow-md mb-[5px]">
        <div className="item text-[1.2rem] mt-3 font-medium cursor-pointer">
          {items.item}
        </div>
        <div className="w-40 mr-3 flex flex-col justify-center items-end">
          <BiTrash
            className="button-delete text-right scale-[1.5] my-2 cursor-pointer hover:scale-[1.2rem] duration-200 ease-in-out"
            onClick={handleDelete}
          />
          <p className="text-[1.1rem] cursor-pointer mt-[5px]">
            ₹​ {items.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
