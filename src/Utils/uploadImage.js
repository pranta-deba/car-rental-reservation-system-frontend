const uploadImageToImgBB = async (file) => {
  const apiKey = import.meta.env.VITE_IMG_API_KEY;
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (data.success) {
      return data.data.url;
    } else {
      console.error("Upload failed:", data.error);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default uploadImageToImgBB;
