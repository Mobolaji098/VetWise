"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

import Shoppage from "../components/shoppage/shoppage";

export default function Shop() {
  return (
    <main className="flex flex-col bg-white">
      <Provider store={store}>
        <Shoppage />
      </Provider>
    </main>
  );
}
