import React, {Component} from 'react';
import { Layout, Menu} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Topics from './container/topics';
import './App.less';
const { Header } = Layout;

class App extends Component {
    render() {
        console.log("state",this.props)
        return (
                <Router>
                    <div>
                        <Layout>
                            <Header className="header">
                                <div className="logo"/>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{lineHeight: '64px'}}
                                >
                                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/topics">Topics</Link></Menu.Item>

                                </Menu>
                            </Header>
                        </Layout>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>

                    </div>
                </Router>
        );
    }
}

export default App;
