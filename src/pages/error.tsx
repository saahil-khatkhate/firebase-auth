import React from 'react';

const Error: React.FC<{ status: number }> = ({ status }) => {
    return (
        <h1>{ status == 404 ? "page not found" : "" }</h1>
    );
};

export default Error;