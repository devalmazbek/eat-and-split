function FriendListItem({ item, onSelect, selectedItem }) {
  const handleSelect = () => {
    onSelect(item);
  };
  return (
    <li>
      <img src={item.image} alt="friend" />
      <h3>{item.name}</h3>
      {item.balance < 0 && (
        <p className="red">You owe {(item.name, item.balance)}</p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you {item.balance}
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even</p>}
      <button className="button" onClick={handleSelect}>
        Select
      </button>
    </li>
  );
}

export default FriendListItem;
