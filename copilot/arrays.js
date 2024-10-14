const { v4: uuidv4 } = require('uuid');


//Her kıtadan 2 ülke olmak üzere bir string array oluştur.
const countries = [
    'Turkey', 'Germany', // Europe
    'Japan', 'China', // Asia
    'USA', 'Canada', // North America
    'Brazil', 'Argentina', // South America
    'Australia', 'New Zealand', // Australia/Oceania
    'South Africa', 'Egypt' // Africa
];

// 5 tane japon ismi içeren bir string array oluştur.
const names = ['はると', 'ゆい', 'そうた', 'ひな', 'れん'];


// 5 tane arapça isim içeren bir string array oluştur.
const arabicNames = ['عبدالله', 'محمد', 'علي', 'أحمد', 'أمير'];

//40 kelimelik bir string array oluştur.
const words = ['μήλο', 'μπανάνα', 'κεράσι', 'χουρμάς', 'μούρο', 'σύκο', 'σταφύλι', 'πεπόνι', 'τζακφρούτ', 'ακτινίδιο', 'λεμόνι', 'μάνγκο', 'νεκταρίνι', 'πορτοκάλι', 'παπάγια', 'κυδώνι', 'σμέουρο', 'φράουλα', 'μανταρίνι', 'ουγκλί', 'βανίλια', 'καρπούζι', 'ξιμενία', 'γιούζου', 'κολοκύθι', 'αμύγδαλο', 'βατόμουρο', 'κάσιους', 'χουρμάς', 'μούρο', 'σύκο', 'σταφύλι', 'πεπόνι', 'τζακφρούτ', 'ακτινίδιο', 'λεμόνι', 'μάνγκο', 'νεκταρίνι'];


const users = [
    { id: uuidv4(), name: 'Alice', email: 'alice@example.com', age: 36, country: 'USA' },
    { id: uuidv4(), name: 'Bob', email: 'bob@example.com', age: 40, country: 'Canada' },
    { id: uuidv4(), name: 'Charlie', email: 'charlie@example.com', age: 45, country: 'UK' },
    { id: uuidv4(), name: 'David', email: 'david@example.com', age: 38, country: 'Germany' },
    { id: uuidv4(), name: 'Eva', email: 'eva@example.com', age: 42, country: 'France' },
    { id: uuidv4(), name: 'Frank', email: 'frank@example.com', age: 47, country: 'Australia' },
    { id: uuidv4(), name: 'Grace', email: 'grace@example.com', age: 37, country: 'Japan' },
    { id: uuidv4(), name: 'Hannah', email: 'hannah@example.com', age: 39, country: 'China' },
    { id: uuidv4(), name: 'Ivy', email: 'ivy@example.com', age: 44, country: 'Brazil' },
    { id: uuidv4(), name: 'Jack', email: 'jack@example.com', age: 41, country: 'South Africa' }
];


