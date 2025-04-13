import Link from "next/link";
import React from "react";

export default function ServicesPage() {
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

    return (


        <div>
            <p className="text-center mb-6">Services Page.</p>
            <h3>Clicked to see details</h3>
            <div className="grid grid-cols-3 gap-4">
                {
                    data.map((service) => (
                        <div className="border border-amber-200 w-48" key={service._id}>
                            <Link className="" href={`/services/${service._id}`}>
                                <img src={service.service_image} alt={service.service_name} />
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div >

    );
}
