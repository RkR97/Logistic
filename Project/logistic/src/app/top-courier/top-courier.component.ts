import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-top-courier',
  templateUrl: './top-courier.component.html',
  styleUrls: ['./top-courier.component.css']
})
export class TopCourierComponent implements OnInit {
  public product1: IProduct = {
    id: '1',
    image: 'https://apps.shopifycdn.com/listing_images/fc14b70f3ba850c4411e17ab2a8833d4/banner/007c722e0b64a9788f8978cbe25efdb0.png',
    name: 'ShipRocket',
  };

  public product2: IProduct = {
    id: '2',
    image: 'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1480431662/lj9qkcfpwk0vzakrwsje.png',
    name: 'Bluedart',
  };
  public product3: IProduct = {
    id: '3',
    image: 'https://static.startuptalky.com/2020/09/Delhivery-Success-Story_Startuptalky-2.jpg',
    name: 'Delhivery',
  };
  public product4: IProduct = {
    id: '4',
    image: 'https://s3-ap-southeast-1.amazonaws.com/static-pp/pp-web-app-assets/logo-carriers/square-logo-carries/dotzot.png',
    name: 'DotZot',
  };
  public product5: IProduct = {
    id: '5',
    image: 'https://media-exp1.licdn.com/dms/image/C560BAQGswmkUxfWJBg/company-logo_200_200/0/1519856870097?e=2159024400&v=beta&t=Ion0I6VuoF_UvWBwqnrz1kOJOZCKS3K6kwhzaexhGZo',
    name: 'Gati',
  };
  public product6: IProduct = {
    id: '6',
    image: 'https://cdn.contactcenterworld.com/images/company/dhl-express-taiwan-corp.-1200px-logo.jpg',
    name: 'DHL',
  };
  public product7: IProduct = {
    id: '7',
    image: 'https://pbs.twimg.com/profile_images/1346482373890867200/E137gmzv.png',
    name: 'FedEx',
  };
  public product8: IProduct = {
    id: '8',
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/CW/BH/CI/107440522/xpressbees-courier-500x500.png',
    name: ' XpressBees',
  };
  public product9: IProduct = {
    id: '9',
    image: 'https://dyvmwwyqozzzb.cloudfront.net/main/download-4.png',
    name: 'Ecom Express',
  };
  public product10: IProduct = {
    id: '10',
    image: 'https://pbs.twimg.com/profile_images/918016599805722624/7hgjwGrU_400x400.jpg',
    name: 'Wow Express',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
