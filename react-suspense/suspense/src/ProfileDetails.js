import React from 'react';

export default function ProfileDetails(props) {
    const { resource } = props;

    const user = resource.user.read();

    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <li>Username: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>City: {user.address.city}</li>
            </ul>
        </div>
    );
}
