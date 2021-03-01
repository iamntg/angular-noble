import { CustomerPerson, SalesLead, OperatingPerformance, FinancialPerformance, CustomerAccount, Properties } from './dashboard.model';


export class DashboardDummyData {

  public static financialPerformanceList: FinancialPerformance[] = [
    {
      id: 101,
      period: 'Dec 2020',
      collected: 372275,
      outstanding: 0,
      projected: 0,
    },
    {
      id: 102,
      period: 'Jan 2021',
      collected: 186512,
      outstanding: 0,
      projected: 0,
    },
    {
      id: 103,
      period: 'Feb 2021',
      collected: -749600,
      outstanding: 0,
      projected: 0,
    },
  ];

  public static operatingPerformanceList: OperatingPerformance[] = [
    {
      id: 101,
      location: 'New York',
      occupied: 0,
      vaccated: 0,
      rentRoll: 0,
      potential: 32000,
    },
    {
      id: 102,
      location: 'Chicago',
      occupied: 0,
      vaccated: 0,
      rentRoll: 0,
      potential: 23774,
    },
    {
      id: 102,
      location: 'Detroit',
      occupied: 0,
      vaccated: 0,
      rentRoll: 0,
      potential: 24983,
    }
  ];

  public static salesLeadList: SalesLead[] = [
    {
      id: 101,
      name: 'Robert Samuelson',
      email: 'robert@outlook.com',
    },
    {
      id: 102,
      name: 'Robbie McSamuelson',
      email: 'RM123@earthlink.net',
    },
    {
      id: 103,
      name: 'Bob MacSammold',
      email: 'bob@macsammold.com',
    },
    {
      id: 104,
      name: 'Bobby Sammole',
      email: 'bsammole@hotmail.com',
    },
    {
      id: 105,
      name: 'Melodie Knipp',
      email: 'mknipp@gmail.com',
    },
    {
      id: 106,
      name: 'Candida Corbley',
      email: 'candida_corbley@hotmail.com',
    },
    {
      id: 107,
      name: 'Karan Karpin',
      email: 'karan_karpin@gmail.com',
    },
    {
      id: 108,
      name: 'Andra Scheyer',
      email: 'andra@gmail.com',
    },
  ];

  public static customerList: CustomerPerson[] = [
    {
      "id": 1,
      "name": "Imogen",
      "email": "icatford0@ebay.co.uk"
    }, {
      "id": 2,
      "name": "Bowie",
      "email": "bwaliszek1@reddit.com"
    }, {
      "id": 3,
      "name": "Lucinda",
      "email": "ldameisele2@t-online.de"
    }, {
      "id": 4,
      "name": "Phelia",
      "email": "pscourgie3@surveymonkey.com"
    }, {
      "id": 5,
      "name": "Tobie",
      "email": "tmeeron4@freewebs.com"
    }, {
      "id": 6,
      "name": "Antonino",
      "email": "aorrill5@mapy.cz"
    },
  ];

  public static customerAccounts: CustomerAccount[] = [
    {
      "id": 1,
      "name": "Konklab"
    }, {
      "id": 2,
      "name": "Zoolab"
    }, {
      "id": 3,
      "name": "Cardify"
    }, {
      "id": 4,
      "name": "Alphazap"
    }, {
      "id": 5,
      "name": "Zathin"
    }, {
      "id": 6,
      "name": "Konklab"
    },
  ];

  public static properties: Properties[] = [
    {
      "id": 1,
      "name": "Skivee",
      "address": "99 Golf Pass"
    }, {
      "id": 2,
      "name": "Trunyx",
      "address": "6890 Blue Bill Park Alley"
    }, {
      "id": 3,
      "name": "Devshare",
      "address": "55 Namekagon Park"
    }, {
      "id": 4,
      "name": "Yakijo",
      "address": "96 Schmedeman Crossing"
    }, {
      "id": 5,
      "name": "Photofeed",
      "address": "718 Sage Drive"
    }, {
      "id": 6,
      "name": "Photobug",
      "address": "76399 Hanson Park"
    },
  ];

}
