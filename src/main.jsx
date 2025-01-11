// /cssgridgenerator-react/src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { I18nextProvider } from "./i18n"; // 确保正确导入
import i18n from "./i18n"; // 引入 i18n 实例
import App from './App.jsx'
import "./styles/main.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
)
