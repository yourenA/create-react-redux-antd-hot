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
const { Sider} = Layout;

class Topics extends React.Component {
    render() {
        const {match}=this.props
        return (
            <div>
                <Layout>
                    <Sider width={200} style={{background: '#fff',minHeight:'calc(100vh - 64px)'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                <Menu.Item key="1">
                                    <Link to={`${match.url}/option1`}>
                                        option1
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to={`${match.url}/option2`}>
                                        option2
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to={`${match.url}/option3`}>
                                        option2
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Route path={`${match.url}/:topicId`} component={Topic}/>
                    <Route exact path={match.url} render={() => (
                        <h3>Please select a topic.</h3>
                    )}/>
                </Layout>

            </div>
        )
    }
}

export default Topics