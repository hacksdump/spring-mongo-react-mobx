import { observable } from "mobx";
import { getAllDepartments, getAllEmployees, createEmployee } from "api";

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
});

export default store;
