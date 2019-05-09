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

  constructor(
    public appService: AppService
  ) {}

  getInformation(Year: number) {
    this.returnedInfo = [];
    this.Year = Year;
    this.appService.getData(Year).subscribe((res: Information[]) => {
      this.returnedInfo = res;
    });
    if (this.Year != 2019) {
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
    const money = parseInt(val, 10);
    var converingNumber = val;
    if (money > 0) {
      converingNumber = new Intl.NumberFormat("en-LS", {
        style: "currency",
        currency: "ZAR"
      }).format(Math.round(money / 10) * 10);
      return `${converingNumber}`;
    }
    if (money < 0) {
      converingNumber = new Intl.NumberFormat("en-LS", {
        style: "currency",
        currency: "ZAR"
      }).format(Math.round((money * -1) / 10) * 10);
      return `(${converingNumber})`;
    }
    if (money == 0) {
      converingNumber = new Intl.NumberFormat("en-LS", {
        style: "currency",
        currency: "ZAR"
      }).format(money);
      return `(${converingNumber})`;
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
    if (money == 0) {
      return "#20B2AA";
    }
  }

  returnedPercentage(val: string) {
    var pointNum = parseFloat(val);
    var finalPercentage = (pointNum * 100).toFixed(2);
    return finalPercentage + "%";
  }

  onChange(event) {
    const year = parseInt(event, 10);
    if (year > 0) {
      this.getInformation(year);
    }
  }

  onChangeMonth(event) {
    if((parseInt(event, 10))==0){
      this.showData = false;
    }
    if (this.Year > 0) {
        this.titleDate = this.Year + " " + this.Months[parseInt(event, 10) - 1].Month;
        this.Selected = this.returnedInfo[parseInt(event, 10) - 1];
        if (this.titleDate != null) {
          this.showData = true;
        }
    }
  }

}
