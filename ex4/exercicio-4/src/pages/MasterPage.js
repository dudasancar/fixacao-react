import { Layout } from 'antd';
import React from 'react';

const { Sider } = Layout;

const MasterPage = () => {
    return (
        <Layout>
            <Sider>
                <h1>SIDEBAR</h1>
            </Sider>
        </Layout>
    )
}

export default MasterPage;
