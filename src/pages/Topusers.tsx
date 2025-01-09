import React from 'react';

const Topusers = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div
          className="bg-cover bg-center h-40"
          style={{ backgroundImage: "url('https://via.placeholder.com/600x200')" }}
        ></div>

        {/* Profile Info */}
        <div className="flex items-center p-6 space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="User profile picture"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Web Developer</p>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="flex justify-around bg-gray-50 p-4 border-t border-b text-center">
          <div>
            <p className="text-xl font-semibold text-gray-700">250</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">1.2K</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">450</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="p-6">
          <div className="flex space-x-4 border-b pb-3 mb-6">
            <button className="text-blue-600 font-semibold">Posts</button>
            <button className="text-gray-600 hover:text-blue-600">About</button>
            <button className="text-gray-600 hover:text-blue-600">Photos</button>
            <button className="text-gray-600 hover:text-blue-600">Friends</button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Example Post Card 1 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Post"
                className="rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-700">Post Title 1</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Example Post Card 2 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Post"
                className="rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-700">Post Title 2</h3>
              <p className="text-gray-600 text-sm">Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>
            </div>

            {/* Example Post Card 3 */}
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Post"
                className="rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-700">Post Title 3</h3>
              <p className="text-gray-600 text-sm">Curabitur facilisis ornare velit non vulputat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topusers;
