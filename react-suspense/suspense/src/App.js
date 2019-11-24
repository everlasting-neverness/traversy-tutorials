import React, { Suspense } from 'react';
import ProfileDetails from './ProfileDetails';
import ProfilePosts from './ProfilePosts';
import Spinner from './Spinner';
import { fetchData } from './Api';

const resource = fetchData();

function App() {
    return (
        <div className='App'>
            <Suspense fallback={<Spinner />}>
                <ProfileDetails resource={resource} />
            </Suspense>
            <Suspense fallback={<h1>Loading Posts...</h1>}>
                <ProfilePosts resource={resource} />
            </Suspense>
        </div>
    );
}

export default App;
