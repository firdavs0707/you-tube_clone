import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import './main.css';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo"/>
    </Link>
    <SearchBar />
    <div>
      <img className="img" src="https://e7.pngegg.com/pngimages/529/832/png-clipart-computer-icons-avatar-user-profile-avatar-blue-heroes.png" alt="profile-img"/>
    </div>
  </Stack>
);

export default Navbar;
