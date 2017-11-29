/**
 * ui
 **/

import {createAction} from '../store/utils';
import {store} from '../store';

export const updatePageTitle = (pageTitle) => createAction('UPDATE_PAGE_TITLE', {pageTitle});

export default {
    updatePageTitle
};