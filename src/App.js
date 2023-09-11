import FriendList from "./components/friend-list/FriendList";
import "./App.css";
import FormSplitBill from "./components/form-split-bill/FormSplitBill";
import { useState } from "react";

import { initialFriends } from "./data";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [friend, setFriend] = useState(initialFriends);

  const handleSplitBill = (value) => {
    console.log(value);
    setFriend(
      friend.map((item) => {
        if (item.id === selectedItem.id) {
          if (value) return { ...item, balance: item.balance + value };
        } else {
          return item;
        }
      })
    );
    // setFriend((friend) => {
    //   friend.map((item) => {
    //     if (item.id === selectedItem.id) {
    //       return { ...item, balance: item.balance + value };
    //     } else return item;
    //   });
    // });
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          onSelect={setSelectedItem}
          selectedItem={selectedItem}
          friend={friend}
          setFriend={setFriend}
        />
      </div>
      <div>
        {selectedItem && (
          <FormSplitBill
            selectedItem={selectedItem}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
