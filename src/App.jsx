// /cssgridgenerator-react/src/App.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { I18nextProvider } from "./i18n"; // 确保正确导入
import i18n from "./i18n"; // 引入 i18n 实例
import AppHeader from "./components/AppHeader";
import AppGrid from "./components/AppGrid";
import AppForm from "./components/AppForm";
import "./styles/App.scss";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "initialArrIndex",
      payload: window.location.search,
    });
  }, [dispatch]);

  return (
    <I18nextProvider i18n={i18n}>
      <div id="app">
        <AppHeader />
        <section className="container">
          <AppGrid />
          <AppForm />
        </section>
      </div>
    </I18nextProvider>
  );
};

export default App;