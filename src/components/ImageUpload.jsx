import React from 'react'
import { FaDownload } from "react-icons/fa6";



const ImageUpload = (props) => {
  const showImageHandler =(e)=>{
  const file = e.target.files[0];
  if(file){
  props.UploadImageHandler(file)
  }
    

  }
  return (
    <div className='flex gap-6 '>
      <div className="bg-white shadow-lg  rounded-2xl p-2 w-full max-w-2xl relative">
        <label
          htmlFor="fileInput"
          className="block w-full cursor-pointer text-center hover:border-blue-500 p-6 border-2 border-dashed transition-all
       border-gray-300 rounded-lg"
        >
          <input
            type="file"
            id="fileInput"
            onChange={showImageHandler}
            className="hidden"
          />
          <span className="text-lg font-medium text-gray-600">
            Click and drag to upload your image
          </span>
        </label>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center pt-8">
            {props.enhanced ? (
              <div>
                <a
                  href={props.enhanced}
                  className="cursor-pointer "
                  download="enhanced-image.jpg"
                >
                  <FaDownload
                    size={50}
                    className="animate-bounce"
                    color="green"
                  />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload