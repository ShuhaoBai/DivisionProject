import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Post from '../../models/Post';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    color: 'black',
    marginLeft: 50,
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
      <CardActions>
        <Link className={classes.link} to={`/project/${post.id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};
export default CarouselContent;
