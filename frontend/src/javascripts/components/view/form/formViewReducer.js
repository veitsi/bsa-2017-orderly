import {INCLUDE_FIELD, EXCLUDE_FIELD, INCLUDE_ALL, EXCLUDE_ALL, BLUR_RECORD} from "./formViewActions";

const initialState = {
    included: [],
    table: null,
    view: null,
    record_data: [],
    form: null,
	showFileToastr: ''

};

export default function formReducer(state = initialState, action) {
    switch (action.type) {
    case INCLUDE_FIELD: {
        return {...state, included: state.included.concat(action.fieldId)};
    }
    case EXCLUDE_FIELD: {
        return {...state, included: state.included.filter((f) => f !== action.fieldId)};
    }
    case INCLUDE_ALL: {
        return {...state, included: [].concat(action.fieldIds)};
    }   
    case EXCLUDE_ALL: {
        return {...state, included: []};
    }
    case BLUR_RECORD: {
        return {...state, record_data: state.record_data.concat({position: action.index, data: action.recordData})};
    }
    case 'UPDATE_FORM_SUCCEEDED': { 
        return {...state, form: action.form};
    }

    case 'ADD_FILE_TO_FORM_SUCCESS': {
    	return {...state, showFileToastr: action.fileName}
    }


    case 'GET_CURRENT_TABLE_AND_VIEW_SUCCEEDED' : {
        return {...state, table: action.payload.table, view: action.payload.view};
    }

    default:
        return state;
    }
}
