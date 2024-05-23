import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import { ThemeProvider } from "@/components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
