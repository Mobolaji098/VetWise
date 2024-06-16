"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Userdetails from "../components/profile/userdetails";

export default function Profile() {
  return (
    <div>
      <Provider store={store}>
        <Userdetails />
      </Provider>
    </div>
  );
}
