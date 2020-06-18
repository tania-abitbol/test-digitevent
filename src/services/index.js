export const getFactApi = (month, day) => {
  return fetch(`http://localhost:8000/${month}/${day}`).then((resp) =>
    resp.json()
  );
};
