import React from 'react';
import { useImage } from 'use-cloudinary';

export default function Home() {
  const { generateImageUrl } = useImage(process.env.CLOUDINARY_CLOUD_NAME);
  console.log(process.env.CLOUDINARY_CLOUD_NAME);
  const images = [
    'gatsby-cloudinary/evora-gt',
    'gatsby-cloudinary/evora-gt-side',
    'gatsby-cloudinary/evija-side'
  ];

  const renderMultipleImages = () => {
    return images.map((img) => {
      const config = {
        delivery: {
          publicId: img
        },
        transformation: {
          // whatever
          // height: 0.3
        }
      };
      return <img key={img} src={generateImageUrl(config)} />;
    });
  };
  // console.log(process.env.CLOUDINARY_CLOUD_NAME);
  return <div>{renderMultipleImages()}</div>;
}
