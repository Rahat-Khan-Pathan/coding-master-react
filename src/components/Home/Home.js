import React from 'react';
import UseFakeData from '../../hooks/FakeData';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    const fakeData = UseFakeData();     // Getting fakedata from hooks
    return (
        <div>
            <Header></Header>
            <Courses courses={fakeData.slice(0,4)}></Courses>
        </div>
    );
};

export default Home;