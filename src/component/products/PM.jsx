import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PM() {
  return (
    <>
      <Link to='/ProductManagement/add'>add</Link>
      <Link to='/ProductManagement/edit/1'>p</Link>
      PM
    </>
  );
}
