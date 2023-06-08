import { configureStore } from "@reduxjs/toolkit";
import layoutStore from "@features/operator/layout-operator/layout-store";

export const store = configureStore({
    reducer: {
        layoutOperator: layoutStore
    },
});
