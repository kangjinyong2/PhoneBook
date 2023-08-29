import React, { useState, useEffect } from "react";
import RightInput from "./RightInput";
import { Row, Col } from "react-bootstrap";
import RightItem from "./RightItem";
import { useSelector } from "react-redux";
const Boxright = () => {
  const { contactList, keyword } = useSelector((state) => state);

  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);
  return (
    <div>
      <RightInput />
      <br />
      num:{filteredList.length}
      {filteredList.map((item) => (
        <RightItem item={item} />
      ))}
    </div>
  );
};

export default Boxright;
