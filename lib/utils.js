import axios from "axios";
const persetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
export const photoLink = async (photo) => {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", `${persetName}`);
    const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`, formData)
    const photoURL = uploadResponse.data.secure_url;
    return photoURL;
}