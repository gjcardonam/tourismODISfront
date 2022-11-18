import { Ivalues } from "../interfaces/Iform";

export function handleSubmit(values: Ivalues): any {
  const formResponse = JSON.stringify(values);
  const backResponse = fetch("http://localhost:3001/", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: formResponse,
  }).then((response) => response.json().then((data) => console.log(data)));
}
