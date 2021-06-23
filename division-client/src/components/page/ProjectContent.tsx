import React from 'react';
import Post from '../../models/Post';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from '../../styles/app.module.css';
export interface IProjectContentProps extends RouteComponentProps {
  project: Post[];
}
export interface IProjectContentState {
  isLoading: boolean;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
class ProjectContent extends React.Component<
  IProjectContentProps,
  IProjectContentState
> {
  constructor(props: Readonly<IProjectContentProps>) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { isLoading } = this.state;
    const { project, location } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <React.Fragment>
        <div className={styles['root']}>
          <h1>This is the fetched project content from Wordpress</h1>
          <h2>Location is {location.pathname.split('/').pop()}</h2>
          {project &&
            project.map((p) => {
              if (p.id.toString() === location.pathname.split('/').pop()) {
                return (
                  <div className="title">
                    <h1>Title is {p.title.rendered}</h1>
                    <img
                      src={p._embedded['wp:featuredmedia'][0].source_url}
                      alt={p.title.rendered}
                    />
                    <p>
                      {p.content.rendered.replace(
                        /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                        ''
                      )}
                    </p>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(ProjectContent);
