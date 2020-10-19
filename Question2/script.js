$(document).ready(() => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: (resp) => {
      $("#mytable").append("<tbody>");
      resp.forEach((ele) => {
        let row = "<tr>";
        row += `<td>${ele.id}</td>`;
        row += `<td>${ele.name}</td>`;
        row += `<td>${ele.username}</td>`;
        row += `<td>${ele.email}</td>`;
        row += `<td>${ele.phone}</td>`;
        row += `<td>${ele.website}</td>`;
        row += "</tr>";
        $("#mytable").append(row);
      });
      $("#mytable").append("</tbody>");
    },
    error: (err) => {
      console.log(err);
    },
    async: false,
  });
  $("#mytable").DataTable();
});
