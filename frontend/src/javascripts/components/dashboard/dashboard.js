import Tools from './tools/tools';
import { connect } from 'react-redux';
import { getBaseById, addTable, switchTable, closeMenu, checkTableName,
    setActive, togglePopup, openMenu, setTabsModal, updateTable, addRecord, addField, deleteTable,
    selectRecordItem, activateRecord, changeRecord, blurRecord, blurRecordComponent,
    changeFieldType, changeFieldOptions, openRecordDialog, addComment, getCoworkersList, setTableIdToActiveModal,
    changeSearch, changeSearchFoundIndex, toggleSearch, changeFieldName, deleteRecord, deleteField,
    changeView, addSort, removeFilter, uploadAttachment, deleteFile, disconnectSocket,
    addView, deleteView, addFilter, updateFilter, setSelectFieldRecordItems, appendSelectFieldRecordItems, setSelectAllRecordItems,
    setSelectRecordItems, shiftKeyDown, shiftKeyUp, clearSelectedRecordItemList, mouseDownRecordItem,
    mouseUpRecordItem, mouseOverRecordItem, removeAllFilters, getMembersByBaseId, updateViewHideField,
	addTableSucceed, deleteTableSuccess, updateTableSuccess, addRecordSuccess, updateFieldSucceeded,
	deleteFieldSuccess, deleteRecordSuccess, updateSort, removeSort, removeAllSorts, deleteComment
} from './dashboardActions';

import { getCurrentUser } from '../userProfile/userProfileActions';
import { updateKanbanView } from '../view/kanban/kanbanViewActions'

const mapStateToProps = (state, ownProps) => {
	const currentRole = R.find(R.propEq('userId', R.path(['user', '_id'], state.userProfile)))(state.dashboardReducer.members)
    return ({
        base: state.dashboardReducer.base,
        menu: state.baseStore.showMenuforBase,
        tables: state.dashboardReducer.tables,
        activeModal: state.dashboardReducer.activeModal,
        baseId: ownProps.params.baseId,
        currentTableId: ownProps.params.tableId,
        currentView: state.dashboardReducer.currentView,
        addPopupIsOpen: state.dashboardReducer.addPopupIsOpen,
        renameIsError: state.dashboardReducer.renameIsError,
        selectedRecordItemId: state.dashboardReducer.selectedRecordItemId,
        activeRecordItemId: state.dashboardReducer.activeRecordItemId,
        recordDialogIndex: state.dashboardReducer.recordDialogIndex,
        searchMatchedRecordItemIdList: state.dashboardReducer.searchMatchedRecordItemIdList,
        searchFoundIndex: state.dashboardReducer.searchFoundIndex,
        searchBlockOpen: state.dashboardReducer.searchBlockOpen,
        coworkers: state.dashboardReducer.coworkers,
        collaborators: state.dashboardReducer.collaborators,
        tableIdActiveModal: state.dashboardReducer.tableIdActiveModal,
        user: state.userProfile.user,
        filteredRecords: state.dashboardReducer.filteredRecords,
        selectedRecordItemList: state.dashboardReducer.selectedRecordItemList,
        isShiftKeyPressed: state.dashboardReducer.isShiftKeyPressed,
        isMouseDownPressed: state.dashboardReducer.isMouseDownPressed,
        members: state.dashboardReducer.members,
	    currentRole: R.path(['role'], currentRole)
    });
};

const mapDispatchToProps = {
	deleteRecordSuccess: deleteRecordSuccess,
	deleteFieldSuccess: deleteFieldSuccess,
	updateFieldSucceeded: updateFieldSucceeded,
	addRecordSuccess: addRecordSuccess,
	updateTableSuccess: updateTableSuccess,
	deleteTableSuccess: deleteTableSuccess,
	addTableSucceed: addTableSucceed,
    addTableClick: addTable,
    switchTableClick: switchTable,
    getBaseCurrent: getBaseById,
    setActive: setActive,
    togglePopup: togglePopup,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setTabsModal: setTabsModal,
    checkTableName: checkTableName,
    updateTable: updateTable,
    deleteTable: deleteTable,
    addField: addField,
    addRecord: addRecord,
    selectRecordItem: selectRecordItem,
    activateRecord: activateRecord,
    changeRecord: changeRecord,
    blurRecord: blurRecord,
    blurRecordComponent: blurRecordComponent,
    changeFieldType: changeFieldType,
    openRecordDialog: openRecordDialog,
    addComment: addComment,
    getUser: getCurrentUser,
    getCoworkersList: getCoworkersList,
    setTableIdToActiveModal: setTableIdToActiveModal,
    changeSearch: changeSearch,
    changeSearchFoundIndex: changeSearchFoundIndex,
    toggleSearch: toggleSearch,
    changeView: changeView,
    changeFieldName: changeFieldName,
    changeFieldOptions: changeFieldOptions,
    updateViewHideField: updateViewHideField,
    deleteField: deleteField,
    deleteRecord: deleteRecord,
    uploadAttachment: uploadAttachment,
    deleteFile: deleteFile,
    disconnectSocket: disconnectSocket,
    addView: addView,
    deleteView: deleteView,
    addFilter: addFilter,
    updateFilter: updateFilter,
    removeFilter: removeFilter,
    removeAllFilters: removeAllFilters,
    addSort: addSort,
    updateSort: updateSort,
    removeSort: removeSort,
    removeAllSorts: removeAllSorts,
    setSelectFieldRecordItems: setSelectFieldRecordItems,
    appendSelectFieldRecordItems: appendSelectFieldRecordItems,
    setSelectAllRecordItems: setSelectAllRecordItems,
    setSelectRecordItems: setSelectRecordItems,
    shiftKeyDown: shiftKeyDown,
    shiftKeyUp: shiftKeyUp,
    clearSelectedRecordItemList: clearSelectedRecordItemList,
    mouseDownRecordItem: mouseDownRecordItem,
    mouseUpRecordItem: mouseUpRecordItem,
    mouseOverRecordItem: mouseOverRecordItem,
    updateKanbanView: updateKanbanView,
    getMembersByBaseId: getMembersByBaseId,
	deleteComment: deleteComment
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tools);

export default Dashboard;