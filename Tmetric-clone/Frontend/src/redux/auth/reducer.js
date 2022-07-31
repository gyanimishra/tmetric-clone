import { authAction } from "./actions";


const initialState = {
    status: JSON.parse(localStorage.getItem("auth")) || false,
    isLoading: false,
    isError: false,
    userId: JSON.parse(localStorage.getItem("userId"))
};
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authAction.REQUEST: {
            return { ...state, isLoading: true };
        }
        case authAction.SUCCESS: {
            return { ...state, isLoading: false };
        }
        case authAction.SIGNIN_SUCCESS: {
            localStorage.setItem("auth", JSON.stringify(true))
            localStorage.setItem("userId", JSON.stringify(payload._id))
            localStorage.setItem("name", JSON.stringify(payload.name))
            localStorage.setItem("email", JSON.stringify(payload.email))
            return { ...state, isLoading: false, isError: false, };
        }
        case authAction.STOP_LOADER: {
            return { ...state, isLoading: false, isError: false };
        }
        case authAction.FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }
        case authAction.LOGOUT: {
            localStorage.removeItem("auth")
            localStorage.removeItem("userId")
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            return { ...state, isLoading: false, isError: false };
        }
        default: {
            return state;
        }
    }
};

