import { useState } from "react";
let id = 5;

function FriendAddForm({ friend, onAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImage("https://i.pravatar.cc/48");
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      id: id++,
      name,
      image,
      balance: 0,
    };
    onAdd([...friend, newFriend]);

    setName("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <p>👭 Friend Name</p>
      <input type="text" value={name} onChange={handleName} />
      <p>🌆 Image Url</p>
      <input type="text" value={image} onChange={handleImage} />
      <button className="button">Add</button>
    </form>
  );
}

export default FriendAddForm;
