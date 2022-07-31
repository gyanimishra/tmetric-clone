import axios from "axios";

export const projectActions = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
};
// const profileId = JSON.parse(localStorage.getItem("userId"))


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
const profileId = JSON.parse(localStorage.getItem("userId"))
export const get_projects = (profileId) => (dispatch) => {
    dispatch(project_data_request())
    axios.get(`https://tmetric-backend-2.herokuapp.com/project/${profileId}`).then((res) => {
        dispatch(project_data_success(res.data))
        // const { name, code, notes = "" } = res.data[0]
        // setFormData({ name, code, notes })
    }).catch(() => {
        dispatch(project_data_failure())
    })
}

export const post_project = (payload, navigate, profileId) => (dispatch) => {

    dispatch(project_data_request())
    axios.post(`https://tmetric-backend-2.herokuapp.com/project/new/${profileId}`, payload).then(() => {
        dispatch(get_projects(profileId))
        navigate("/project")
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}
export const delete_project = (id) => (dispatch) => {
    dispatch(project_data_request())
    axios.delete(`https://tmetric-backend-2.herokuapp.com/project/${id}`).then(() => {
        dispatch(get_projects(profileId))
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}

export const toggle_status = (payload, id) => (dispatch) => {
    dispatch(project_data_request())

    axios.patch(`https://tmetric-backend-2.herokuapp.com/project/${id}`, payload).then(() => {
        dispatch(get_projects(profileId))
    }).catch((err) => {
        dispatch(project_data_failure())
    })
}

export const get_projects1 = (profileId1,setFormData) => (dispatch) => {
    dispatch(project_data_request())
    axios.get(`https://tmetric-backend-2.herokuapp.com/project/${profileId}?_id=${profileId1}`).then((res) => {
        dispatch(project_data_success(res.data))
        const { name, code, notes = "" } = res.data[0]
        setFormData({ name, code, notes })
    }).catch(() => {
        dispatch(project_data_failure())
    })
}


export const get_projects2 = (profileId1) => (dispatch) => {
    dispatch(project_data_request())
    axios.get(`https://tmetric-backend-2.herokuapp.com/project/${profileId}?status=${profileId1}`).then((res) => {
        dispatch(project_data_success(res.data))
    }).catch(() => {
        dispatch(project_data_failure())
    })
}