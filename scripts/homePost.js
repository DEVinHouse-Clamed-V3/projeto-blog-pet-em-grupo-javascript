function loadPosts() {
  const postsLocalStorage = JSON.parse(
    localStorage.getItem("name-item-localStorage")
  );
}

document.addEventListener("DOMContentLoaded", loadPosts);
