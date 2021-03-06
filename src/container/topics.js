/**
 * Created by Administrator on 2017/6/13.
 */
import React from 'react'
import {
    Link,
    Route,
} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import './topics.less'
import Topic from './topic'
const {SubMenu} = Menu;
const {Sider} = Layout;

class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            pathname: ''
        }
    }

    componentWillMount() {
        console.log(window.location.pathname)
        this.setState({
            pathname: window.location.pathname
        })
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const {match}=this.props
        return (
            <div>
                <Layout className="layout-sider">
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        width={200}
                        style={{background: '#fff', minHeight: 'calc(100vh - 64px)',paddingTop:'20px'}}>

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.state.pathname]}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span>配置操作</span>}>
                                <Menu.Item key={`${match.url}/option1`}>
                                    <Link to={`${match.url}/option1`}><Icon type="user"/>
                                        <span className="nav-text">
                                    option1
                                </span></Link>
                                </Menu.Item>
                                <Menu.Item key={`${match.url}/option2`}>
                                    <Link to={`${match.url}/option2`}><Icon type="video-camera"/>
                                        <span className="nav-text">
                                    option1
                                </span></Link>
                                </Menu.Item>
                                <Menu.Item key={`${match.url}/option3`}>
                                    <Link to={`${match.url}/option3`}><Icon type="upload"/>
                                        <span className="nav-text">
                                    option1
                                </span></Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key={`${match.url}/option4`}>
                                <Link to={`${match.url}/option4`}><Icon type="upload"/>
                                    <span className="nav-text">
                                    option4
                                </span></Link>
                            </Menu.Item>
                        </Menu>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Sider>
                    <Route path={`${match.url}/:topicId`} component={Topic}/>
                </Layout>

            </div>
        )
    }
}

export default Topics