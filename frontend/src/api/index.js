import axios from "axios";

import { employeeUrl, departmentUrl } from "./paths";

export function getAllEmployees() {
  return new Promise((resolve, reject) => {
    axios
      .get(employeeUrl)
      .then((response) => resolve(response.data))
      .catch((e) => reject(e));
  });
}

export function getAllDepartments() {
  return new Promise((resolve, reject) => {
    axios
      .get(departmentUrl)
      .then((response) => resolve(response.data))
      .catch((e) => reject(e));
  });
}

export function createEmployee(employeeData) {
  return new Promise((resolve, reject) => {
    axios
      .post(employeeUrl, employeeData)
      .then((response) => resolve(response.data))
      .catch((e) => reject(e));
  });
}

export function createDepartment(departmentData) {
  return new Promise((resolve, reject) => {
    axios
      .post(departmentUrl, departmentData)
      .then((response) => resolve(response.data))
      .catch((e) => reject(e));
  });
}
