import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./LivechatSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        Search:searchSlice,
        chat:ChatSlice,
    }
});

export default store;