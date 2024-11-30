
var id = document.getElementById("id");
var nam = document.getElementById("name");
var email = document.getElementById("email");



function requestFunction() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send("");

    xhr.onreadystatechange = function () {
        // console.log("Test");
        if (xhr.readyState == 4) {
            // console.log("Request is ready");
            if (xhr.status == 200) {
                addData(JSON.parse(xhr.response));
            }
        }
    }
}

function addData(users) {
    //console.log(users.length);
    // console.log(users[0]["id"]);
    var info = ["id", "name", "email"];
    var tab = document.getElementById("tableData");

    for (var j = 0; j < users.length; j++) {
        var row = document.createElement("tr");
        tab.append(row);

        for (var i = 0; i < 4; i++) {
            var data = document.createElement("td");
            row.append(data);
            if (i == 3) {
                var link = document.createElement("a");
                link.innerHTML = "<a>View Details</a>";
                link.setAttribute("color", "orange");
                link.setAttribute("href", "#details");
                link.setAttribute("id", "aLink");
                //console.log(link);
                data.append(link);
                link.addEventListener("click", (function (j) {
                    return function() {
                        id.innerText = "id= " + users[j].id;
                    nam.innerText = "name= "+users[j].name;
                    email.innerText="email= "+users[j].email;
                    };
                    
                })(j));
            } else {
                data.append(users[j][info[i]]);
            }


        }
    }
 

}


