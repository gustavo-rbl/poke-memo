// https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number
// 251 up to gen 2
const maxPokedexNum = 251;

const GenerateIDSRecursive = (quantity: number, array: number[] = []): number[] => {
  if (array.length === quantity) {
    return array;
  }

  const id = Math.floor(Math.random() * maxPokedexNum) + 1;

  if (!array.includes(id)) {
    array.push(id);
  }

  GenerateIDSRecursive(quantity, array);
  return array;
};

export default GenerateIDSRecursive;
