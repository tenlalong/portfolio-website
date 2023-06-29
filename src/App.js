import "./App.css";
import Body from "./pages/components/body/Body";
import "./pages/components/header/Introduction";
import Introduction from "./pages/components/header/Introduction";
import React, {useRef, useState} from "react";


function App() {

  const contactsRef = useRef(null);
  const [scrollToContacts, setScrollToContacts] = useState(false);

  const handleContactClick = () => {
    setScrollToContacts(true);
  };

  return (
    <div className="App">
      <Introduction handleContactClick={handleContactClick} />
      <Body scrollToContacts={scrollToContacts} contactsRef={contactsRef} />
    </div>
  );
}

export default App;
