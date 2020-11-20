import React from 'react';
import { useImage } from 'use-cloudinary';

export default function Home() {
  const config = {
    delivery: {
      publicId: 'gatsby-cloudinary/evora-gt'
    },
    transformation: {
      // add your transformations here
    }
  };

  const { generateImageUrl } = useImage(process.env.CLOUDINARY_CLOUD_NAME);

  return (
    <div>
      <img width='300px' src={generateImageUrl(config)} />
    </div>
  );
}
