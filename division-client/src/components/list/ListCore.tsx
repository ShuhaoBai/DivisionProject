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
    listRoot: {
      display: 'flex',
      width: '800px',
    },
    inline: {
      display: 'inline',
      maxWidth: '300',
    },
    listItemText: {
      color: 'black',
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
    <div>
      {postContent.map((p) => (
        <List className={classes.listRoot} key={p.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={
                  p['_embedded']['wp:featuredmedia'][0]['media_details'].sizes
                    .thumbnail.source_url
                }
              />
            </ListItemAvatar>
            <Link to={`/project/${p.id}`}>
              <ListItemText
                className={classes.listItemText}
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
                  </React.Fragment>
                }
              />
            </Link>
          </ListItem>

          <Divider variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
};
export default ListCore;
