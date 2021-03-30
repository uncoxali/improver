import api from './api';

const uploadFile = {
    uploadFile: (data: FormData, onUploadProgress: ((progressEvent: any) => void) | undefined) =>
        api.file('/file-upload', data, onUploadProgress),
};

const home = {
    home: () => api.get('/home'),
};
const Default = {
    contactUs: (data: any) => api.post('/addProject', data),

}

export default {
    ...uploadFile,
    ...home,
    ...Default,
};
