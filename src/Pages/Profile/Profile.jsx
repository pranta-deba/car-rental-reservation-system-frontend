import React from "react";
import useGetContext from "../../Hooks/UseContext/useGetContext";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Profile = () => {
    const { user } = useGetContext();

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF6E00] mb-6">
                My Profile
            </h2>

            <div className="max-w-3xl mx-auto bg-transparent shadow-lg rounded-lg p-6">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={user?.photo ? user?.photo : "./user.png"}
                        alt="User Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#FF6E00] shadow-md"
                    />

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold">{user?.name}</h3>
                        <p className="text-gray-500">Role: {user?.role}</p>
                        <p className="text-sm text-gray-400">
                            Member Since: {new Date(user?.createdAt).toDateString()}
                        </p>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-[#FF6E00] text-xl" />
                        <span className="text-lg">{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-[#FF6E00] text-xl" />
                        <span className="text-lg">{user?.phone ||"unknown"}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-[#FF6E00] text-xl" />
                        <span className="text-lg">{user?.address||"unknown"}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaCalendarAlt className="text-[#FF6E00] text-xl" />
                        <span className="text-lg">
                            Last Updated: {new Date(user?.updatedAt).toDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
