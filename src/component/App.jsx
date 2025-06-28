import { Layout } from "antd";
import Header from "./general/Header";
import Footer from "./general/Footer";
import Sider from "./general/Sider";
import Providers from "../provider";
import styles from "../assets/styles/app.module.css";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "@/provider/router/router";

function App() {
  const { Content } = Layout;

  return (
    <>
      <Providers>
        <Layout>
          <Sider />
          <Layout>
            <Header />
            <Content className={styles.content}>
              <ProtectedRoutes />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Providers>
    </>
  );
}

export default App;
