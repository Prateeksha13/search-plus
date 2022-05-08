export const products = {
  "iPhone 13": {
    id: "p1",
    name: "iPhone 13",
    models: [
      {
        id: "p1m1",
        name: "iPhone 13",
        finish: ["Green", "Pink", "Blue", "Midnight", "Starlight", "Red"],
        storage: ["128 GB", "256 GB", "512 GB"],
        display: "",
      },
      {
        id: "p1m2",
        name: "iPhone 13 Mini",
        finish: ["Green", "Pink", "Blue", "Midnight", "Starlight", "Red"],
        storage: ["128 GB", "256 GB", "512 GB"],
      },
    ],
  },
  "iPhone 13 Pro": {
    id: "p2",
    name: "iPhone 13 Pro",
    models: [
      {
        id: "p2m1",
        name: "iPhone 13 Pro",
        finish: ["Alpine Green", "Silver", "Gold", "Graphite", "Sierra Blue"],
        storage: ["128 GB", "256 GB", "512 GB", "1 TB"],
        display: "6.1 inch",
      },
      {
        id: "p2m2",
        name: "iPhone 13 Pro Max",
        finish: ["Green", "Silver", "Gold", "Graphite", "Sierra Blue"],
        storage: ["128 GB", "256 GB", "512 GB", "1 TB"],
        display: "6.7 inch",
      },
    ],
  },
};

export const locations = [
  {
    name: "United States",
    type: "country",
    query: "location:united%20states&store=",
  },
  {
    name: "Ohio, United States",
    country: "United States",
    type: "administrative_area",
  },
  {
    name: "California, United States",
    country: "United States",
    type: "administrative_area",
  },
];

export const stores = [
  {
    id: "r001",
    name: "Crocker Park",
    address: [
      "267 Crocker Park Boulevard, Westlake, OH 44145",
      "(440) 788-2800",
    ],
    administrative_area: "Ohio, United States",
    locality: "Westlake",
    country: "United States",
  },
  {
    id: "r002",
    name: "Eastern Town Center",
    address: ["4210 The Strand, Columbus, OH 43219", "(614) 934-2810"],
    administrative_area: "Ohio, United States",
    locality: "Columbus",
    country: "United States",
  },
  {
    id: "r003",
    name: "Eton",
    address: ["28849 Chagrin Boulevard, Woodmere, OH 44122", "(216) 535-4560"],
    administrative_area: "Ohio, United States",
    locality: "Woodmere",
    country: "United States",
  },
  {
    id: "r004",
    name: "Franklin Park Mall",
    address: ["5001 Monroe Street, Toledo, OH 43623", "(419) 473-4250"],
    administrative_area: "Ohio, United States",
    locality: "Toledo",
    country: "United States",
  },
];

export const inventory = [
  {
    id: "inventory0001",
    product: "iPhone 13 Pro",
    store_id: "r001",
    model: "iPhone 13 Pro",
    finish: "Alpine Green",
    storage: "256 GB",
    stock: 2,
  },
  {
    id: "inventory0002",
    product: "iPhone 13 Pro",
    store_id: "r001",
    model: "iPhone 13 Pro",
    finish: "Alpine Green",
    storage: "512 GB",
    stock: 5,
  },
  {
    id: "inventory0003",
    product: "iPhone 13",
    store_id: "r001",
    model: "iPhone 13",
    finish: "Pink",
    storage: "512 GB",
    stock: 4,
  },
  {
    id: "inventory0004",
    product: "iPhone 13 Pro",
    store_id: "r002",
    model: "iPhone 13 Pro",
    finish: "Alpine Green",
    storage: "512 GB",
    stock: 15,
  },
  {
    id: "inventory0005",
    product: "iPhone 13",
    store_id: "r001",
    model: "iPhone 13 Mini",
    finish: "Green",
    storage: "128 GB",
    stock: 4,
  },
];
