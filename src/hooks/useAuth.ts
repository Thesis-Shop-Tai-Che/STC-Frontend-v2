import api from 'zmp-sdk';

const useAuth = () => {
    const login = (actionGetOrCreateUser) => {

        api.login({
            success: async () => {
                const { userInfo } = await api.getUserInfo({
                    fail: error => {
                        console.error('getUserInfo|error', error);
                    },
                });
                await actionGetOrCreateUser(userInfo)

            },
            fail: error => {
                console.error('login error', error);
            },
        });
    };

    return { login, };
};
export default useAuth;
