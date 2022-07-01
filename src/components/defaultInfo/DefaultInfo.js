import React from 'react';
import './defaultInfo.scss';

const DefaultInfo = () => {
    return (
        <div className="defaultSelection">
            <h2 className="defaultSelection__title">Please select a character to see information</h2>
            <div className="defaultSelection__wrap">
                <div className="defaultSelection__placeholder round"></div>
                <div className="defaultSelection__placeholder"></div>
                <div className="defaultSelection__placeholder"></div>
                <div className="defaultSelection__placeholder"></div>
                <div className="defaultSelection__placeholder"></div>
            </div>
        </div>
    );
};

export default DefaultInfo;