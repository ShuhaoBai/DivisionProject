import React from 'react';
import Post from '../../models/Post';
import Carousel from 'react-material-ui-carousel';
import CarouselContent from './CarouselContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  carouselCoreWrapper: {
    // width: '100%',
    marginBottom: '40px',
  },
});
export interface ICarouselCoreProps {
  postContent: Post[];
}

const CarouselCore: React.SFC<ICarouselCoreProps> = (props) => {
  const { postContent } = props;
  const classes = useStyles();
  return (
    <div className={classes.carouselCoreWrapper}>
      <Carousel animation={'slide'} fullHeightHover={true}>
        {postContent.map((post, i) => (
          <CarouselContent post={post} key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCore;
