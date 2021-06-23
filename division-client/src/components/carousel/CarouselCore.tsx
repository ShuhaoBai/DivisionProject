import React from 'react';
import Post from '../../models/Post';
import Carousel from 'react-material-ui-carousel';
import CarouselContent from './CarouselContent';

export interface ICarouselCoreProps {
  postContent: Post[];
}

const CarouselCore: React.SFC<ICarouselCoreProps> = (props) => {
  const { postContent } = props;
  return (
    <Carousel animation={'slide'}>
      {postContent.map((post, i) => (
        <CarouselContent post={post} key={i} />
      ))}
    </Carousel>
  );
};

export default CarouselCore;
