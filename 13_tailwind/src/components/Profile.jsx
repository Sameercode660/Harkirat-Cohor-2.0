import React from "react";

const Profile = ({ name, location, followers, likes, photos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
      <img
        className="w-20 h-20 rounded-full mx-auto"
        src="https://lh3.googleusercontent.com/pw/AM9B7nEJEu49_uczIl-iJbFNWCvu9uA8t-6pJMeec--SLUsgrJG_CHFfiH-4LfVsjQZw_mPjt2MFj-H3l1qc3yVuVYx5PgQHdBvuY7P3y KsA=s160"
        alt="Profile"
      />
      <h1 className="text-xl font-bold text-gray-700 mt-2">{name}</h1>
      <p className="text-gray-500 text-sm">{location}</p>
      <div className="flex mt-4 space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-gray-700">{followers}</span>
          <p className="text-gray-500 text-sm">Followers</p>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-gray-700">{likes}</span>
          <p className="text-gray-500 text-sm">Likes</p>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-gray-700">{photos}</span>
          <p className="text-gray-500 text-sm">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
