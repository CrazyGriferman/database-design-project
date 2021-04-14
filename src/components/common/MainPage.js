import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import image1 from '../../assets/img/rescue.jpg';
const { Header, Content, Footer} = Layout;


export default function MainPage() {
    return(
        <Layout className="layout">
            <Header>
            <div className="logo">
                <i className="fas fa-bolt"></i>
                <a href="http://www.baidu.com">Tech</a>
            </div>
            </Header>
            <Content >
                <div className="site-layout-content">
                    <img alt="Dragon" src={image1} />
                    <Button type="primary" shape="round" size= "large">
                        我是买家
                    </Button>
                    <Button type="primary" shape="round" size= "large">
                        我是卖家
                    </Button>
                    <Button type="primary" shape="round" size= "large">
                        我是管理员
                    </Button>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>数据库课程设计</Footer>
        </Layout>
    );
}