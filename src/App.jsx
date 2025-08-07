import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import pages
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,     // thời gian animation: 800ms
      offset: 100,       // khoảng cách cuộn để kích hoạt animation
      once: true         // chỉ chạy 1 lần khi scroll
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
