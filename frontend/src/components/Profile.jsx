import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';

const Profile = () => {
    const { getProfile, logout, email } = useUser();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getProfile();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    return (
        <div>
            <p>Email: {profile ? profile.email : email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;
