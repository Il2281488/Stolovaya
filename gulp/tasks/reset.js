import {deleteSync} from 'del';

export const reset = () => {
    return deleteSync(app.path.clean);
}