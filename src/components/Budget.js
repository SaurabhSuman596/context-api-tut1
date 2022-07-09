import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const [amount, setAmount] = useState(0);
  const { budget, dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "BUDGET_ADD",
      payload: amount
    });
    setAmount(0);
  };
  return (
    <div className="alert alert-secondry ">
      <input
        className="form-control mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter your budget..."
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
      <br />
      <span>Budget : ${budget}</span>
    </div>
  );
};

export default Budget;
