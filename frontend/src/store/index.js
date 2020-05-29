import { observable } from "mobx";
import { getAllEmployees } from "api";

const store = observable({
  employees: [],
  fetchStatus: {
    employees: false,
  },
  loadEmployees: () => {
    if (!store.fetchStatus.employees) {
      store.fetchStatus.employees = true;
      getAllEmployees().then((data) => {
        store.employees = data;
      });
    }
  },
});

export default store;
