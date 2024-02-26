// inputs
const searchAnimalName = document.getElementById("name-search");
const searchAnimalWeight = document.getElementById("weight-search");
const searchAnimalHeight = document.getElementById("height-search");
const colorSearch = document.getElementById("color-search");

const habitatSearchLand = document.getElementById("land-search");
const habitatSearchSea = document.getElementById("sea-search");
const pradatorSearchTrue = document.getElementById("is-pradator");
const pradatorSearchFalse = document.getElementById("not-pradator");

// reset button
const clearBt = document.getElementById("clear-bt");

const setupApp = () => {
  console.log("Setting up the app");
  const animalsOriginalArray = JSON.parse(localStorage.getItem("animals")) || [];
  let animalsFilteredArray = JSON.parse(localStorage.getItem("filterd array")) || [...animalsOriginalArray];
  localStorage.setItem("filterd array", JSON.stringify(animalsFilteredArray));

  // create util function generic to filter array
  const filterAnimals = (e, inpType, checkboxValue) => {
    // let newArray = animalsFilteredArray.filter((animal) => {
    //   if (inpType === "weight" || inpType === "height")
    //     return animal[inpType] > e.target.value;
    //   if (inpType === "habitat") return animal[inpType] === checkboxValue;
    //   if (inpType === "isPredator") return animal[inpType] === checkboxValue;
    //   return animal[inpType]
    //     .toLowerCase()
    //     .includes(e.target.value.toLowerCase());
    // });
    return applyFilter(newArray);
  };

  const applyFilter = (newFilteredData) => {
    console.log("newFilteredData", newFilteredData);

    // animalsFilteredArray = [...newArray];
    // localStorage.setItem("filterd array", JSON.stringify(newArray));
  };
  // add event listeners
  searchAnimalName.addEventListener("input", (e) => filterAnimals(e, "name"));
  searchAnimalWeight.addEventListener("input", (e) =>
    filterAnimals(e, "weight")
  );
  searchAnimalHeight.addEventListener("input", (e) =>
    filterAnimals(e, "height")
  );
  colorSearch.addEventListener("input", (e) => filterAnimals(e, "color"));
  habitatSearchLand.addEventListener("input", (e) =>
    filterAnimals(e, "habitat", "land")
  );
  habitatSearchSea.addEventListener("input", (e) =>
    filterAnimals(e, "habitat", "sea")
  );
  pradatorSearchTrue.addEventListener("input", (e) =>
    filterAnimals(e, "isPredator", true)
  );
  pradatorSearchFalse.addEventListener("input", (e) =>
    filterAnimals(e, "isPredator", false)
  );

  // clear button
  clearBt.addEventListener("click", (e) => {
    animalsFilteredArray = [...animalsOriginalArray];
    localStorage.setItem("filterd array", JSON.stringify(animalsFilteredArray));
    searchAnimalName.value = "";
    searchAnimalWeight.value = "";
    searchAnimalHeight.value = "";
    colorSearch.value = "";
    habitatSearchLand.checked = false;
    habitatSearchSea.checked = false;
    pradatorSearchTrue.checked = false;
    pradatorSearchFalse.checked = false;
  });
};

setupApp();
