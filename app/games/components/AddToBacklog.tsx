"use client";

import React from "react";
import { addToBacklog } from "../actions";

interface Props {
  id: number;
}

const AddToBacklog = ({ id }: Props) => {
  return (
    <button className="btn btn-ghost btn-xs" onClick={() => addToBacklog(id)}>
      +
    </button>
  );
};

export default AddToBacklog;
