import { Route, Routes } from "react-router-dom";
import Template02 from "./Templates/Template02";
import Template03 from "./Templates/Template03";
import Template04 from "./Templates/Template04";
import Home from "./Components/Home";
import Template01 from "./Templates/Template01";

const App = () => {
  return (
    <article className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template01" element={<Template01 />} />
        <Route path="/template02" element={<Template02 />} />
        <Route path="/template03" element={<Template03 />} />
        <Route path="/template04" element={<Template04 />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </article>
  );
};

export default App;
