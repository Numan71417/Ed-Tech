import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";


import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI";
import IconBtn from "../../../common/IconBtn";

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const handleupload = async (e) => {
    setLoad(true);
    const selectedFile = e.target.files[0];
   
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          setImageFile(downloadURL)
          setPreviewSource(downloadURL)
          handleFileUpload(downloadURL)
          setLoad(false)
        });
      });
    } else {
      console.log("Please select image to upload");
      setLoad(false);
    }
    setLoad(false)
  };

  const handleFileUpload = (profilePic) => {
    try {
      console.log("uploading...");
      setLoad(true);

      dispatch(updateDisplayPicture(token, profilePic,user._id)).then(() => {
        setLoad(false);
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };


  // const fileInputRef = useRef(null);

  // const handleClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   // console.log(file)
  //   if (file) {
  //     setImageFile(file);
  //     previewFile(file);
  //   }
  // };

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };

  // const handleFileUpload = () => {
  //   try {
  //     console.log("uploading...");
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("displayPicture", imageFile);
  //     // console.log("formdata", formData)
  //     dispatch(updateDisplayPicture(token, formData)).then(() => {
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     console.log("ERROR MESSAGE - ", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (imageFile) {
  //     previewFile(imageFile);
  //   }
  // }, [imageFile]);
  return (
    <>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex items-center gap-x-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-2">
            <p>Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <label htmlFor="img">
                {/* <button disabled={load} className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"> Select</button> */}
                
                <IconBtn
                  text={load ? "Uploading..." : "Upload"}
                >
                  {!load && (
                    <FiUpload className="text-lg text-richblack-900" />
                  )}
                </IconBtn>
                <input
                  type="file"
                  id="img"
                  onChange={handleupload}
                  // className="hidden"
                  accept="image/png, image/gif, image/jpeg"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
