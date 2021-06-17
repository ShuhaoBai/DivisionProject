import React from 'react';
import Post from '../../models/Post';
import { fetchWpPosts } from '../../services/FetchService';

export interface IPostsProps {}
export interface IPostsState {
  posts: Post[];
  // postsContent: Post[];
  isLoading: boolean;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
class Posts extends React.Component<IPostsProps, IPostsState> {
  constructor(props: Readonly<IPostsProps>) {
    super(props);
    this.state = {
      posts: [],
      // postsContent: [],
      isLoading: false,
    };
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetchWpPosts().then((result) =>
      this.setState({
        posts: result,
        isLoading: false,
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { isLoading, posts } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <React.Fragment>
        <h1>This is the fetched posts from Wordpress</h1>
        {posts.map((post) => {
          return <h1 key={post.id}>{post.id}</h1>;
        })}
      </React.Fragment>
    );
  }
}
export default Posts;
