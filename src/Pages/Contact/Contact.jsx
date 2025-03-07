import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF6E00] mb-8">
                Get in Touch
            </h2>

            {/* Contact Info Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left - Contact Info */}
                <div className="space-y-6">
                    <p className="text-gray-600 text-lg">
                        Need assistance with booking a car or have inquiries? Our team is
                        here to help you 24/7. Contact us through any of the following
                        channels:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-[#FF6E00] text-xl" />
                            <span className="text-lg font-medium">+123 456 7890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-[#FF6E00] text-xl" />
                            <span className="text-lg font-medium">support@pxrental.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#FF6E00] text-xl" />
                            <span className="text-lg font-medium">
                                123 Car Street, Bangladesh
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right - Google Map Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Google Map"
                        className="w-full h-[300px] rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.2182662306!2d91.65422317734475!3d22.3576296099941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong!5e0!3m2!1sen!2sbd!4v1741364130942!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Images Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="relative group overflow-hidden">
                    <img
                        src="./png4.webp"
                        alt="Quality Service"
                        className="w-full h-60 object-cover rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
                    />
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }} className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white text-lg font-semibold">Quality Service</p>
                    </div>
                </div>

                <div className="relative group overflow-hidden">
                    <img
                        src="./png5.webp"
                        alt="Wide Car Selection"
                        className="w-full h-60 object-cover rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
                    />
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white text-lg font-semibold">Wide Car Selection</p>
                    </div>
                </div>

                <div className="relative group overflow-hidden">
                    <img
                        src="./png2.webp"
                        alt="24/7 Customer Support"
                        className="w-full h-60 object-cover rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
                    />
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white text-lg font-semibold">
                            24/7 Customer Support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
