let ulNode = document.querySelector("ul")
let name = document.querySelector(".id")
let photo = document.querySelector(".avatar")


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/kcook236");
req.addEventListener("load", githubData)
req.send();


function githubData() {
  let data = JSON.parse(this.responseText)
  let dataString = `
  <li>Name: ${data.name}</li>
  <li>Github URL ${data.html_url}</li>
  <li>Email: ${data.email}</li>
  <li>Company: ${data.company}</li>
  <li>Website: ${data.url}</li>
  `
  let top = `
  <h1>${data.name}</h1>
  `

  let headshot =  `
  <img src="${data.avatar_url}" alt="photo"</img>
  `
  ulNode.innerHTML = dataString
  name.innerHTML = top
  photo.innerHTML = headshot

  console.log(data)
}
