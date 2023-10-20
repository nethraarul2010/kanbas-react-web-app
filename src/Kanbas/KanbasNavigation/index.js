import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import "./style.css";

function KanbasNavigation() {
  const links = [
    { text: "Account", icon: <Icon.PersonCircle className="account-icon"/> },
    { text: "Dashboard", icon:  <Icon.Speedometer2/> },
    { text: "Courses", icon: <Icon.JournalBookmark/> },
    { text: "Calendar", icon:  <Icon.Calendar/> },
    {text:"Inbox",icon:<Icon.InboxFill/>},
    {text:"History",icon:<Icon.ClockHistory/>},
    {text:"Studio",icon:<Icon.PlayCircleFill/> },
    {text:"Help",icon:<Icon.InfoCircleFill/>}
  ];

  const { pathname } = useLocation();

  return (
    <div className="d-flex list-group custom-sidebar" style={{ width: 110 }}>
      <img src='/NU.png' alt="NU Logo" />
      {links.map((link, index) => (
        <Link
        key={index}
        to={`/Kanbas/${link.text}`}
        className={`list-group-item custom-list-item ${
          pathname.includes(link.text) && "active"
        }`}
      >
          {link.icon} {link.text}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
