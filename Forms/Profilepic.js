import React from 'react'

export default function Profilepic() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  

    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          
          }}
        />
        <div
          style={{
            height: "200px",
            width: "150px",
            border: "1px dashed black"
            
            
            
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "150px",
              height: "200px",
              position: "absolute"
              
            }}
          />
        </div>
        Click to upload Image
      </div>
    );
  }