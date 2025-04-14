import React from 'react'
import Loading from './Loading'


const ImagePreview = (props) => {
 
  
  return (
    <div className="w-full h-fit flex justify-center items-center flex-col">
      <div className="mt-8 grid  grid-cols-1 md:grid-cols-2 gap-6 w-full h-fit max-w-4xl">
        {/* Original image */}

        <div className="bg-white shadow-lg rounded-xl h-full overflow-hidden ">
          <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
            Original Image
          </h2>
          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt=""
              className="w-full h-fit object-contain p-1 "
            />
          ) : (
            <div className="flex items-center justify-center h-fit bg-gray-200 ">
              No Image Selected
            </div>
          )}
        </div>

        <div className=" shadow-lg rounded-xl h-full  overflow-hidden  ">
          <h2 className="text-xl font-semibold text-center bg-blue-600 text-white py-2">
            Enhanced Image
          </h2>
          {props.enhanced && !props.loading && (
            <img
              src={props.enhanced}
              alt=""
              className="w-full h-fit object-contain p-1"
            />
          )}

          {props.loading ? (
            <Loading />
          ) : !props.enhanced ?  (
            <div className="flex items-center justify-center h-fit bg-gray-200 ">
              No Enhanced Image
            </div> 
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ImagePreview