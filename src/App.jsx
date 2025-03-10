import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
function App () {
  return (
    <div className="flex flex-col min-h-screen">
      
    <div className="flex-grow">
      <Header />
      <AppRoutes />
    </div>
    <Footer />
  </div>
  );
};

export default App;

