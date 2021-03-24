import React from "react";
import "./styles/ProfileCard.css";

export default function ProfileCard({ data }) {
  return <div className='profilecard'>{data.first_name}</div>;
}
