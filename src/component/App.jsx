import { Layout } from "antd";
import Header from "./general/Header";
import Footer from "./general/Footer";
import Sider from "./general/Sider";
import Providers from "../provider";
import Dashboard from "./dashboard/Dashboard";
// import Detail from './pepole/Detail';
// import Add from "./pepole/Add";
// import List from "./pepole/List";
import styles from "../assets/styles/app.module.css";
import { Route, Routes } from "react-router-dom";

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
              <Routes>
                <Route path='/' element={<Dashboard />} />
                {/* <Route path='/pepole' element={<List />} />
                <Route path='/pepole/add' element={<Add />} />
                <Route path='/pepole/:id' element={<Detail />} />
                <Route path='/' />
                <Route path='/' /> */}
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Providers>
    </>
  );
}

export default App;
