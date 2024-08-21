import { useState } from "react";

import "./App.css";

import AuthPage from "./Authpage.jsx";
import ChatsPage from "./Chatspage.jsx";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;