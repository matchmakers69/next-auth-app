"use server";
import { v2 as cloudinary } from "cloudinary";

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const handleUploadImageToCloudinary = async (base64Image: string) => {
  try {
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "icons",
      transformation: [{ width: 300, height: 300, crop: "limit" }],
    });
    return result.secure_url;
  } catch (err) {
    console.log(err);
    return null;
  }
};