import { projectActions } from "./actions";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case projectActions.REQUEST: {
            return { ...state, isLoading: true };
        }
        case projectActions.SUCCESS: {
            return { ...state, isLoading: false, data: payload };
        }
        case projectActions.FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }
        default: {
            return state;
        }
    }
}