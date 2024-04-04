import images from './images';

const wines = [
  {
    title: 'Awash',
    price: 'ETB 700',
    tags: 'AU | Bottle',
  },
  {
    title: 'Acacia',
    price: 'ETB 650',
    tags: 'AU | Bottle',
  },
  {
    title: 'Guder',
    price: 'ETB 500',
    tags: 'AU | Bottle',
  },
  {
    title: 'biherawi',
    price: 'ETB 550',
    tags: 'AU | Bottle',
  },
  {
    title: 'Tej',
    price: 'ETB 20',
    tags: 'Cup | 500 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'ETB 200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'ETB 160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'ETB 100',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'ETB 310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'ETB 500',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
  },
];

export default { wines, cocktails, awards };
