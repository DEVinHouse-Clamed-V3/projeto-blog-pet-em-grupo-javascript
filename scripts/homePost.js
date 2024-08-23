function loadPosts() {
  const postsLocalStorage = JSON.parse(localStorage.getItem("posts"));

  const postList = document.getElementById("posts-in");

  postsLocalStorage.forEach((each_post) => {
    const div = document.createElement("div");
    div.classList.add("post-item");

    const img = document.createElement("img");
    img.setAttribute("width", "100px");
    img.setAttribute("src", each_post.foto);

    div.append(img);

    const h3 = document.createElement("h3");
    h3.innerText = each_post.titulo;

    div.append(h3);

    const description = document.createElement("span");
    description.innerText = each_post.descricao;

    div.append(description);

    const currentePostDate = document.createElement("span");
    currentePostDate.classList.add("post-date");
    currentePostDate.innerText = each_post.dataCriacao;

    div.append(currentePostDate);

    postList.append(div);
  });
}

document.addEventListener("DOMContentLoaded", loadPosts);
