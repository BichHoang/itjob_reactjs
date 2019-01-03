import * as Types from '../constants/ActionType';
import {handleSession} from './../helpers/handleSession';

const tabs = handleSession();

const num_of_tabs = (state = tabs, action) => {
    switch (action.type) {
        default:
          return state
      }
};

export default num_of_tabs;