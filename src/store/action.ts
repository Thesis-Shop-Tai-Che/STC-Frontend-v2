export const setCurrentUser = (data) => {
    return {
        type: 'currentUser',
        data,
    };
};

export const getCurrentUser = () => {
    return {
        type: 'currentUser',
    };
};