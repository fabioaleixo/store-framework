fetch("https://jussilabs.fabiopeixoto.com.br/api/dataentities/fabioaleixo/schemas/test", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "false"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});