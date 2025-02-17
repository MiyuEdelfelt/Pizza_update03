import React, { useEffect, useState } from 'react';
import { useUser } from '../UserContext';
import userImage from '../assets/user.png';

const Profile = () => {
  const { email, fetchProfile, logout } = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };
    getProfile();
  }, [fetchProfile]);

  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "100vh", paddingTop: "5rem", backgroundColor: "#f8f9fa" }}>
      <div className="card shadow-lg" style={{ width: "25rem", borderRadius: "15px", padding: "1.5rem", height: "fit-content" }}>
        <div className="card-body text-center">
          <img src={userImage} alt="User Avatar" className="rounded-circle mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          <h4 className="card-title mb-2">{profile?.name || "Usuario"}</h4>
          <p className="card-text text-muted">{email}</p>
          <button className="btn btn-danger btn-sm w-100 mt-3" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;