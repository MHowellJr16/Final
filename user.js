localStorage.getItem("userId");

async function main() {
  const id = localStorage.getItem("userId");
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const postsData = posts.json();

  console.log(postsData);
}

main();