// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  const {limit, skip, total, users} = data;
  let userArray = users.map((ele) => {
    return {
      "firstName": ele.firstName,
      "lastName": ele.lastName,
      "age": ele.age,
      "bloodGroup": ele.bloodGroup
    }
  })
  console.log(userArray);
}

fetchDataFromServer();
