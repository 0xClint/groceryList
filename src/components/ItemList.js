import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux/es/exports";
import { ToastContainer, toast } from "react-toastify";

const ItemList = () => {
  const { groceryList, query } = useSelector((state) => state.items);
  const filteredList = groceryList.filter((items) => {
    return items.item.includes(query);
  });

  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className="item-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
      />
      {filteredList.length ? (
        filteredList.map((items) => {
          return <Card items={items} notifySuccess={notifySuccess} />;
        })
      ) : (
        <div className="empty-list empty-list mx-auto w-96 bg-blue-100 rounded-lg mt-20 flex flex-col justify-center items-center p-4">
          <img
            src={require("../assets/emptyList.png")}
            className="w-60 mb-3"
            alt="Empty List"
          />
          <label className="text-[1.3rem]">Uh Oh! Your list is empty <br/>Please add items</label>
        </div>
      )}
    </div>
  );
};

export default ItemList;
