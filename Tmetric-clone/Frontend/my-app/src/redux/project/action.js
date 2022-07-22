
export const projectActions = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
};
export const project_data_request = () => ({
    type: projectActions.REQUEST,
});

export const project_data_success = (payload) => ({
    type: projectActions.SUCCESS,
    payload,
});

export const project_data_failure = (payload) => ({
    type: projectActions.FAILURE,
    payload,
});