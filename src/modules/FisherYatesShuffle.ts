function FisherYatesShuffle(
  array: {
    id: string;
    name: string;
    img: string;
    isShiny: boolean;
    isClicked: boolean;
  }[]
) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default FisherYatesShuffle;
