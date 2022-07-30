import "../styles/globals.css";
import { Provider} from "react-redux";
import store, { persistor } from "../config/store/config";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../layouts";
import "antd/dist/antd.css";

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
