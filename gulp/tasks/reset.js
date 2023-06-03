import {deleteAsync} from 'del';
const del =  deleteAsync;

export const reset = () => {
    return del(app.path.clean);
}