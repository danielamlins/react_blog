export function deletePost(id) {
    let localData = JSON.parse(localStorage.getItem("blogData"));
    localData.forEach((el, index) => {
      if (el.id === id) {
        console.log(index);
        localData.splice(index, 1);
      }
    });
    localStorage.setItem("blogData", JSON.stringify(localData));
  }

  
export function addStorage(item) {
  let data = JSON.parse(localStorage.getItem("blogData"));
  console.log(typeof data);
  if (data === null) {
    localStorage.setItem("blogData", "[" + JSON.stringify(item) + "]");
    localStorage.setItem("blogId", "0");
  } else {
    data.push(item);
    localStorage.setItem("blogData", JSON.stringify(data));

    updateId();
  }
//   localStorage.clear();
}

function updateId() {
  let number = localStorage.getItem("blogId");
  localStorage.setItem("blogId", `${(+number + 1).toString()}`);
}

export function getDateTime() {
  let date = new Date();
  return (
    date.getDate() +
    "." +
    (date.getMonth() + 1).toString().padStart(2, 0) +
    "." +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
  );
}