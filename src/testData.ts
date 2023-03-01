import { TableHeaderType } from "./tableTypes";

const INVENTORIES_DATA = [
  {
    item_name: "Rosemary - Primerba, Paste",
    unit: "MNT",
    committed_stock: 58,
    stock_in_hand: 29,
    warehouse: "Jargalant",
    status: false,
    adjust: 72,
  },
  {
    item_name: "Puree - Mango",
    unit: "PHP",
    committed_stock: 23,
    stock_in_hand: 92,
    warehouse: "Calumpang",
    status: false,
    adjust: 95,
  },
  {
    item_name: "Cake - Cake Sheet Macaroon",
    unit: "CNY",
    committed_stock: 49,
    stock_in_hand: 66,
    warehouse: "Tianjin",
    status: true,
    adjust: 86,
  },
  {
    item_name: "Food Colouring - Blue",
    unit: "CNY",
    committed_stock: 29,
    stock_in_hand: 53,
    warehouse: "Xipu",
    status: false,
    adjust: 96,
  },
  {
    item_name: "Flower - Commercial Bronze",
    unit: "CZK",
    committed_stock: 94,
    stock_in_hand: 11,
    warehouse: "Seč",
    status: true,
    adjust: 74,
  },
  {
    item_name: "Flour - Strong",
    unit: "ETB",
    committed_stock: 54,
    stock_in_hand: 59,
    warehouse: "Bako",
    status: true,
    adjust: 86,
  },
  {
    item_name: "Venison - Racks Frenched",
    unit: "CNY",
    committed_stock: 55,
    stock_in_hand: 78,
    warehouse: "Damiao",
    status: false,
    adjust: 36,
  },
  {
    item_name: "Beef - Texas Style Burger",
    unit: "CNY",
    committed_stock: 99,
    stock_in_hand: 11,
    warehouse: "Shimen",
    status: true,
    adjust: 44,
  },
  {
    item_name: "Syrup - Monin - Passion Fruit",
    unit: "EUR",
    committed_stock: 15,
    stock_in_hand: 44,
    warehouse: "Áyios Vasílios",
    status: true,
    adjust: 56,
  },
  {
    item_name: "Lettuce - Treviso",
    unit: "EUR",
    committed_stock: 12,
    stock_in_hand: 5,
    warehouse: "Armação de Pêra",
    status: true,
    adjust: 33,
  },
  {
    item_name: "Chicken - Breast, 5 - 7 Oz",
    unit: "CNY",
    committed_stock: 61,
    stock_in_hand: 54,
    warehouse: "Henggang",
    status: false,
    adjust: 88,
  },
  {
    item_name: "Dried Peach",
    unit: "PYG",
    committed_stock: 23,
    stock_in_hand: 28,
    warehouse: "Doctor Juan León Mallorquín",
    status: false,
    adjust: 64,
  },
  {
    item_name: "Pepper - Red Bell",
    unit: "IDR",
    committed_stock: 14,
    stock_in_hand: 17,
    warehouse: "Kali",
    status: true,
    adjust: 83,
  },
  {
    item_name: "Sorrel - Fresh",
    unit: "EUR",
    committed_stock: 51,
    stock_in_hand: 90,
    warehouse: "Rautalampi",
    status: true,
    adjust: 58,
  },
  {
    item_name: "Kiwi Gold Zespri",
    unit: "PLN",
    committed_stock: 29,
    stock_in_hand: 95,
    warehouse: "Bełżyce",
    status: false,
    adjust: 70,
  },
  {
    item_name: "Beef Striploin Aaa",
    unit: "NOK",
    committed_stock: 35,
    stock_in_hand: 42,
    warehouse: "Bodø",
    status: true,
    adjust: 94,
  },
  {
    item_name: "Tomatillo",
    unit: "JMD",
    committed_stock: 26,
    stock_in_hand: 76,
    warehouse: "Port Maria",
    status: true,
    adjust: 34,
  },
  {
    item_name: "Cookie Trail Mix",
    unit: "RUB",
    committed_stock: 14,
    stock_in_hand: 4,
    warehouse: "Marks",
    status: true,
    adjust: 54,
  },
  {
    item_name: "Pancetta",
    unit: "CNY",
    committed_stock: 84,
    stock_in_hand: 90,
    warehouse: "Zaoshi",
    status: false,
    adjust: 6,
  },
  {
    item_name: "Ice - Clear, 300 Lb For Carving",
    unit: "NGN",
    committed_stock: 73,
    stock_in_hand: 73,
    warehouse: "Zaria",
    status: false,
    adjust: 97,
  },
  {
    item_name: "Jello - Assorted",
    unit: "SEK",
    committed_stock: 10,
    stock_in_hand: 27,
    warehouse: "Gnosjö",
    status: false,
    adjust: 20,
  },
  {
    item_name: "Lamb Shoulder Boneless Nz",
    unit: "USD",
    committed_stock: 53,
    stock_in_hand: 46,
    warehouse: "Spring",
    status: false,
    adjust: 57,
  },
  {
    item_name: "Appetizer - Mango Chevre",
    unit: "CNY",
    committed_stock: 86,
    stock_in_hand: 48,
    warehouse: "Jiubao",
    status: true,
    adjust: 90,
  },
  {
    item_name: "Soup - Knorr, Chicken Noodle",
    unit: "CNY",
    committed_stock: 33,
    stock_in_hand: 68,
    warehouse: "Ciyun",
    status: true,
    adjust: 90,
  },
  {
    item_name: "Red Snapper - Fillet, Skin On",
    unit: "CNY",
    committed_stock: 93,
    stock_in_hand: 91,
    warehouse: "Pengwan",
    status: true,
    adjust: 46,
  },
];
const INVENTORIES_HEADERS: TableHeaderType[] = [
  {
    title: "item name",
    key: "item_name",
    type: "text",
  },
  {
    title: "unit",
    key: "unit",
    type: "select",
    selectOptions: [
      { text: "Hello1", value: "1" },
      { text: "Hello", value: "MNT" },
      { text: "Hello2", value: 2 },
    ],
    defaultCheck: "value",
    changeFunction: changeFunction,
  },
  {
    title: "committed stock",
    key: "committed_stock",
    type: "text",
  },
  {
    title: "stock in hand",
    key: "stock_in_hand",
    type: "input",
    inputType: "number",
    changeFunction: changeFunction,
  },
  {
    title: "warehouse",
    key: "warehouse",
    type: "text",
  },
  {
    title: "status",
    key: "status",
    type: "button",
    clickFunction: clickFunction,
  },
  {
    title: "adjust",
    key: "adjust",
    type: "text",
  },
];
export const TEST_INVENTORIES = {
  data: INVENTORIES_DATA,
  headers: INVENTORIES_HEADERS,
};

const CUSTOMERS_DATA = [
  {
    name: "Fina Bank",
    mobile: 8564795373,
    business: "Kuhlman-Klocko",
    image: "http://dummyimage.com/174x154.png/cc0000/ffffff",
  },
  {
    name: "Grazia Footer",
    mobile: 6678358103,
    business: "Fritsch Group",
    image: "http://dummyimage.com/97x148.png/dddddd/000000",
  },
  {
    name: "Janaya Whorlton",
    mobile: 9067813238,
    business: "Lemke, Jacobson and Harber",
    image: null,
  },
  {
    name: "Bird Boycott",
    mobile: 8586198752,
    business: "Kautzer and Sons",
    image: "http://dummyimage.com/148x85.png/cc0000/ffffff",
  },
  {
    name: "Rolf Pimme",
    mobile: 8131874094,
    business: "Metz Inc",
    image: "http://dummyimage.com/196x183.png/cc0000/ffffff",
  },
  {
    name: "Katerina Hendrikse",
    mobile: 9247580844,
    business: "Fay and Sons",
    image: "http://dummyimage.com/172x160.png/5fa2dd/ffffff",
  },
  {
    name: "Terri Dunan",
    mobile: 9335714426,
    business: "Rosenbaum LLC",
    image: "http://dummyimage.com/112x139.png/ff4444/ffffff",
  },
  {
    name: "Blakelee Aleksandrov",
    mobile: 9334203552,
    business: "Hodkiewicz-Veum",
    image: "http://dummyimage.com/140x190.png/ff4444/ffffff",
  },
  {
    name: "Mandy de Broke",
    mobile: 8153307958,
    business: "Stiedemann, Tremblay and Predovic",
    image: "http://dummyimage.com/170x96.png/dddddd/000000",
  },
  {
    name: "Andriana Pavel",
    mobile: 8837533077,
    business: "Bernhard-Hayes",
    image: null,
  },
  {
    name: "Woody Spiteri",
    mobile: 8994132176,
    business: "Braun Group",
    image: "http://dummyimage.com/187x199.png/cc0000/ffffff",
  },
  {
    name: "Noami Gonzales",
    mobile: 9008572991,
    business: "Prohaska and Sons",
    image: "http://dummyimage.com/189x58.png/cc0000/ffffff",
  },
  {
    name: "Thaine Lowson",
    mobile: 6506658922,
    business: "Anderson, Gleichner and Dach",
    image: "http://dummyimage.com/155x130.png/dddddd/000000",
  },
  {
    name: "Julieta Esland",
    mobile: 6888252628,
    business: "Fritsch, Glover and Denesik",
    image: "http://dummyimage.com/88x146.png/cc0000/ffffff",
  },
  {
    name: "Terrell Wooffitt",
    mobile: 6458910637,
    business: "Hintz, Sporer and O'Reilly",
    image: "http://dummyimage.com/101x116.png/cc0000/ffffff",
  },
  {
    name: "Marchelle Broker",
    mobile: 9688593708,
    business: "Franecki, Turner and Schoen",
    image: null,
  },
  {
    name: "Skye MacAindreis",
    mobile: 7597634906,
    business: "Murray-Kunde",
    image: "http://dummyimage.com/122x99.png/cc0000/ffffff",
  },
  {
    name: "Ariel Scutchings",
    mobile: 7487233479,
    business: "Kris Group",
    image: "http://dummyimage.com/91x197.png/ff4444/ffffff",
  },
  {
    name: "Anna Milhench",
    mobile: 6846981094,
    business: "Paucek-Schultz",
    image: "http://dummyimage.com/156x141.png/dddddd/000000",
  },
  {
    name: "Bailey Wilcocke",
    mobile: 9527258638,
    business: "Grant and Sons",
    image: "http://dummyimage.com/61x100.png/cc0000/ffffff",
  },
  {
    name: "Jabez Virgin",
    mobile: 8002017713,
    business: "Schneider and Sons",
    image: "http://dummyimage.com/113x73.png/cc0000/ffffff",
  },
  {
    name: "Waylan Cettell",
    mobile: 7306453558,
    business: "Rath, Wisoky and Wunsch",
    image: "http://dummyimage.com/127x174.png/dddddd/000000",
  },
  {
    name: "Rahal Emeny",
    mobile: 9827561479,
    business: "Yost-Ullrich",
    image: "http://dummyimage.com/90x73.png/ff4444/ffffff",
  },
  {
    name: "Hedvige O'Lochan",
    mobile: 6420771224,
    business: "Berge-O'Connell",
    image: "http://dummyimage.com/103x65.png/ff4444/ffffff",
  },
  {
    name: "Delphinia Valsler",
    mobile: 9715284478,
    business: "Powlowski Inc",
    image: "http://dummyimage.com/83x116.png/cc0000/ffffff",
  },
];
const CUSTOMERS_HEADERS: TableHeaderType[] = [
  {
    title: "name",
    key: "name",
    type: "text",
  },
  {
    title: "image",
    key: "image",
    type: "image",
  },
  {
    title: "business",
    key: "business",
    type: "text",
  },
  {
    title: "mobile",
    key: "mobile",
    type: "text",
  },
];
export const TEST_CUSTOMERS = {
  data: CUSTOMERS_DATA,
  headers: CUSTOMERS_HEADERS,
};

const SLOTS_DATA = [
  {
    from: "09:00 AM",
    to: "11:00 AM",
    order_before: "08:30 AM",
    order_after: "07:30 AM",
    order_limit: 76,
  },
  {
    from: "11:00 AM",
    to: "01:00 PM",
    order_before: "10:30 AM",
    order_after: "09:30 AM",
    order_limit: 443,
  },
  {
    from: "02:00 PM",
    to: "05:00 PM",
    order_before: "01:30 PM",
    order_after: "12:30 PM",
    order_limit: 534,
  },
  {
    from: "05:00 PM",
    to: "08:00 PM",
    order_before: "04:30 PM",
    order_after: "03:30 PM",
    order_limit: 360,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 851,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 589,
  },
  {
    from: "09:00 AM",
    to: "11:00 AM",
    order_before: "08:30 AM",
    order_after: "07:30 AM",
    order_limit: 76,
  },
  {
    from: "11:00 AM",
    to: "01:00 PM",
    order_before: "10:30 AM",
    order_after: "09:30 AM",
    order_limit: 443,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 214,
  },
  {
    from: "02:00 PM",
    to: "05:00 PM",
    order_before: "01:30 PM",
    order_after: "12:30 PM",
    order_limit: 534,
  },
  {
    from: "05:00 PM",
    to: "08:00 PM",
    order_before: "04:30 PM",
    order_after: "03:30 PM",
    order_limit: 360,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 854,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 482,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 436,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 710,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 629,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 158,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 309,
  },
  {
    from: "02:00 PM",
    to: "05:00 PM",
    order_before: "01:30 PM",
    order_after: "12:30 PM",
    order_limit: 534,
  },
  {
    from: "05:00 PM",
    to: "08:00 PM",
    order_before: "04:30 PM",
    order_after: "03:30 PM",
    order_limit: 360,
  },
  {
    from: "10:30 AM",
    to: "12:30 PM",
    order_before: "10:00 AM",
    order_after: "9:00 AM",
    order_limit: 722,
  },
  {
    from: "09:00 AM",
    to: "11:00 AM",
    order_before: "08:30 AM",
    order_after: "07:30 AM",
    order_limit: 76,
  },
  {
    from: "11:00 AM",
    to: "01:00 PM",
    order_before: "10:30 AM",
    order_after: "09:30 AM",
    order_limit: 443,
  },
  {
    from: "02:00 PM",
    to: "05:00 PM",
    order_before: "01:30 PM",
    order_after: "12:30 PM",
    order_limit: 534,
  },
  {
    from: "05:00 PM",
    to: "08:00 PM",
    order_before: "04:30 PM",
    order_after: "03:30 PM",
    order_limit: 360,
  },
];
export const TEST_SLOTS = { data: SLOTS_DATA };

const UNITS_DATA = [
  {
    units: "KG",
    units_hindi: "किलो",
  },
  {
    units: "Box",
    units_hindi: "बक्सा",
  },
  {
    units: "Tin",
    units_hindi: "टिन",
  },
  {
    units: "Packet",
    units_hindi: "पैकेट",
  },
  {
    units: "Katta",
    units_hindi: "कत्ता",
  },
  {
    units: "mL",
    units_hindi: "एमएल",
  },
  {
    units: "L",
    units_hindi: "एल",
  },
  {
    units: "g",
    units_hindi: "ग्राम",
  },
];
export const TEST_UNITS = { data: UNITS_DATA };

const ORDERS_DATA = [
  {
    order_id: "719d7bad-4e84-47cf-bc91-c4bfa91cb4a2",
    customer: "Harper Debold",
    status: "Order Placed",
    amount: 39396,
    slot: "09:00 AM to 11:00 AM",
    date: "2022-05-09 23:59:54",
  },
  {
    order_id: "c62e2d15-725b-4245-9592-a3608c27e3f3",
    customer: "Deedee Morewood",
    status: "Order Cancelled",
    amount: 41325,
    slot: "11:00 AM to 01:00 PM",
    date: "2023-02-15 21:34:32",
  },
  {
    order_id: "74071656-5bb1-45d2-bffb-646c883655a9",
    customer: "Jarred McGann",
    status: "Order Cancelled",
    amount: 71776,
    slot: "02:00 PM to 05:00 PM",
    date: "2022-04-24 13:56:04",
  },
  {
    order_id: "f5951649-c783-409e-9861-944d5b818886",
    customer: "Chrissy Matysik",
    status: "Order Placed",
    amount: 29670,
    slot: "05:00 PM to 08:00 PM",
    date: "2023-02-19 05:31:25",
  },
  {
    order_id: "816dc30c-0015-40ae-b712-03e8641aa93d",
    customer: "Lesli Grinyov",
    status: "Order Cancelled",
    amount: 36504,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-04-03 08:30:25",
  },
  {
    order_id: "4a63f150-877f-46e6-bcde-f92f55e94877",
    customer: "Anna-maria Janaszkiewicz",
    status: "Order Cancelled",
    amount: 61161,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-08-10 05:14:35",
  },
  {
    order_id: "7bedfff5-85d8-4b20-b37c-e124881c0877",
    customer: "Juliana Amies",
    status: "Order Cancelled",
    amount: 27646,
    slot: "05:00 PM to 08:00 PM",
    date: "2022-10-28 04:58:49",
  },
  {
    order_id: "451d0604-d4f7-45cd-bee5-137b6c970c1c",
    customer: "Marijn Bartlam",
    status: "Order Placed",
    amount: 63171,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-04-09 13:51:14",
  },
  {
    order_id: "12f18817-e753-4a47-92c4-781a26c53190",
    customer: "Rebeca Boydon",
    status: "Order Cancelled",
    amount: 88647,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-10-26 11:36:30",
  },
  {
    order_id: "979e22ef-fe19-40ac-ad1e-1a4203eca191",
    customer: "Esta Dell 'Orto",
    status: "Order Cancelled",
    amount: 6980,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-08-15 12:50:30",
  },
  {
    order_id: "6e1b075a-0adf-4e41-9ce4-6c24a22e04aa",
    customer: "Clemmie Riccard",
    status: "Order Cancelled",
    amount: 5126,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-06-10 01:17:10",
  },
  {
    order_id: "be196b70-a9cb-42c8-9385-1cb72879e040",
    customer: "Dorine Maliphant",
    status: "Order Placed",
    amount: 99483,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-07-05 05:50:58",
  },
  {
    order_id: "3d4a005f-cbfb-43d5-8d9b-0549d6594bf6",
    customer: "Nichols Searjeant",
    status: "Order Placed",
    amount: 46619,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-06-16 01:51:19",
  },
  {
    order_id: "efcfb75f-9205-4d06-bda6-f51ca7b41082",
    customer: "Kain Dionisi",
    status: "Order Cancelled",
    amount: 53631,
    slot: "09:00 AM to 11:00 AM",
    date: "2022-09-04 08:16:01",
  },
  {
    order_id: "ed0f4eba-6ab5-4a8d-9570-83c96b720c9b",
    customer: "Ximenes Aulsford",
    status: "Order Cancelled",
    amount: 29523,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-07-14 21:36:14",
  },
  {
    order_id: "a142b2dc-7a51-4af8-bbc9-c60bf64c9140",
    customer: "Thornie Armytage",
    status: "Order Placed",
    amount: 69486,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-05-12 09:50:12",
  },
  {
    order_id: "c46f301c-86c2-4f72-8f8e-0680823d057d",
    customer: "Paquito Chaloner",
    status: "Order Cancelled",
    amount: 71136,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-06-18 09:37:14",
  },
  {
    order_id: "1aa0ea1a-f5a1-4c37-8fd7-dbd8d8496657",
    customer: "Kelbee Anfossi",
    status: "Order Placed",
    amount: 37990,
    slot: "02:00 PM to 05:00 PM",
    date: "2022-05-17 20:50:38",
  },
  {
    order_id: "09071d53-e8a7-4292-83db-b93c726d47c6",
    customer: "Gualterio Cleiment",
    status: "Order Cancelled",
    amount: 58870,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-04-15 04:39:11",
  },
  {
    order_id: "2c8171d0-886c-4c58-bfaf-eaf3e837bdc7",
    customer: "Ilise Mullen",
    status: "Order Placed",
    amount: 12655,
    slot: "09:00 AM to 11:00 AM",
    date: "2022-06-06 20:49:02",
  },
  {
    order_id: "6807df09-911e-4615-bbaf-bc45a34d13b4",
    customer: "Koral Wanjek",
    status: "Order Placed",
    amount: 19231,
    slot: "10:30 AM to 12:30 PM",
    date: "2022-07-12 09:53:15",
  },
  {
    order_id: "7668d664-4ab5-4cc5-b029-50a6b2aceb40",
    customer: "Merrie Caslane",
    status: "Order Cancelled",
    amount: 31180,
    slot: "09:00 AM to 11:00 AM",
    date: "2022-12-26 23:33:19",
  },
  {
    order_id: "52bb54a3-0df1-47a3-9cf5-838469577122",
    customer: "Jackquelin Dullard",
    status: "Order Cancelled",
    amount: 96199,
    slot: "11:00 AM to 01:00 PM",
    date: "2022-10-02 04:50:32",
  },
  {
    order_id: "641c5f66-ace9-4e47-b1cf-70db8abd8a02",
    customer: "Dom Wyne",
    status: "Order Cancelled",
    amount: 33887,
    slot: "02:00 PM to 05:00 PM",
    date: "2022-05-12 05:02:32",
  },
  {
    order_id: "6df9c281-9546-4186-9856-89b68dbc1b0e",
    customer: "Nerty Dehn",
    status: "Order Placed",
    amount: 25663,
    slot: "05:00 PM to 08:00 PM",
    date: "2022-06-19 22:34:07",
  },
];
export const TEST_ORDERS = { data: ORDERS_DATA };

function clickFunction(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  d: unknown
) {
  const data = d as typeof INVENTORIES_DATA[0];
  console.log("click", data.item_name);
}
function changeFunction(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  d: unknown
) {
  const data = d as typeof INVENTORIES_DATA[0];
  console.log("change", e.target.value);
}
