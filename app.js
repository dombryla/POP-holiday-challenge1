class ColorTree {
  constructor(color, tone, colorTree) {
    this.color = color;
    this.tone = tone;
    this.colorTree = colorTree;
    this.colorIndex = 0;
    this.toneIndex = 0;
    this.bfsIndex = 0;
  }

  nextColor() {
    return this.bfs(++this.bfsIndex);
  }
  previousColor() {
    return this.bfs(--this.bfsIndex);
  }

  bfs(index) {
    let node = this.colorTree;
    const allColors = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      node.map((item) => {
        item.colorTree ? queue.push(item.colorTree) : allColors.push(item.tone);
      });
    }
    this.setBfsIndex(index, allColors.length - 1);
    return allColors[index];
  }

  setBfsIndex(index, scope) {
    if (index < 0) {
      this.bfsIndex = scope;
      return scope;
    }
    if (index > scope) {
      this.bfsIndex = 0;
      return 0;
    }
  }
}

const blueChildren = [
  new ColorTree("blue", "#1E3A8A", null),
  new ColorTree("blue", "#1D4ED8", null),
  new ColorTree("blue", "#3B82F6", null),
  new ColorTree("blue", "#60A5FA", null),
];
const greenChildren = [
  new ColorTree("green", "#064E3B", null),
  new ColorTree("green", "#065F46", null),
  new ColorTree("green", "#10B981", null),
  new ColorTree("green", "#6EE7B7", null),
];
const redChildren = [
  new ColorTree("red", "#7F1D1D", null),
  new ColorTree("red", "#B91C1C", null),
  new ColorTree("red", "#EF4444", null),
  new ColorTree("red", "#FCA5A5", null),
];
const yellowChildren = [
  new ColorTree("yellow", "#9e9e01", null),
  new ColorTree("yellow", "#cece04", null),
  new ColorTree("yellow", "#f4f430", null),
  new ColorTree("yellow", "#f9f99d", null),
];
const greyChildren = [
  new ColorTree("grey", "#111827", null),
  new ColorTree("grey", "#374151", null),
  new ColorTree("grey", "#6B7280", null),
  new ColorTree("grey", "#9CA3AF", null),
];
const brownChildren = [
  new ColorTree("brown", "#6d2d02", null),
  new ColorTree("brown", "#ad5e29", null),
  new ColorTree("brown", "#e59560", null),
  new ColorTree("brown", "#efc1a2", null),
];

const colorTree = [
  new ColorTree("blue", null, blueChildren),
  new ColorTree("green", null, greenChildren),
  new ColorTree("red", null, redChildren),
  new ColorTree("yellow", null, yellowChildren),
  new ColorTree("grey", null, greyChildren),
  new ColorTree("brown", null, brownChildren),
];

const root = new ColorTree(null, null, colorTree);

document.body.style.backgroundColor = root.nextColor();

window.onwheel = (event) => {
  if (event.deltaY > 0) {
    document.body.style.backgroundColor = root.previousColor();
  } else {
    document.body.style.backgroundColor = root.nextColor();
  }
};
