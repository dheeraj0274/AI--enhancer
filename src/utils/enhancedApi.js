const API_KEY =  import.meta.env.VITE_API_KEY;
const Base_Url = "https://techhk.aoscdn.com/"
import axios from "axios";



const MAXIMUM_RETRIES=20
export const enhancedImageAPI = async(file)=>{
   //Code to call api
   console.log(API_KEY);

   try{
      const taskId = await uploadImage(file);
      console.log("Image Uploaded Successfully , task id:" , taskId);
      
     
     const enhancedImageData = await PollForEnhancedImage(taskId)
      
      
     console.log("enhanced imag data" , enhancedImageData);
     console.log(enhancedImageData);
     return enhancedImageData;
     
     
    
   }catch(error){
    console.log("error",error.message);  
    
   }

  
}
const uploadImage = async(file)=>{
   //code to upload Image
  // *api/tasks/visual/scale--post
  const formData = new FormData();
  formData.append('image_file', file)
  const data = await  axios.post(`${Base_Url}/api/tasks/visual/scale` , formData , {
     headers:{
        "Content-Type":'multipart/form-data',
        "X-API-KEY":API_KEY
     },
  })
  console.log(data);
  
  return(data.data.data.task_id);
  
//   if(!data?.data?.task_id){
//    throw new Error('failed to uploaed image! Task Id not found.')
//   }
//   return data.data.task_id;
  
//   return data.taskId   

}
  const fetchEnhancedImage = async(taskId)=>{
   //fetch enhanced iamge                          
  // api/task/visual/scale/{task_id}--get         
  const {data} = await  axios.get(`${Base_Url}/api/tasks/visual/scale/${taskId}` , {
   headers:{
      
      "X-API-KEY":API_KEY
   }
  
   
    }) ;
      if(!data?.data){
   throw new Error("Failed to fetch enhanced image ! image not found");
   
     }
     return data.data;

  }  
 const PollForEnhancedImage = async(taskId, retries=0)=>{
   const result = await fetchEnhancedImage(taskId);
   if (result.state === 4){
      console.log(`Procesing...(${retries}/${MAXIMUM_RETRIES}`);
      if(retries>=MAXIMUM_RETRIES){
         throw new Error("MAX retries rached");
         
      }
      await new Promise((resolve)=> setTimeout(resolve , 2000));
      return PollForEnhancedImage(taskId , retries + 1);
      
   }
   console.log('enhanced image url '  ,result);
   return result ;
   

 }