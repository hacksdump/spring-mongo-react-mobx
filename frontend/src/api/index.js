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
