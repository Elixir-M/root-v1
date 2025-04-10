const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

// 1. Configure your Cloudinary credentials
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

// Path to your image folder (case-sensitive!)
const directoryPath = path.resolve(__dirname, '../public/assets/blogImages');
const uploadedUrls = [];

// Image formats you want to upload
const supportedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.avif'];

const uploadImage = async (filePath) => {
  const fileName = path.basename(filePath, path.extname(filePath)); // e.g., "101"

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: fileName, // Keep original name
      overwrite: true      // Replace if already exists
    });

    uploadedUrls.push({ fileName, url: result.secure_url });
    console.log(`✅ Uploaded ${fileName}: ${result.secure_url}`);
  } catch (err) {
    console.error(`❌ Failed to upload ${fileName}:`, err.message);
  }
};

const uploadAllImages = async () => {
  const images = fs.readdirSync(directoryPath);

  for (const img of images) {
    const ext = path.extname(img).toLowerCase();
    if (supportedExtensions.includes(ext)) {
      await uploadImage(path.join(directoryPath, img));
    }
  }

  // Output results to a JSON file in project root
  const outputPath = path.resolve(__dirname, '../cloudinary_urls1.json');
  fs.writeFileSync(outputPath, JSON.stringify(uploadedUrls, null, 2));
  console.log('\n🎉 Upload complete! URLs saved to cloudinary_urls1.json');
};

uploadAllImages();
