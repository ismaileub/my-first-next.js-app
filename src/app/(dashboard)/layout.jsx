import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12'>

            <div className='col-end-3 bg-amber-500 h-[calc(100vh-48px)]'>
                <ul>
                    <li>user list</li>
                    <li>123</li>
                    <li>456</li>
                    <li>789</li>
                </ul>
            </div>
            <div className='col-span-9 text-center'>
                {
                    children
                }
            </div>
        </div>
    );
};

export default DashboardLayout;