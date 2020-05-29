import axios from "axios";

import { employeeUrl } from "./paths";

export function getAllEmployees() {
  return new Promise((resolve, reject) => {
    axios
      .get(employeeUrl)
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
