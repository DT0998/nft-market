import "../styles/globals.css";
import "../styles/variables.less";
import "antd/dist/antd.css";
import { persistor, wrapper } from "../config/store/config";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../layouts";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  return (
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
      onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 6500))}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
