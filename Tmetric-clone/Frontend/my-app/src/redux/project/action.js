import axios from "axios";

export const projectActions = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
};
const profileId = JSON.parse(localStorage.getItem("userID")) || 'ObjectId("62dbaa2994602a52c42c313e")'


export const project_data_request = () => ({
    type: projectActions.REQUEST,
});

export const project_data_success = (payload) => ({
    type: projectActions.SUCCESS,
    payload,
});

export const project_data_failure = () => ({
    type: projectActions.FAILURE,
});

export const get_projects = (key, value = "", setFormData = true) => (dispatch) => {
    dispatch(project_data_request())
    axios.get(`https://tmetric-backend.herokuapp.com/project/${profileId}?${key}=${value}`).then((res) => {
        dispatch(project_data_success(res.data))
        const { name, code, notes = "" } = res.data[0]
        setFormData({ name, code, notes })
    }).catch(() => {
        dispatch(project_data_failure())
    })
}

export const post_project = (payload, navigate) => (dispatch) => {
    dispatch(project_data_request())
    axios.post(`https://tmetric-backend.herokuapp.com/project/new/${profileId}`, payload).then(() => {
        dispatch(get_projects())
        navigate("/project")
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}
export const delete_project = (id) => (dispatch) => {
    dispatch(project_data_request())
    axios.delete(`https://tmetric-backend.herokuapp.com/project/${id}`).then(() => {
        dispatch(get_projects())
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}

export const toggle_status = (payload, id) => (dispatch) => {
    dispatch(project_data_request())

    axios.patch(`https://tmetric-backend.herokuapp.com/project/${id}`, payload).then(() => {
        dispatch(get_projects())
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}
