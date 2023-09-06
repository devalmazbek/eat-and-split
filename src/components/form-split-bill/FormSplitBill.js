function FormSplitBill({ selectedItem }) {
  return (
    <form className="form-split-bill">
      <h2>Split a with {selectedItem.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>👩‍💼 Your expense</label>
      <input type="text" />
      <label>👭 Clark expense</label>
      <input type="text" />
      <label>😏 Who is paing the bill?</label>
      <select>
        <option value="user">You</option>
        <option value={selectedItem.name}>{selectedItem.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default FormSplitBill;
