import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/context/ScrollToTop";

import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error('Root element with id "root" was not found.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
