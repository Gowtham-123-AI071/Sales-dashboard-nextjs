export type MonthSale = { month: string; sales: number; year: number };

// Mocked data (representative, synthesized from typical public sales datasets)
export const sales2022: MonthSale[] = [
  { month: 'Jan', sales: 12000, year: 2022 },
  { month: 'Feb', sales: 15000, year: 2022 },
  { month: 'Mar', sales: 13000, year: 2022 },
  { month: 'Apr', sales: 16500, year: 2022 },
  { month: 'May', sales: 14000, year: 2022 },
  { month: 'Jun', sales: 17000, year: 2022 },
  { month: 'Jul', sales: 15500, year: 2022 },
  { month: 'Aug', sales: 16000, year: 2022 },
  { month: 'Sep', sales: 14800, year: 2022 },
  { month: 'Oct', sales: 17500, year: 2022 },
  { month: 'Nov', sales: 19000, year: 2022 },
  { month: 'Dec', sales: 21000, year: 2022 }
];

export const sales2023: MonthSale[] = [
  { month: 'Jan', sales: 13000, year: 2023 },
  { month: 'Feb', sales: 15500, year: 2023 },
  { month: 'Mar', sales: 14500, year: 2023 },
  { month: 'Apr', sales: 17500, year: 2023 },
  { month: 'May', sales: 16000, year: 2023 },
  { month: 'Jun', sales: 18000, year: 2023 },
  { month: 'Jul', sales: 17000, year: 2023 },
  { month: 'Aug', sales: 18500, year: 2023 },
  { month: 'Sep', sales: 16500, year: 2023 },
  { month: 'Oct', sales: 19500, year: 2023 },
  { month: 'Nov', sales: 20500, year: 2023 },
  { month: 'Dec', sales: 23000, year: 2023 }
];

export const sales2024: MonthSale[] = [
  { month: 'Jan', sales: 14000, year: 2024 },
  { month: 'Feb', sales: 16000, year: 2024 },
  { month: 'Mar', sales: 15000, year: 2024 },
  { month: 'Apr', sales: 19000, year: 2024 },
  { month: 'May', sales: 17500, year: 2024 },
  { month: 'Jun', sales: 20000, year: 2024 },
  { month: 'Jul', sales: 18500, year: 2024 },
  { month: 'Aug', sales: 19500, year: 2024 },
  { month: 'Sep', sales: 18000, year: 2024 },
  { month: 'Oct', sales: 21000, year: 2024 },
  { month: 'Nov', sales: 22000, year: 2024 },
  { month: 'Dec', sales: 25000, year: 2024 }
];

export const allSales = [...sales2022, ...sales2023, ...sales2024];
