import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice";
import loginReducer from "./features/login/loginSlice";
import facilityReducer from "./features/facility/facilitySlice";
import { baseApi } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import bookingReducer from "./features/booking/bookingSlice";
import loadingReducer from "./features/loadingStates/loadingStatesSlice";
import avaibilatyReducer from "./features/availablity/availabilitySlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persistor
const persistUserConfig = {
  key: "user",
  storage,
};
const persistFacilityConfig = {
  key: "facility",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistedFacilityReducer = persistReducer(
  persistFacilityConfig,
  facilityReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    register: registerReducer,
    login: loginReducer,
    availability: avaibilatyReducer,
    booking: bookingReducer,
    facility: persistedFacilityReducer,
    user: persistedUserReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});
// persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
