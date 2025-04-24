import React, { useRef, useState } from "react";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const ProfileUpdateModal = ({
  handleModal,
  setProfileName,
  setProfilePhoto,
}) => {
  const { user, updateUser } = useAuth();
  const [photourl, setphotourl] = useState(user?.photoURL);

  const nameRef = useRef("");

  const handleUpdate = async () => {
    const name = nameRef.current.value;

    // console.log(name,photourl);
    setProfileName(name);
    setProfilePhoto(photourl);

    try {
      await updateUser(name, photourl);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    } finally {
      handleModal();
      // window.location.reload();
    }
  };

  return (
    <div className="absolute px-1 top-0 rounded-md bg-white    w-full sm:w-4/5  mx-auto z-50">
      <div className="py-8">
        <img
          referrerPolicy="no-referrer"
          className="w-40 h-28 mx-auto rounded-md"
          src={user?.photoURL}
          alt=""
        />
        <p className="text-center text-xl mt-4 font-semibold">
          User Current Photo
        </p>
        <div className="sm:px-16">
          <p className=" font-semibold my-3">Photo url:</p>
          <input
            onChange={(e) => setphotourl(e.target.value)}
            type="text"
            placeholder="provide your new photo url"
            className="border border-green-500 input w-full md:w-3/4"
          />
          <p className=" font-semibold my-3">User Name:</p>
          <input
            ref={nameRef}
            type="text"
            defaultValue={user?.displayName}
            className="border border-green-500 input w-full md:w-3/4"
          />
        </div>

        <button
          className="text-center mx-auto justify-center flex items-center btn mt-10 bg-green-500 text-white"
          onClick={handleUpdate}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
