import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Post from '../../models/Post';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1800,
      height: 800,
      position: 'relative',
    },
    media: {
      height: 800,
      width: '100%',
    },
    layer: {
      position: 'absolute',
      top: '82%',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textLayer: {
      position: 'absolute',
      right: '3%',
      top: '10%',
      bottom: '3%',
      textAlign: 'right',
    },
    [theme.breakpoints.down('lg')]: {
      layer: {
        position: 'absolute',
        top: '82%',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      textLayer: {
        position: 'absolute',
        left: '3%',
        top: '10%',
        bottom: '3%',
        textAlign: 'left',
        maxWidth: '800px',
      },
    },
    [theme.breakpoints.down('md')]: {
      layer: {
        position: 'absolute',
        top: '70%',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      textLayer: {
        position: 'absolute',
        left: '3%',
        top: '10%',
        bottom: '3%',
        textAlign: 'left',
        maxWidth: '600px',
      },
    },
  })
);

export interface ICarouselContentProps {
  post: Post;
  key: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CarouselContent: React.SFC<ICarouselContentProps> = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Card className={classes.root}>
      <Link to={`/project/${post.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={post._embedded['wp:featuredmedia'][0].source_url}
            title="Wordpress Content"
          />
          <div className={classes.layer}>
            <div className={classes.textLayer}>
              <Typography gutterBottom variant="subtitle2" component="h2">
                {post.title.rendered}
              </Typography>
              <Typography variant="body2" component="p">
                {post.excerpt.rendered.replace(
                  /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                  ''
                )}
              </Typography>
            </div>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default CarouselContent;
