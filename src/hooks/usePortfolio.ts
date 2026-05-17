import data from '../data/portfolio.json';
import type { Portfolio } from '../types/portfolio';

export function usePortfolio(): Portfolio {
  return data as Portfolio;
}
