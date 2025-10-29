export interface Commodity {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const STORAGE_KEY = 'slooze_commodities';

const DEFAULT_COMMODITIES: Commodity[] = [
  { id: 1, name: 'Wheat', price: 30, stock: 100 },
  { id: 2, name: 'Rice', price: 40, stock: 80 },
  { id: 3, name: 'Corn', price: 25, stock: 50 },
  { id: 4, name: 'Soybeans', price: 35, stock: 5 },
  { id: 5, name: 'Barley', price: 28, stock: 120 },
  { id: 6, name: 'Oats', price: 22, stock: 8 },
];

export const getCommodities = (): Commodity[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_COMMODITIES));
  return DEFAULT_COMMODITIES;
};

export const saveCommodities = (commodities: Commodity[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(commodities));
};

export const addCommodity = (commodity: Omit<Commodity, 'id'>): void => {
  const commodities = getCommodities();
  const newId = Math.max(...commodities.map((c) => c.id), 0) + 1;
  commodities.push({ ...commodity, id: newId });
  saveCommodities(commodities);
};

export const updateCommodity = (id: number, commodity: Omit<Commodity, 'id'>): void => {
  const commodities = getCommodities();
  const index = commodities.findIndex((c) => c.id === id);
  if (index !== -1) {
    commodities[index] = { ...commodity, id };
    saveCommodities(commodities);
  }
};

export const deleteCommodity = (id: number): void => {
  const commodities = getCommodities();
  const filtered = commodities.filter((c) => c.id !== id);
  saveCommodities(filtered);
};
