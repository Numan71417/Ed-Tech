import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { FiUploadCloud } from "react-icons/fi"
// import { useSelector } from "react-redux"

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getStorage, ref, deleteObject } from "firebase/storage";

import "video-react/dist/video-react.css"
import { Player } from "video-react"
const loadgif = "https://tamilnaducouncil.ac.in/wp-content/uploads/2018/10/loading-gif.gif"
export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  // const { course } = useSelector((state) => state.course)
  const [selectedFile, setSelectedFile] = useState('')
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )
  const [load,setLoad] = useState(false);
  const inputRef = useRef(null)



  // const onDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0]
  //   console.log(file)
  //   if (file) {
  //     previewFile(file)
  //     // setSelectedFile(file)
  //     // handleupload(file);
  //   }
  // }

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   accept: !video
  //     ? { "image/*": [".jpeg", ".jpg", ".png"] }
  //     : { "video/*": [".mp4"] },
  //   onDrop,
  // })

  const handleupload = async (e) => {
    setLoad(true);
    const selectedFile = e.target.files[0];
   
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          setSelectedFile(downloadURL)
          setPreviewSource(downloadURL)
          setLoad(false)
        });
      });
    } else {
      console.log("Please select image to upload");
      setLoad(false);
    }
    setLoad(false)
  };

  

  const previewFile = (file) => {
    // console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  useEffect(() => {
    register(name, { required: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register])

  useEffect(() => {
    setValue(name, selectedFile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, setValue])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      <div
        className={`bg-richblack-700 flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
      >

        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!video ? (
                <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
                /> 
            ) : (
              <Player aspectRatio="16:9" playsInline src={previewSource} />
            )}
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("")
                  setSelectedFile(null)
                  setValue(name, null)
                }}
                className="mt-3 text-richblack-400 underline"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          load?(
            <img src={loadgif} alt="loading.." />
          ):(
          <label htmlFor="img">
            <div
              className="flex w-full flex-col items-center p-6"
            >
              <h2 className="text-white underline cursor-pointer " >Upload file</h2>
              <input ref={inputRef} type="file" className="hidden" id="img" onChange={handleupload} />
             
              <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
                <li>Aspect ratio 16:9</li>
                <li>Recommended size 1024x576</li>
              </ul>
            </div>
          </label>
          )
        )}
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}