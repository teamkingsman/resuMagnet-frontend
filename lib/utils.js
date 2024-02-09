import axios from "axios";
// import cloudinary from 'cloudinary';
import cloudinary from "cloudinary";

const persetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;
const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
export const photoLink = async (photo) => {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", `${persetName}`);
  const uploadResponse = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
    formData
  );
  const photoURL = uploadResponse.data.secure_url;
  console.log(photoURL);
  return photoURL;
};

export function getCroppedImageUrlFromUrl(url, width, height, x, y) {
  const urlParts = url?.split("/");

  // Find the position of 'upload' in the array
  const uploadIndex = urlParts?.indexOf("upload");

  // Extract the public ID based on the position of 'upload'
  const publicIdWithExtension =
    uploadIndex !== -1 ? urlParts.slice(uploadIndex + 2).join("/") : null;

  // Remove the file extension
  const publicIdWithoutExtension = publicIdWithExtension
    ?.split(".")
    .slice(0, -1)
    .join(".");

  // Sanitize the public ID by replacing invalid characters within each part
  const sanitizedPublicId = publicIdWithoutExtension?.replace(
    /[^a-zA-Z0-9_./-]/g,
    "_"
  );

  if (!sanitizedPublicId) {
    console.error("Invalid Cloudinary URL. Public ID not found.");
    return null;
  }

  const cloudName = cloudinaryName;

  const croppedImageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_crop,h_${height},w_${width},x_${x},y_${y}/${sanitizedPublicId}.jpg`;

  return croppedImageUrl;
}

// Example usage:
// const cloudinaryUrl = 'https://res.cloudinary.com/your_cloud_name/image/upload/c_crop,h_200,w_300,x_10,y_20/your_image_public_id.jpg';
// const croppedUrlFromUrl = getCroppedImageUrlFromUrl(cloudinaryUrl, 300, 200, 10, 20);
// console.log(croppedUrlFromUrl);

export async function deleteImageFromUrl(url) {
  console.log(url);

  try {
    const urlParts = url?.split("/");

    // Find the position of 'upload' in the array
    const uploadIndex = urlParts.indexOf("upload");

    // Extract the public ID based on the position of 'upload'
    const publicIdWithExtension =
      uploadIndex !== -1 ? urlParts.slice(uploadIndex + 2).join("/") : null;

    // Remove the file extension
    const publicIdWithoutExtension = publicIdWithExtension
      ?.split(".")
      .slice(0, -1)
      .join(".");

    // Sanitize the public ID by replacing invalid characters within each part
    const sanitizedPublicId = publicIdWithoutExtension?.replace(
      /[^a-zA-Z0-9_./-]/g,
      "_"
    );

    if (!sanitizedPublicId) {
      console.error("Invalid Cloudinary URL. Public ID not found.");
      return null;
    }
    cloudinary.v2.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    });
    // Make sure to configure Cloudinary with your credentials before using the uploader

    // Use Cloudinary API to delete the image by public ID
    const result = await cloudinary.uploader.destroy(sanitizedPublicId);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const capitalize = (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();