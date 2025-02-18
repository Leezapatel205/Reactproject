import { useState, useEffect } from "react";

const profile = () => {
    const [userData, setUserData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});
   
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
    
      const toggleEdit = () => {
        setIsEditing(!isEditing);
      };
    
      const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };
    
      const saveProfile = () => {
        setUserData(editData);
        localStorage.setItem("checkoutForm", JSON.stringify(editData));
        setIsEditing(false);
      };
    
      const clearProfile = () => {
        localStorage.removeItem("checkoutForm");
        setUserData(null);
      };



  return (
    <div >
        <div className="profile-icon" onClick={toggleDropdown}>
                Profile
              </div>
        {isOpen && (
            <div className="dropdown-menu">
                
            {isEditing ? (
              <div className="edit-form">
                <input type="text" name="email" value={editData.email || ""} onChange={handleChange} placeholder="Email" />
                <input type="text" name="firstName" value={editData.firstName || ""} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="lastName" value={editData.lastName || ""} onChange={handleChange} placeholder="Last Name" />
                <input type="text" name="address" value={editData.address || ""} onChange={handleChange} placeholder="Address" />
                <input type="text" name="city" value={editData.city || ""} onChange={handleChange} placeholder="City" />
                <input type="text" name="pinCode" value={editData.pinCode || ""} onChange={handleChange} placeholder="Pin Code" />
                <input type="text" name="phone" value={editData.phone || ""} onChange={handleChange} placeholder="Phone" />
                <button className="save-button" style={{width:"100%" ,height:"40px"}} onClick={saveProfile}>Save</button>
              </div>
            ) : userData ? (
              <div className="profile-details">
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong> Name:</strong> {userData.firstName} {userData.lastName}</p>
                <p><strong>Address:</strong> {userData.address}</p>
                <p><strong>City:</strong> {userData.city}</p>
                <p><strong>Pin Code:</strong> {userData.pinCode}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
              </div>
            ): (
                <p className="no-data-text">No data available</p>
              )}
              {!isEditing && <button className="edit-button"  style={{width:"100%" ,height:"40px"}}onClick={toggleEdit}>Edit Profile</button>}
              <button className="clear-button" style={{width:"100%",height:"40px"}} onClick={clearProfile}>Clear Profile Data</button>

            </div>



        )}
      
    </div>
  








)
}

export default profile
