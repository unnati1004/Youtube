import React, { useState, useEffect } from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Head from "./pages/Head";
import LoadingBar from "react-top-loading-bar";
import AllCards from "./Component/AllCards";
import BtnSlider from "./Component/BtnSlider";
import { Provider } from "react-redux";
import store from "./utils/store";
import LeftNav from "./Component/LeftNav";
import VideoDetails from "./Component/VideoDetails";
import SearchResult from "./Component/SearchResult";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       { path: "/", element: <MainContainer /> },
//       { path: "watch", element: <WatchPage /> },
//       { path: "/login", element: <Login/> },
//       {
//         path: "/demo",
//         element: <Demo />,
//       },
//       {
//         path: "/demo2",
//         element: <Demo2 />,
//       },
//     ],
//   },
// ]);

function App() {
   const [progress, setProgress] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("New");
	return (
		<Provider store={store}>
			<LoadingBar color="#f11946" progress={progress} />

			<BrowserRouter>
				<div className="flex flex-col h-full">
					<Head onLoaderFinished={setProgress} />
					<div className="flex flex-row h-[calc(100%-56px)]">
						<LeftNav
							category={selectedCategory}
							setcategory={setSelectedCategory}
							onLoaderFinished={setProgress}
						/>
						<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
							<BtnSlider/>
							<Routes>
								<Route
									path="/"
									exact
									element={
										<AllCards
											onLoaderFinished={setProgress}
											category={selectedCategory}
											setcategory={setSelectedCategory}
										/>
									}
								/>
								<Route
									path="/searchResult/:searchQuery"
									element={<SearchResult onLoaderFinished={setProgress} />}
								/>
								<Route
									path="/video/:id"
									element={<VideoDetails onLoaderFinished={setProgress} />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Provider>
  );
}

export default App;
