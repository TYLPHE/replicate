import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/replicate/' element={ <Homepage /> } /> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
