import React, { useEffect } from "react";
import "./profile.scss";
import { AuthMe } from "../../../store/actions/auth";
import { useDispatch } from "react-redux";

function Profile() {
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthMe(false));
  });

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
            value={localStorage.getItem("user_email")}
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
          <button
            style={{ backgroundColor: "#1a4c31", color: "#f1d18a" }}
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
        <div className="submit">
          <button>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
