import React from 'react';

export default function ProfilePosts(props) {
    const { resource } = props;

    const posts = resource.posts.read();

    return (
        <div>
            <ul>
                <li>Latest Posts</li>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
