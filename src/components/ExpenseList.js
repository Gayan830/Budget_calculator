import React from "react";
import Item from "./ExpenseItem";
import {MdDelete} from "react-icons/md"

const ExpenseList = ({ expenses, handleDelete, clearAllItems, clickEdit }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} handleDelete={handleDelete} clickEdit={clickEdit}/>;
        })}
      </ul> 
      {expenses.length > 0 && <button className="btn" onClick={clearAllItems} >clear expenses
        <MdDelete className="btn-icon" />
      </button> }
    </>
  );
};

export default ExpenseList;
