import { homeConstants } from '../_constants';
import { homeService } from '../_services';

export const homeActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        homeService.getAll()
            .then(
                homes => dispatch(success(homes.data.content)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: homeConstants.GETALL_REQUEST } }
    function success(homes) { return { type: homeConstants.GETALL_SUCCESS, homes } }
    function failure(error) { return { type: homeConstants.GETALL_FAILURE, error } }
}