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
      return { imgURL: data.data.url, success: true };
    } else {
      return { error: data.error, success: false };
    }
  } catch (error) {
    return { error: error, success: false };
  }
};

export default uploadImageToImgBB;
