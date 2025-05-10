import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./pages/Body";
import Head from "./pages/Head";
import { MainContainer } from "./pages/MainContainer";
import { WatchPage } from "./Component/WatchPage";
import { Demo } from "./Component/Demo";
import { Demo2 } from "./Component/Demo2";
import { Login } from "./Component/Login";

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
						{/* <LeftNav
							category={selectedCategory}
							setcategory={setSelectedCategory}
							onLoaderFinished={setProgress}
						/> */}
						<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
							{/* <BtnSlider /> */}
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
