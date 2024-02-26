// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
  },
  {
    name: "Emily Johnson",
    coins: 50,
  },
  {
    name: "Michael Williams",
    coins: 50,
  },
  {
    name: "Jessica Brown",
    coins: 50,
  },
  {
    name: "Christopher Jones",
    coins: 50,
  },
  {
    name: "Ashley Davis",
    coins: 50,
  },
  {
    name: "Matthew Miller",
    coins: 50,
  },
  {
    name: "Amanda Wilson",
    coins: 50,
  },
  {
    name: "David Moore",
    coins: 50,
  },
  {
    name: "Sarah Taylor",
    coins: 50,
  },
  {
    name: "James Anderson",
    coins: 50,
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
  },
  {
    name: "Robert Jackson",
    coins: 50,
  },
  {
    name: "Elizabeth White",
    coins: 50,
  },
  {
    name: "Daniel Harris",
    coins: 50,
  },
  {
    name: "Melissa Martin",
    coins: 50,
  },
  {
    name: "William Thompson",
    coins: 50,
  },
  {
    name: "Linda Garcia",
    coins: 50,
  },
  {
    name: "Joseph Martinez",
    coins: 50,
  },
  {
    name: "Karen Robinson",
    coins: 50,
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 95,
    height: 105,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 250,
    color: "grey",
    habitat: "land",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 110,
    height: 112,
    color: "yellow",
    habitat: "land",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 120,
    height: 98,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 99,
    height: 111,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 150,
    height: 85,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 111,
    height: 40,
    color: "black",
    habitat: "sea",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 122,
    height: 97,
    color: "white",
    habitat: "land",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 123,
    height: 95,
    color: "yellow",
    habitat: "land",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  // console.log(visitors);
}
generateDataset();

//********************** */
function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
