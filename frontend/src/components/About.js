
import React from 'react';

const About = () => {
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            textAlign: 'center',
        },
        developerInfo: {
            marginTop: '20px',
            background: '#f9f9f9',
            padding: '15px',
            borderRadius: '5px',
        },
        heading: {
            marginTop: '30px',
        },
        link: {
            color: '#007BFF',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <h1>About This App</h1>
            <p>
                Welcome to the Contact Management App! This application allows you to easily manage your contacts,
                including adding, editing, and organizing them.
            </p>
            <h3 style={styles.heading}>Developer Information</h3>
            <div style={styles.developerInfo}>
                <h5>Parth Vadaviya</h5>
                <p>
                    I am a 3rd semester B.Tech student pursuing Computer Science Engineering (CSE). 
                    This project is part of my Web Technology course, where I aim to create a user-friendly contact management application.
                </p>
            </div>
        </div>
    );
};

export default About;
