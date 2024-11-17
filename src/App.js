import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeSet(){
    setDarkMode(!darkMode);
    document.getElementsByTagName("body")[0].className = darkMode ? "darkMode" : "";
  }

  const DarkModeToggle = () => {
    return(
      <button darkMode={darkMode} onClick={() => {darkModeSet()}}>
        Przełącz Tryb
      </button>
    );
  }

  return (
    <div className="App">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget finibus nibh, id maximus dolor. 
        Praesent nec lacus rhoncus, accumsan augue at, aliquam nibh. Maecenas rutrum metus scelerisque turpis facilisis efficitur. 
        Aenean consectetur urna finibus, hendrerit neque et, pulvinar quam. Aenean rutrum massa neque, posuere aliquam mauris tincidunt sit amet. 
        Vivamus nec libero odio. Ut in dictum felis. Donec rutrum interdum porttitor. Maecenas dignissim eros in justo porttitor aliquet. 
        Duis blandit, odio eget vulputate convallis, nibh magna mattis tellus, id consectetur lectus urna sit amet nibh.</p>
      <DarkModeToggle />
      
    </div>
  );
}

export default App;
