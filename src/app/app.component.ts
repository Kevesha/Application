import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { Information } from "../models/info";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = `Kevesha's Application`;
  returnedInfo: Information[] = [];
  Months: any;
  Year: number;
  Selected: any;
  titleDate: string;
  showData: boolean = false;
  showMonths: boolean = false;

  constructor(
    public appService: AppService
  ) {}

  getInformation(Year: number) {
    this.returnedInfo = [];
    this.Year = Year;
    this.appService.getData(Year).subscribe((res: Information[]) => {
      this.returnedInfo = res;
    });

    if (this.Year !== 2019) {
      this.Months = [
        {
          Id: 1,
          Month: "January"
        },
        {
          Id: 2,
          Month: "February"
        },
        {
          Id: 3,
          Month: "March"
        },
        {
          Id: 4,
          Month: "April"
        },
        {
          Id: 5,
          Month: "May"
        },
        {
          Id: 6,
          Month: "June"
        },
        {
          Id: 7,
          Month: "July"
        },
        {
          Id: 8,
          Month: "August"
        },
        {
          Id: 9,
          Month: "September"
        },
        {
          Id: 10,
          Month: "October"
        },
        {
          Id: 11,
          Month: "November"
        },
        {
          Id: 12,
          Month: "December"
        }
      ];
    } else {
      this.Months = [
        {
          Id: 1,
          Month: "January"
        },
        {
          Id: 2,
          Month: "February"
        },
        {
          Id: 3,
          Month: "March"
        },
        {
          Id: 4,
          Month: "April"
        }
      ];
    }
  }

  hideStatement() {
    this.showData = false;
  }

  returnedNumber(val: string) {
    console.log(val,"***")
    const money = parseInt(val, 10);
    const converingNumber = new Intl.NumberFormat("en-LS", {
      style: "currency",
      currency: "ZAR"
    });
    if (money > 0) {
      return `${converingNumber.format(Math.round(money / 10) * 10)}`;
    }
    if (money < 0) {
      return `(${converingNumber.format(Math.round((money * -1) / 10) * 10)})`;
    }

    if (money === 0) {
      return `(${converingNumber.format(money)})`;
    }
  }

  setColor(val: string) {
    const money = parseInt(val, 10);
    if (money > 0) {
      return "#008000";
    }
    if (money < 0) {
      return "#FF0404";
    }
    if (money === 0) {
      return "#20B2AA";
    }
  }

  returnedPercentage(val: string) {
    return `${(parseFloat(val) * 100).toFixed(2)}%`;
  }

  onChange(event) {
    const year = parseInt(event, 10);
    this.showMonths = false;
    this.showData = false;
    if (year > 0) {
      this.showMonths = true;
      this.getInformation(year);
    }
  }

  onChangeMonth(event) {
    this.showData = false;
    if (this.Year > 0) {
        this.titleDate = `${this.Year} ${this.Months[parseInt(event, 10) - 1].Month}`;
        this.Selected = this.returnedInfo[parseInt(event, 10) - 1];
        if (this.titleDate != null) {
          this.showData = true;
        }
    }
  }

}
