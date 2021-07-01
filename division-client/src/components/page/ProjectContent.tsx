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
          {project &&
            project.map((p, i) => {
              if (p.id.toString() === location.pathname.split('/').pop()) {
                return (
                  <div className={styles['carousel_container']} key={i}>
                    <h1>{p.title.rendered}</h1>
                    <img
                      className={styles['carousel_img']}
                      src={p._embedded['wp:featuredmedia'][0].source_url}
                      alt={p.title.rendered}
                    />
                    <p
                      className={styles['excerpt']}
                      dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
                    />
                    <div className={styles['carousel_content']}>
                      <div
                        className={styles['carousel_content_inner']}
                        dangerouslySetInnerHTML={{ __html: p.content.rendered }}
                      ></div>
                    </div>
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
