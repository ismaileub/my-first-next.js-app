import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='text-center'>
            <h2>404, Not Found</h2>
            <Link href="/">Go Back to Home</Link>
        </div>
    );
};

export default NotFoundPage404;