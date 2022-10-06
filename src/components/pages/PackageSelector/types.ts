export enum PaymentScheduleType {
  Monthly,
  Yearly,
}

export interface Package {
  id: string;
  name: string;
  details: string;
  tooltipText?: string;
  price: number;
}

export interface PackageSchedule {
  id: string;
  name: string;
  type: PaymentScheduleType;
}
