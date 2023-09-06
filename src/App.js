import FriendList from "./components/friend-list/FriendList";
import "./App.css";
import FormSplitBill from "./components/form-split-bill/FormSplitBill";
import { useState } from "react";

import { initialFriends } from "./data";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [friend, setFriend] = useState(initialFriends);
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
      <div>{selectedItem && <FormSplitBill selectedItem={selectedItem} />}</div>
    </div>
  );
}

export default App;
