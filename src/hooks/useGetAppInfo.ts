import api from 'zmp-sdk';

export interface IAppInfo {
    name: string;
    description: string;
    version: string;
    appUrl: string;
    qrCodeUrl: string;
}

const useGetAppInfo = () => {
    const getAppInfo = () => {
        api.getAppInfo({
            success: data => {
                console.log('get appInfo|success');
            },
            fail: error => {
                console.error('get appInfo|error', error);
            },
        });
    };

    return { getAppInfo };
};
export default useGetAppInfo;
