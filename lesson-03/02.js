const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const orange = words.indexOf("апельсин");

if (orange !== -1) {
  console.log("Ура! нашел");
} else {
  console.log("Придется поискать в другом магазине...");
}
