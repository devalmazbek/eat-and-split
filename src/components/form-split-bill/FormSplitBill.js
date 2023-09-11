import { useState } from "react";

function FormSplitBill({ selectedItem, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [user, setUser] = useState("user");

  const paidByFriend = bill - paidByUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(user === "user" ? paidByFriend : -paidByFriend);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a with {selectedItem.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>👩‍💼 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />
      <label>👭 Clark expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label>😏 Who is paing the bill?</label>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option value="user">You</option>
        <option value={selectedItem.name}>{selectedItem.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default FormSplitBill;
