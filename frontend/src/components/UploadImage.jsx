import React, { useState } from "react";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    const res = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Upload Response:", data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Geo Camera Image</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
    </div>
  );
}
