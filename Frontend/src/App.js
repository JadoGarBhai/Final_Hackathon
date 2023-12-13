import Routing from "./Route/Routing";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../src/Config/toast";

function App() {
  return (
    <>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
