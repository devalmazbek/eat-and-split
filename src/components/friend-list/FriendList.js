import { useState } from "react";

import FriendListItem from "../friend-list-item/FriendListItem";
import FriendAddForm from "../friend-add-form/FriendAddForm";

function FriendList({ onSelect, selectedItem, friend, setFriend }) {
  const [isVisibleForm, setIsVisibibleForm] = useState(false);

  const handleShowFriendAddForm = () => {
    setIsVisibibleForm(!isVisibleForm);
  };
  return (
    <>
      <ul>
        {friend.map((item) => {
          return (
            <FriendListItem
              item={item}
              key={item.id}
              onSelect={onSelect}
              selectedItem={selectedItem}
            />
          );
        })}
      </ul>
      {isVisibleForm && <FriendAddForm friend={friend} onAdd={setFriend} />}
      {isVisibleForm ? (
        <button className="button" onClick={handleShowFriendAddForm}>
          close
        </button>
      ) : (
        <button className="button" onClick={handleShowFriendAddForm}>
          Add new friend
        </button>
      )}
    </>
  );
}

export default FriendList;
