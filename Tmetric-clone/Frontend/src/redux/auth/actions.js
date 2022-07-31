import axios from "axios";
export const authAction = {
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    STOP_LOADER: "STOP_LOADER",
    SIGNIN_SUCCESS: "SIGNIN_SUCCESS",
    LOGOUT: "LOGOUT",
};
export const signup_request = () => ({
    type: authAction.REQUEST,
});

export const signup_success = () => ({
    type: authAction.SUCCESS,

});

export const signin_success = (payload) => ({
    type: authAction.SIGNIN_SUCCESS,
    payload,
});

export const signup_failure = () => ({
    type: authAction.FAILURE,
});
export const stopLoader = () => ({
    type: authAction.STOP_LOADER,
});

export const logout_obj = () => ({
    type: authAction.LOGOUT,
});

export const signup_post = (payload, navigate, setShowError) => (dispatch) => {
    dispatch(signup_request());
    axios
        .post("https://tmetric-backend-2.herokuapp.com/user/signup", payload)
        .then(({ data }) => {
            if (data.message === "User already exist") {
                setShowError(true);
                dispatch(stopLoader())
            } else {
                dispatch(signup_success());
                navigate("/login");
            }
        })
        .catch(() => {
            dispatch(signup_failure());
        });
};

export const signin_post = (payload, navigate, setShowError) => (dispatch) => {
    dispatch(signup_request());
    axios
        .post("https://tmetric-backend-2.herokuapp.com/user/signin", payload)
        .then((res) => {
            if (res.data.message === "Wrong credentials") {
                setShowError(true);
                dispatch(stopLoader())
            } else {
                dispatch(signin_success(res.data));
                navigate("/project");
            }
        })
        .catch(() => {
            dispatch(signup_failure());
        });
};

export const logout_app = () => (dispatch) => {
    dispatch(logout_obj());
}