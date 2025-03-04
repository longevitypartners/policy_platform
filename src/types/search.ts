
export type SortConfig = {
  field: 'risk_rating' | 'last_amended' | 'entry_into_force';
  direction: 'asc' | 'desc';
};

export type ViewMode = 'policies' | 'provisions';

export type PolicyFiltersState = {
  countries: string[];
  riskRatings: string[];
  categories: string[];
  yearsEnforced: string[];
};

export type ProvisionFiltersState = {
  countries: string[];
  topics: string[];
  yearsEnforced: string[];
  buildingStatuses: string[];
  assetClasses: string[];
};

export type FiltersState = PolicyFiltersState | ProvisionFiltersState;

export type PolicyFilterOptions = {
  countries: string[];
  riskRatings: string[];
  categories: string[];
  years: string[];
};

export type ProvisionFilterOptions = {
  countries: string[];
  topics: string[];
  years: string[];
  buildingStatuses: string[];
  assetClasses: string[];
};

export type Provision = {
  provision_id: number;
  requirement: string;
  description: string | null;
  minimum_requirement: string | null;
  best_practice: string | null;
  subject_to_obligation: string | null;
  asset_class: string | null;
  building_status: string | null;
  country: string | null;
  year_of_enforcement: string | null;
  year_in_force: string | null;
  policy: string | null;
  policy_id: number;
  topic: string | null;
  url_minimum_standards: string | null;
  url_best_practice: string | null;
};

export type Policy = {
  policy_id: number;  
  title: string;
  country: string | null;  
  category: string | null; 
  risk_rating: number | null; 
  entry_into_force: string | null; 
  last_amended: string | null; 
  provisions_count: number;
  policy_type: string | null;
  description: string | null;
  url_regulation: string | null;
  url_implications: string | null;
  implications: string | null;
  provisions?: Provision[];
};
