$(document).ready(() => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: (resp) => {
      resp.forEach((ele) => {
        let res = "<tbody><tr>";
        res += `<td>${ele.id}</td>`;
        res += `<td>${ele.name}</td>`;
        res += `<td>${ele.username}</td>`;
        res += `<td>${ele.email}</td>`;
        res += `<td>${ele.phone}</td>`;
        res += `<td>${ele.website}</td>`;
        res += "</tr></tbody>";
        $("#mytable").append(res);
      });
    },
    error: (err) => {
      console.log(err);
    },
    async: false,
  });
  $("#mytable").DataTable();
});
