
export interface FinancialPerformance {
  id: number;
  period: string;
  collected: number;
  outstanding: number;
  projected: number;
}

export interface OperatingPerformance {
  id: number;
  location: string;
  occupied: number;
  vaccated: number;
  rentRoll: number;
  potential: number;
}

export interface SalesLead {
  id: number;
  name: string;
  email: string;
}
