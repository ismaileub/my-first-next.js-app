import React from 'react';

const ServicesDetailsPage = ({ params }) => {
    const data = [
        {
            _id: "60d21b4667d0d8992e610c91",
            service_name: "GreenSpark",
            service_image: "/service_image_1.png",
            service_description: "GreenSpark provides sustainable energy consulting services.",
        },
        {
            _id: "60d21b4667d0d8992e610c92",
            service_name: "QuickFix",
            service_image: "/service_image_2.png",
            service_description: "QuickFix offers fast and reliable home appliance repair.",
        },
        {
            _id: "60d21b4667d0d8992e610c93",
            service_name: "BrightWash",
            service_image: "/service_image_3.png",
            service_description: "BrightWash delivers premium car washing and detailing services.",
        },
        {
            _id: "60d21b4667d0d8992e610c94",
            service_name: "NetGuard",
            service_image: "/service_image_4.png",
            service_description: "NetGuard provides network setup and cybersecurity solutions.",
        },
        {
            _id: "60d21b4667d0d8992e610c95",
            service_name: "FreshBite",
            service_image: "/service_image_5.png",
            service_description: "FreshBite delivers healthy meal kits to your doorstep.",
        },
        {
            _id: "60d21b4667d0d8992e610c96",
            service_name: "MediQuick",
            service_image: "/service_image_6.png",
            service_description: "MediQuick offers fast medical supplies and first-aid delivery.",
        },
    ];


    const id = params.id;
    const singleData = data.find(d => d._id == id);
    return (
        <div>
            <h2>Services Details</h2>
            <p>ID: {id}</p>
            <img
                src={singleData.service_image}
                alt={singleData.service_name}
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "15px" }}>{singleData.service_name}</h3>
            <p>{singleData.service_description}</p>
        </div>
    );
};

export default ServicesDetailsPage;