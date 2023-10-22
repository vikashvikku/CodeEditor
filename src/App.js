import "./App.css";
import Footer from "./components/Footer/Footer";
// import Go from "./components/Header/Go/Go";
// import Edit from "./components/Header/Edit/Edit";
// import File from "./components/Header/File/File";
import Header from "./components/Header/Header";
// import Help from "./components/Header/Help/Help";
// import Run from "./components/Header/Run/Run";
// import Terminal from "./components/Header/Terminal/Terminal";
// import View from "./components/Header/View/View";
// import Selection from "./components/Header/Selection/Selection";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <File /> */}
      {/* <Edit /> */}
      {/* <Selection /> */}
      {/* <View /> */}
      {/* <Go /> */}
      {/* <Terminal /> */}
      {/* <Run /> */}
      {/* <Help /> */}
      <Footer />
    </div>
  );
}

export default App;
