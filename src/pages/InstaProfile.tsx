import React from 'react';

const InstaProfile = () => {
  return (
    <div className='bg-black h-full w-full text-white'>

      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="flex items-center space-x-8">
          {/* Profile Image */}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WQX9vUSKiGSjdROEbvbNkECV9otuDy1NYA&s"
              alt="Profile Picture"
              className="rounded-full w-32 h-32 border border-gray-300"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold">noor_.dhi110n</h2>
              <button className="px-4 py-1 border border-gray-300 rounded text-sm font-semibold">Follow</button>
            </div>
            <div className="mt-4 flex space-x-8">
              <div><span className="font-semibold">108</span> posts</div>
              <div><span className="font-semibold ">2,345</span> followers</div>
              <div><span className="font-semibold ">250</span> following</div>
            </div>
            <div className="mt-4">
              <p className="font-semibold">||NOOR DHILLON ||</p>
              <p>||ਨਾ ਕੋ ਮੂਰਖੁ ਨਾ ਕੋ ਸਿਆਣਾ ।। ਵਰਤੈ ਸਭ ਕਿਛੁ ਤੇਰਾ ਭਾਣਾ।। </p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Grid Section */}
      <div className="max-w-4xl mx-auto p-4 mt-6">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {/* Example Post Images */}
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEdSMJkZtnn2RSJlxvrZUr4XUiZRpAZLjeA&s" alt="Post 1" className="w-full h-full object-cover" /></div>
          <div><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCpSMSdUIC3Vrn8C89ZexVZkHaiIY0z3ZzQ&s" alt="Post 2" className="w-full h-full object-cover" /></div>
          <div><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmGvggrtj1vQJOoduKlZSv8yMYaeLF4H9vQ&s" alt="Post 3" className="w-full h-full object-cover" /></div>
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eWV48u3czGC8i1Bz3dONOs0tFVEwxSzUWQ&s" alt="Post 4" className="w-full h-full object-cover" /></div>
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT5GK7oHd912PP_hs49Bu5atemFM67hAetg&s" alt="Post 5" className="w-full h-full object-cover" /></div>
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrCMacr4hs4NvNqT-7lHm2vP1oqP6RJyIVA&s" alt="Post 6" className="w-full h-full object-cover" /></div>
        </div>
      </div>
    </div>
  );
};

export default InstaProfile;
