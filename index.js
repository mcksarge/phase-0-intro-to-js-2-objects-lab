const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let removeEmployee = {...employee};
    delete removeEmployee[key];
    return removeEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

