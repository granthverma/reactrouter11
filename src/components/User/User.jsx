import React from "react";
import { useParams } from "react-router-dom";
// params

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-white text-3xl p-4"> User:{userid}</div>
  );
}

export default User;
