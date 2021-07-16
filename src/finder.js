// Insert width or heigth and return an interval
const coordInterval = (size) => (coord) => {
  const maxCoord = coord + size / 2;
  const minCoord = coord - size / 2;
  const isInReferential = (value) => (value <= 0 ? 0 : value);
  return [isInReferential(minCoord), isInReferential(maxCoord)];
};
// Checks if character is within target box with specified size
const finder = (charCoord, target, size) => {
  // Specify interval size for width and heigh
  const widthInterval = coordInterval(size[0]);
  const heigthInterval = coordInterval(size[1]);
  // Build target box
  const targetBox = {
    x: widthInterval(target[0]),
    y: heigthInterval(target[1]),
  };
  const isInInterval = (limit, value) =>
    value > limit[0] && value < limit[1];
  return (
    isInInterval(targetBox.x, charCoord[0]) &&
    isInInterval(targetBox.y, charCoord[1])
  );
};

export { coordInterval, finder };
