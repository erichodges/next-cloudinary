import React from 'react';
import { useImage } from 'use-cloudinary';

const TestImage = () => {
  const { generateImageUrl } = useImage(process.env.CLOUDINARY_CLOUD_NAME);

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
          quality: 'auto',
          fetch: 'auto'
        }
      };
      return <img key={img} width='300px' src={generateImageUrl(config)} />;
    });
  };
  // console.log(process.env.CLOUDINARY_CLOUD_NAME);
  return <div>{renderMultipleImages()}</div>;
};

export default TestImage;
