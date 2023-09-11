function FriendListItem({ item, onSelect, selectedItem }) {
  const handleSelect = () => {
    onSelect((currentItem) => (currentItem?.id === item.id ? null : item));
  };

  const isSelected = item?.id === selectedItem?.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={item.image} alt="friend" />
      <h3>{item.name}</h3>
      {item.balance < 0 && (
        <p className="red">You owe {(item.name, item.balance)}</p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you {Math.abs(item.balance)}
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even</p>}
      <button className="button" onClick={handleSelect}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default FriendListItem;
