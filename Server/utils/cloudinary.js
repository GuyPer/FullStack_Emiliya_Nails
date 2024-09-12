const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// function to get all the addresses on Cloudinary folder
async function getAllImagesInFolder(folderName) {
  let allImages = [];
  let nextCursor = null;

  do {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `${folderName}/`, 
      max_results: 500,
      next_cursor: nextCursor
    });

    allImages = allImages.concat(result.resources.map(resource => resource.secure_url));
    nextCursor = result.next_cursor;

  } while (nextCursor);

  return allImages;
}



// const createProduct = async (req,res,next)=>{
//   const {name, description, price, image} = req.body;

//   try{
//       const result= await cloudinary.uploader.upload(image,{
//           folder: "products",
//           width:300,
//           crop:"scale"
//       })
//       const product = await Product.create({
//           name, 
//           description,
//           price, 
//           image:{
//               public_id: result.public_id,
//               url:result.secure_url
//           }
//       });
//       return res.status(200).json({
//           success:true,
//           product
//       })
//   }
//   catch(err){
//       res.status(400).json({
//           success: false,
//           message: err.message
//       })
//   }
// }

module.exports = 
{
  cloudinary,
  getAllImagesInFolder
};
