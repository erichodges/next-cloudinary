// import { useImage } from 'use-cloudinary';
// import TestImage from '../components/TestImage';
import Image from 'next/image';
import React from 'react';

const ImageComponent = ({
  src = 'evora-gt-side',
  layout = 'fill',
  loading = 'lazy'
}) => {
  const hostUrl = `https://res.cloudinary.com/dn3baky3u/image/upload/w_auto,q_auto,f_auto,dpr_auto/v1580246844/gatsby-cloudinary`;
  // https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg
  // https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side
  return (
    <Image
      className='object-center object-cover w-full h-full'
      src={`${hostUrl}/${src}`}
      alt='Picture of the author'
      layout={layout}
      quality={10}
      loading={loading}
    />
  );
};

export default function Home() {
  return (
    <div>
      <ImageComponent />
    </div>
  );
}
