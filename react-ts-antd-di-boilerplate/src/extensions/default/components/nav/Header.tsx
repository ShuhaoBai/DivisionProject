import React from 'react';
import { Menu } from 'antd';
import { css } from 'emotion';
import { NavLink, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import theme from '@extensions/services/Theme';

type MyProps = RouteComponentProps & { };
type MyState = { };

export class Header extends React.Component<MyProps, MyState> {

    getHeaderStyles() : string {
        return css`
            padding: 5px 20px 5px 10px;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            background-color: white;
            align-items: center;
            max-width: 1078px;
            width:100%;
            .image {
                height: 80px;
            }
            .title-container {
                display: flex;
                flex: 1;
                flex-direction: column;
                margin-left: 10px;
                margin-top: -15px;
                .title {
                    font-weight: 800;
                    font-size: 28px;
                    text-shadow: 2px 2px 8px #aaa;
                }
                .menu {
                    line-height: 20px;
                    background: ${theme.colors.primary};
                    border-bottom-color: ${theme.colors.primary};
                    border-radius: 4px;
                    li:first-child {
                      border-radius: 4px 0 0 4px;
                    }
                    li {
                      &.ant-menu-item-selected {
                        background-color: ${theme.colors.textSecondary} !important;
                        a {
                         font-weight: 500;
                          color: ${theme.colors.text};
                          &:hover {
                            color: ${theme.colors.text};
                          }
                        }
                      }
                    }
                }
            }
        `;
    }

    getTitle() : string {
        return 'Default Application Title';
    }

    render() {
        return (
            <div className={this.getHeaderStyles()}>
                <img className="image" src={theme.logo} alt="logo" />
                <div className="title-container">
                    <div className="title">{this.getTitle()}</div>
                    <Menu
                        className="menu"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        selectedKeys={[this.props.location.pathname]}
                    >
                        <Menu.Item key="/">
                            <NavLink to="/">Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/search">
                            <NavLink to="/search">Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/browse">
                            <NavLink to="/browse">Browse</NavLink>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
  
        );
    }
}

// IMPORTANT!!!!  withRouter messes up the transpilation, so you cannot extend the default export that is wrapped by withRouter HOC.
// If you need to extend the Header class, then import the named component, not the default
// i.e., import { Header as DefaultHeader } from 'extensions/default/components/core/Header';
export default withRouter(Header);