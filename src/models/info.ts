
export class Information{
  date: Date;
  propertyIncome: number;
  recoverisExclWES: number;
  municipalCostsExclWES: number;
  propertyExpenseExclMain: number;
  maintenanceAt3Perc: number;
  actualMaintenance: number;
  recoveriesWES: number;
  municipalCostsWEC: number;
  netIncome: number;
  expensePerc: number;
  recoveriesWESPerc: number;
  recoveriesOtherPerc: number;
  maintenanceActualVS3perc: number;
  capitalisationRate: number;
  propAdjustments: number;
  propertyValuation: number;
  constructor();
  constructor(src?: Information) {
    if (src) {
      this.date = src.date;
      this.propertyIncome = src.propertyIncome;
      this.recoverisExclWES = src.recoverisExclWES;
      this.propertyIncome  = src.recoverisExclWES;
      this.recoverisExclWES = src.recoverisExclWES;
      this.municipalCostsExclWES = src.recoverisExclWES;
      this.propertyExpenseExclMain = src.recoverisExclWES;
      this.maintenanceAt3Perc = src.recoverisExclWES;
      this.actualMaintenance = src.recoverisExclWES;
      this.recoveriesWES = src.recoverisExclWES;
      this.municipalCostsWEC = src.recoverisExclWES;
      this.netIncome = src.recoverisExclWES;
      this.expensePerc = src.recoverisExclWES;
      this.recoveriesWESPerc = src.recoverisExclWES;
      this.recoveriesOtherPerc = src.recoverisExclWES;
      this.maintenanceActualVS3perc = src.recoverisExclWES;
      this.capitalisationRate = src.recoverisExclWES;
      this.propAdjustments = src.recoverisExclWES;
      this.propertyValuation = src.recoverisExclWES;
    }
  }
}
