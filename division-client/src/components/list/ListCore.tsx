import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Post from '../../models/Post';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    listRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '1800px',
      padding: '40px 0px',
      [theme.breakpoints.down('lg')]: {
        width: '1000px',
      },
      [theme.breakpoints.down('md')]: {
        width: '700px',
      },
    },
    inline: {
      display: 'inline-block',
      maxWidth: '300',
      fontSize: '2rem',
    },
    listItemText: {
      color: 'black',
      fontSize: '2.5rem',
    },
    avatar: {
      height: '150px',
      width: '150px',
      marginRight: '80px',
    },
    divider: {
      marginTop: '60px',
    },
    subTitle: {
      color: 'black',
      marginTop: '40px',
      marginBottom: '40px',
    },
  })
);
export interface IListCoreeProps {
  postContent: Post[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ListCore: React.SFC<IListCoreeProps> = (props) => {
  const classes = useStyles();
  const { postContent } = props;
  return (
    <div className={classes.container}>
      <div className={classes.subTitle}>
        <Typography component="span" variant="subtitle1">
          Featured Projects
        </Typography>
      </div>
      {postContent.map((p) => (
        <List className={classes.listRoot} key={p.id}>
          <Link to={`/project/${p.id}`}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={p.title.rendered}
                  src={
                    p['_embedded']['wp:featuredmedia'][0]['media_details'].sizes
                      .thumbnail.source_url
                  }
                  classes={{ root: classes.avatar }}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={p.title.rendered}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {p.excerpt.rendered.replace(
                        /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                        ''
                      )}
                    </Typography>
                    <br></br>
                    <Typography variant="body2" component="span">
                      {p.date.slice(0, 10)}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Link>
          <Divider className={classes.divider} variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
};
export default ListCore;
