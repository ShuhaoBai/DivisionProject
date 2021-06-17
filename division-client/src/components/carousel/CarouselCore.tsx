import React from 'react';
import Post from '../../models/Post';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

export interface ICarouselCoreProps {
  postContent: Post[];
}

const CarouselCore: React.SFC<ICarouselCoreProps> = (props) => {
  const { postContent } = props;
  return (
    <Carousel animation={'slide'}>
      {postContent.map((post, i) => (
        <Item key={i} post={post} />
      ))}
    </Carousel>
  );
};

export interface ICarouselItemProps {
  post: Post;
  key: number;
}

const Item: React.SFC<ICarouselItemProps> = (props) => {
  const { post, key } = props;
  return (
    <Paper>
      <img
        key={key}
        alt=""
        src={post._embedded['wp:featuredmedia'][0].source_url}
      />
    </Paper>
  );
};

export default CarouselCore;
