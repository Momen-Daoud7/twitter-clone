import React from "react";
import SidebarOption from "./sidebarOption/SidebarOption";
import {
  Home,
  Twitter,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter />
      <SidebarOption text="Home" Icon={Home} />
      <SidebarOption text="Search" Icon={Search} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />
    </div>
  );
};

export default Sidebar;
