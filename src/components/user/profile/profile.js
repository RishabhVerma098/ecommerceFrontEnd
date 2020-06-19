import React from "react";
import "./profile.scss";
function Profile() {
  return (
    <div className="profile">
      <div className="content">
        <div className="emailBox">
          <div className="email">
            <p className="label">Email Address</p>
            <p className="edit">Edit ?</p>
          </div>
          <input
            type="email"
            value={"vermarisahbh0987@gmail.com"}
            disabled={true}
          />
        </div>
        <div className="passwordBox">
          <div className="password">
            <p className="pass">Your password</p>
            <p className="lost">Lost password ?</p>
          </div>
          <input type="password" value="heelo" disabled={true} />
        </div>
        <div className="submit">
          <button>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;