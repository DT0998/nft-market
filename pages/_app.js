import "../styles/globals.css";
import "../styles/variables.less";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store, { persistor } from "../config/store/config";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
