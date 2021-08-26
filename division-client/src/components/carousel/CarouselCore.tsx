import React from 'react';
import Post from '../../models/Post';
import Carousel from 'react-material-ui-carousel';
import CarouselContent from './CarouselContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselCoreWrapper: {
      marginBottom: '40px',
      [theme.breakpoints.down('lg')]: {
        width: '1000px',
      },
      [theme.breakpoints.down('md')]: {
        width: '700px',
      },
    },
  })
);
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
