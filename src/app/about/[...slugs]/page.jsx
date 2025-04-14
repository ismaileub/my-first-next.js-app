import React from 'react';

const AboutSlugsPage = async ({ params }) => {
    const p = await params;
    console.log(p);
    return (
        <div>
            <h2>about slugs page</h2>
        </div>
    );
};

export default AboutSlugsPage;