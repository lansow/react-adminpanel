import Dashboard from "@/component/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

export default function router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/pepole' element={<List />} />
                <Route path='/pepole/add' element={<Add />} />
                <Route path='/pepole/:id' element={<Detail />} />
                <Route path='/' />
                <Route path='/' /> */}
      </Routes>
    </>
  );
}
