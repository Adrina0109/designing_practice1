import React from "react";

const Usercard = () => {

  const profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMMwm--OPcl6aO5g48gYNWn8ovtDH7lcRtDLTxGtXd5mMGiyELokTVetY3wjQFWDSgPw&usqp=CAU"; 
  const name = "Adrina";
  const email = "adrina123@gmail.com";
  const phone = "9003261010";
  const address = "Christ University, Kengeri.";

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img src={profilePhoto} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <div className="flex p-4">

        

        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{phone}</p>
          <p className="text-sm text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
