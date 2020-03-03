

console.clear();
const items = [];
function makeItem(name, category) {
  const item = {};
  item.name = name;
  item.category = category;
  item.column = "";
  item.id = items.length;
  items.push(item);
}

makeItem("A", "play");
makeItem("A#/Bb", "play");
makeItem("B", "play");
makeItem("C", "play");
makeItem("C#/Db", "play");
makeItem("D", "play");
makeItem("D#/Eb", "play");
makeItem("E", "play");
makeItem("F", "play");
makeItem("F#/Gb", "play");
makeItem("G", "play");
makeItem("G#/Ab", "play");


addItemsToMain();

function addItemsToMain() {
  for (let i = 0; i < items.length; i++) {
    console.log(i, items[i]);
    const ul = document.getElementById("main");
    const li = document.createElement("li");
    li.setAttribute("data-id", items[i].id);
    textnode = document.createTextNode(items[i].name);
    li.appendChild(textnode);
    ul.appendChild(li);
  }
}
function doOnEnd(e) {
  const column = e.to.id;
  const item = e.item.getAttribute('data-id');
  items[item].column = column;
  let score = 0;
  for(let i = 0; i<items.length; i++){
    if(items[i].category === items[i].column){
      score = score + 1;
    }
  }
  console.log(score)
  document.getElementById("score").textContent = score;
}

new Sortable(main, {
  animation: 150,
  ghostClass: "dragClass",
  group: {
    name: "r1",
    put: true
  },
  sort: false,
  swapThreshold: 1,
  onEnd: doOnEnd
});

new Sortable(play, {
  animation: 150,
  ghostClass: "dragClass",
  group: {
    name: "r1",
    put: true
  },
  swapThreshold: 1,
  onEnd: doOnEnd
});





