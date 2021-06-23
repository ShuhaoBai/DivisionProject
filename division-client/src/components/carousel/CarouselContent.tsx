import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Post from '../../models/Post';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 800,
    height: 600,
  },
  media: {
    height: 600,
    maxWidth: '700',
  },
  link: {
    color: 'black',
    marginLeft: 150,
  },
});
export interface ICarouselContentProps {
  post: Post;
  key: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CarouselContent: React.SFC<ICarouselContentProps> = (props) => {
  const classes = useStyles();
  const { post } = props;
  console.log(post);

  return (
    <Card className={classes.root}>
      <Link to={`/project/${post.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={post._embedded['wp:featuredmedia'][0].source_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title.rendered}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.excerpt.rendered.replace(
                /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                ''
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default CarouselContent;
