import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollArea } from "./components/ui/scroll-area.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Provider store={store}>
                <ScrollArea className="w-screen h-screen">
                    <App />
                </ScrollArea>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
