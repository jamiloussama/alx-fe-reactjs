function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 my-3 sm:my-4 text-center">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  