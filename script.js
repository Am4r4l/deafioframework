//  escolhi dar fetch em todos os campos menos o "UserId" pois esse tipo de informação geralmente não é exibida publicamente e só é usado internamente pela empresa para manusear os cadastros de usuário

const urlPosts = `https://jsonplaceholder.typicode.com/posts`
fetch(urlPosts)
  .then(response => response.json())
    .then(json => {
    console.log(json);
    if (json.length > 0) {

    let posts = "";
    json.forEach((itemData) => {
            posts += "<tr>";
            posts += "<td>" + itemData.id + "</td>";
            posts += "<td>" + itemData.title + "</td>";
            posts += "<td>" + itemData.body + "</td></tr>";
          });
          document.getElementById("tbody-posts").innerHTML = posts
        }
      }
    )

const urlAlbuns = `https://jsonplaceholder.typicode.com/albums`
fetch(urlAlbuns)
  .then(response => response.json())
    .then(json => {
    console.log(json);
    if (json.length > 0) {

    let albuns = "";
    json.forEach((itemData) => {
            albuns += "<tr>";
            albuns += "<td>" + itemData.id + "</td>";
            albuns += "<td>" + itemData.title + "</td></tr>";
          });
          document.getElementById("tbody-albuns").innerHTML = albuns
        }
      }
    )

const urlToDos = `https://jsonplaceholder.typicode.com/todos`
fetch(urlToDos)
  .then(response => response.json())
    .then(json => {
    console.log(json);
    if (json.length > 0) {

    

    let toDos = "";
    json.forEach((itemData) => {
            toDos += "<tr>";
            toDos += "<td>" + itemData.id + "</td>";
            toDos += "<td>" + itemData.title + "</td>";
            toDos += "<td>" + itemData.completed + "</td></tr>";
          });
          document.getElementById("tbody-to-dos").innerHTML = toDos
        }
      }
    )

let teste = "teste de troca de branch"


