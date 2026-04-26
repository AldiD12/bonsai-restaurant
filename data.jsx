// Bonsai menu data — real dishes & prices from the restaurant menu
const MENU_CATEGORIES = [
  {
    id: 'appetizers',
    label: 'Appetizers & Salads',
    sub: 'Antipasta · Sallata',
    items: [
      { name: 'Tartar Salmoni', en: 'Salmon Tartare', price: 1400, desc: 'Hand-cut Atlantic salmon with capers, citrus and good olive oil.' },
      { name: 'Saganaki Karkalec', en: 'Shrimp Saganaki', price: 1250, desc: 'Pan-seared shrimp in a tomato, ouzo and feta sauce.' },
      { name: 'Kallamar i Mbushur', en: 'Stuffed Calamari', price: 1600, desc: 'Tender calamari filled with rice, herbs and Mediterranean spices.' },
      { name: 'Midhje Sote', en: 'Sautéed Mussels', price: 600, desc: 'Local mussels in white wine, garlic and parsley.' },
      { name: 'Qofte Gaforreje', en: 'Crab Meatballs', price: 800, desc: 'Lightly seared crab cakes with a hint of lemon zest.', tag: 'Chef' },
      { name: 'Sallatë Bonsai', en: 'House Salad', price: 900, desc: 'Iceberg, radicchio, arugula, dried fruits, salmon, mustard, honey, orange & balsamic.', tag: 'Signature' },
      { name: 'Sallatë Fruta Deti', en: 'Seafood Salad', price: 1000, desc: 'Octopus, shrimp and mussels over fresh greens.' },
      { name: 'Oktapod', en: 'Octopus Salad', price: 1200, desc: 'Cold octopus salad with red onion, parsley and Albanian olive oil.' },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    sub: 'Zgara · From the Sea',
    items: [
      { name: 'Oktapod', en: 'Grilled Octopus', price: 1700, desc: 'Tender octopus grilled to perfection, served with lemon-herb vinaigrette.', tag: 'Chef' },
      { name: 'Levrek', en: 'Grilled Sea Bass', price: 1000, desc: 'Whole sea bass, charcoal-grilled with sea salt and lemon.' },
      { name: 'Koc', en: 'Grilled Sea Bream', price: 950, desc: 'Day-boat sea bream, simply grilled with extra-virgin olive oil.' },
      { name: 'Kallamar', en: 'Grilled Calamari', price: 1400, desc: 'Whole calamari over coals, finished with parsley oil.' },
      { name: 'Karkalec', en: 'Grilled Shrimp', price: 1400, desc: 'Large head-on shrimp grilled and dressed with garlic butter.' },
      { name: 'Salmon', en: 'Grilled Salmon', price: 1500, desc: 'Atlantic salmon fillet, charred skin, soft centre.' },
      { name: 'Miks Zgare', en: 'Mixed Grill', price: 2600, desc: 'Octopus, shrimp, calamari and the catch of the day.', tag: 'Bestseller' },
      { name: 'Miks Triture', en: 'Mixed Fried Seafood', price: 2600, desc: 'Crisp-fried calamari, shrimp and small fish, served with aioli.' },
      { name: 'Fileto Levreku', en: 'Sea Bass Fillet', price: 1500, desc: 'With cherry tomatoes, capers and basil.' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta & Risotto',
    sub: 'Pasta · Rizoto',
    items: [
      { name: 'Linguini Fruta Deti', en: 'Seafood Linguine', price: 900, desc: 'Mussels, clams and shrimp in a light tomato-garlic sauce.', tag: 'Bestseller' },
      { name: 'Paker Karkalec Pesto', en: 'Shrimp Paccheri, Arugula Pesto', price: 1200, desc: 'With mascarpone and pistachio crumble.' },
      { name: 'Paker Salmon', en: 'Salmon Paccheri', price: 1200, desc: 'Pepper cream and grain mustard sauce.' },
      { name: 'Ravioli Karkalec Shafran', en: 'Saffron Shrimp Ravioli', price: 1300, desc: 'House-made ravioli, butter and saffron emulsion.', tag: 'Chef' },
      { name: 'Penne Karkalec', en: 'Penne, Shrimp & Pumpkin', price: 1000, desc: 'Roasted pumpkin cream, sautéed shrimp, fresh thyme.' },
      { name: 'Spageti Vongole', en: 'Spaghetti Vongole', price: 1200, desc: 'Manila clams, white wine, garlic, chilli flakes.' },
      { name: 'Rizoto Fruta Deti', en: 'Seafood Risotto', price: 1000, desc: 'Carnaroli rice with shrimp, mussels and clams.' },
      { name: 'Rizoto Bufala Shafran', en: 'Buffalo Mozzarella Risotto', price: 1200, desc: 'Saffron, melted buffalo mozzarella, lemon zest.' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & Wines',
    sub: 'Vera Shqiptare · Albanian Wines',
    items: [
      { name: 'Gotë Verë', en: 'Glass of House Wine', price: 300, desc: 'Local red or white, served by the glass.' },
      { name: 'Verë 1 Litër', en: '1 Litre House Wine', price: 1200, desc: 'Carafe of house red or white.' },
      { name: 'Shehi Bardhë', en: 'White Shesh', price: 2800, desc: 'Indigenous Albanian white grape — bright and stone-fruited.', tag: 'Local' },
      { name: 'Chardonnay', en: 'Chardonnay', price: 2800, desc: 'Unoaked, fresh and citrus-driven.' },
      { name: 'Chardonnay Barrik', en: 'Chardonnay Barrique', price: 3600, desc: 'Barrel-aged, rounded and creamy.' },
      { name: 'Cabernet Sauvignon', en: 'Cabernet Sauvignon', price: 2900, desc: 'Full-bodied red, dark fruit, soft tannin.' },
      { name: 'Merlot Barrik', en: 'Merlot Barrique', price: 5000, desc: 'Reserve Merlot, barrel-aged, special occasion.' },
    ],
  },
];

const FEATURED_DISH = {
  id: 'shrimp',
  name: 'Karkalec Tiger Krudo',
  en: 'Tiger Shrimp Crudo',
  desc: 'Our signature presentation — head-on tiger shrimp over citrus, with two house sauces, basil oil and saffron.',
  tag: 'House Signature',
};

window.MENU_CATEGORIES = MENU_CATEGORIES;
window.FEATURED_DISH = FEATURED_DISH;
