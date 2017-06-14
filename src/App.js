import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Topics from './container/topics';
import Login from './container/login';
import Register from './container/register';
import './App.less';
const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: ''
        }
    }

    componentWillMount() {
        console.log(window.location.pathname);
        if (window.location.pathname.indexOf('topics') >= 0) {
            this.setState({
                pathname: '/topics'
            })
        } else {
            this.setState({
                pathname: window.location.pathname
            })
        }

    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            pathname: e.key,
        });
    }
    render() {
        console.log("state", this.props)
        return (
            <Router>
                <div>
                    <div className="layout">
                        <Header className="layout-header">
                            <div className="logo"/>
                            <Menu
                                onClick={this.handleClick}
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={[this.state.pathname]}
                                style={{lineHeight: '64px'}}
                            >
                                {/*'/'的navlink 需要添加exact才不会选其他的时候默认将‘/’也变高亮*/}
                                <Menu.Item key="/"><NavLink exact activeClassName="nav-selected" to="/">Home</NavLink></Menu.Item>
                                <Menu.Item key="/about"><NavLink activeClassName="nav-selected" to="/about">About</NavLink></Menu.Item>
                                <Menu.Item key="/topics"><NavLink activeClassName="nav-selected" to="/topics/option1">Topics</NavLink></Menu.Item>
                                <SubMenu title={<span>登录/注册</span>}>
                                        <Menu.Item key="/login"><NavLink activeClassName="nav-selected" to="/login">登录</NavLink></Menu.Item>
                                        <Menu.Item key="/register"><NavLink activeClassName="nav-selected" to="/register">注册</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Header>
                    </div>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/topics" component={Topics}/>

                </div>
            </Router>
        );
    }
}

export default App;
