
import { useState, useEffect } from "react";
import "./Account.css";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../profile/profile";

const Account = () => {

  const [user, setUser] = useState(() => {

    return JSON.parse(localStorage.getItem("user")) || null;
})

  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("checkoutForm"));
   
    if (savedData) {
      setUserData(savedData);
    
      setEditData(savedData);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const handlelogout = () => {
     
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear();
      setUser(null);
      alert("Logged out successfully");
      navigate("/login")
    }
    
  };

  return (
    <div className="profile-container">
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={50} className="user-icon" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">


          <ul>

            <li className="profile-title"><Profile/></li>
          <Link to="/history" style={{textDecoration:"none", fontSize:"20px",color:"black" ,marginTop:"10px"}}>  <li className="logout-button" >History</li></Link>
          {user ?(
          <li onClick={handlelogout} className="logout">LogOut</li>
          ) :(
          <li onClick={ ()=> navigate("/login")} className="logout">Login</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
