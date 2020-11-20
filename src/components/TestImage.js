import { useImage } from 'use-cloudinary';

const TestImage = () => {
  const config = {
    delivery: {
      publicId: 'your-public-id'
    },
    transformation: {
      // add your transformations here
    }
  };

  const { generateImageUrl } = useImage('your-cloud-name');

  <img src={generateImageUrl(config)} />;
};

export default TestImage;
