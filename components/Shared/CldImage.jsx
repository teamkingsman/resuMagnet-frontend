"use client";
 
import { CldImage as CldImageDefault, CldImageProps }  from 'next-cloudinary';
 
const CldImage = (props) => {
  return <CldImageDefault {...props} />
}
 
export default CldImage;