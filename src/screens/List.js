import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { profileList } from "../mockData/list";
import ProfileCard from "../components/ProfileCard";
import "./styles/List.css";
import ProfileManIcon from "../assets/images/man.svg";
import ProfileWomanIcon from "../assets/images/woman.svg";

const options = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["first_name"],
};

export default function List() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [list, setList] = useState(profileList);
  const [filteredList, setFilteredList] = useState(profileList);
  const [selectedGender, setSelectedGender] = useState(undefined);

  const fuse = new Fuse(profileList, options);

  //any time that input changes we want our list will be updated --> a useEffect with the trigger of searcInputValue
  useEffect(() => {
    // let newFilteredList = list.filter((item) =>
    //   item.first_name.toLowerCase().includes(searchInputValue.toLowerCase())
    // );

    let newFilteredList =
      searchInputValue.length > 2 //because we don't want to send too many requests to the server
        ? fuse.search(searchInputValue).map((data) => data.item)
        : list;

    // console.log("newFilteredList", newFilteredList);

    if (selectedGender) {
      newFilteredList = newFilteredList.filter(
        (item) => item.gender === selectedGender
      );
    }

    setFilteredList([...newFilteredList]);
  }, [searchInputValue, selectedGender]);

  return (
    <>
      <div className="list__filterbox">
        <div className="list__filterbox__searchBox">
          <label>First Name</label>
          <input
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
            placeholder="Search in first names..."
          />
        </div>
        <div className="list__filterbox__genderselector">
          <img
            src={ProfileManIcon}
            alt="man"
            onClick={() => setSelectedGender("Male")}
            className={selectedGender === "Male" ? "img--selected" : ""}
          />
          <img
            src={ProfileWomanIcon}
            alt="woman"
            onClick={() => setSelectedGender("Female")}
            className={selectedGender === "Female" ? "img--selected" : ""}
          />
          <div onClick={() => setSelectedGender(undefined)}>X</div>
        </div>
      </div>
      <div className="list">
        {filteredList.map((item) => (
          <ProfileCard data={item} />
        ))}
      </div>
    </>
  );
}

// profileList.map(item => {
//    return (<div>)
// })

// profileList.map(item => <div></div>)
