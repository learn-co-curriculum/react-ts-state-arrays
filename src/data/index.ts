interface Food {
  id?: number;
  name: string;
  cuisine: string;
  heatLevel: number;
}

const spicyFoods: Food[] = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

let nextId = 3;

const newSpicyFoods: Food[] = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

// Get one random spicy food from the array
function getNewRandomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood: Food = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

export { spicyFoods, getNewRandomSpicyFood };
