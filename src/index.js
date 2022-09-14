import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import { FavoritesContextProvider } from "./store/favorite-context";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<FavoritesContextProvider>
			<BrowserRouter>
				<App />
				<Routes>
					<Route path="/" element={<AllMeetup />}></Route>
					<Route path="/new-meetup" element={<NewMeetup />} />
					<Route path="/favorite" element={<Favorites />} />
				</Routes>
			</BrowserRouter>
		</FavoritesContextProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
