import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({amount, charge, edit, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            onChange={handleChange}
            value={charge}
            placeholder="e.g. rent"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder="e.g. 100"
          />
        </div>
      </div>
        <button  type="submit" className="btn">
            {edit ? 'edit' : 'submit'} <MdSend className="btn-icon" />   
        </button>
    </form>
  );
};

export default ExpenseForm;
