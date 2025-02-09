import { observable } from "mobx";
import {
  getAllDepartments,
  getAllEmployees,
  createEmployee,
  createDepartment,
} from "api";

const store = observable({
  employees: [],
  departments: [],
  fetchStatus: {
    employees: false,
    departments: false,
  },
  loadEmployees: () => {
    if (!store.fetchStatus.employees) {
      store.fetchStatus.employees = true;
      getAllEmployees().then((data) => {
        store.employees = data;
      });
    }
  },
  loadDepartments: () => {
    if (!store.fetchStatus.departments) {
      store.fetchStatus.departments = true;
      getAllDepartments().then((data) => {
        store.departments = data;
      });
    }
  },
  createEmployee: (data) => {
    return new Promise((resolve, reject) => {
      createEmployee(data)
        .then(() => {
          store.fetchStatus.employees = false;
          resolve();
        })
        .catch(() => reject());
    });
  },
  createDepartment: (data) => {
    return new Promise((resolve, reject) => {
      createDepartment(data)
        .then(() => {
          resolve();
        })
        .catch(() => reject())
        .finally(() => {
          store.fetchStatus.departments = false;
          store.loadDepartments();
        });
    });
  },
});

export default store;
