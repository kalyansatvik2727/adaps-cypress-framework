export var loginpage = {
    input: {
        username: 'input[name=txtUsername]',
        password: 'input[name=txtPassword]'
    },
    button: {
        loginButton: '#btnLogin'
    }
}

export var homepage = {
    links: {
        subscriber: '#Subscriber_link'
    }

}

export var assignleave = {
    input: {
        employeename: 'input[name="assignleave[txtEmployee][empName]"]',
    },
    button: {
        loginButton: 'input[value=LOGIN]',
        assign: '#assignBtn'
    },
    select: {
        leavetype: 'select[name="assignleave[txtLeaveType]"]'
    },
    links: {
        viewdetails: '#leaveBalance_details_link'
    },
    datePicker: {
        fromdate: '#assignleave_txtFromDate',
        todate: '#assignleave_txtToDate'
    }

}

export var timesheets = {
    input: {
        employeename: '#employee',
        projectname: '#initialRows_0_projectName',
        mon: '#initialRows_0_0',
        tue: '#initialRows_0_1',
        wed: '#initialRows_0_2',
        thu: '#initialRows_0_3',
        fri: '#initialRows_0_4',
    },
    button: {
        viewButton: '#btnView',
        addTimesheetButton: '#btnAddTimesheet',
        saveButton: '#submitSave',
        editButton: '#btnEdit'
    },
    select: {
        activityname: '#initialRows_0_projectActivityName'
    },
    datePicker: {
        selectDate: '#time_date'
    }
}

export var usermanagementpage = {

    input: {
        employeename: '#systemUser_employeeName_empName',
        username: '#systemUser_userName',
        password: '#systemUser_password',
        confirmPassword: '#systemUser_confirmPassword'
    },
    select: {
        usertype: '#systemUser_userType'
    },
    button: {
        save: '#btnSave'
    },
    div: {
        systemusers: '#systemUser-information'
    },
    systemsuers: {
        username: '#searchSystemUser_userName',
        searchButton: '#searchBtn',
        searchResultsCheckbox: '#ohrmList_chkSelectAll',
        records: 'tbody tr',
        deleteButton: '#btnDelete',
        popupOkButton: '#dialogDeleteBtn'
    }

}

export var recruitmentpage = {
    select: {
        jobtitle: '#candidateSearch_jobTitle',
        vacancy: '#candidateSearch_jobVacancy',
        hiringmanager: '#candidateSearch_hiringManager',
        status: '#candidateSearch_status',
        records: 'tbody tr'
    },
    button: {
        search: '#btnSrch'

    }
}

