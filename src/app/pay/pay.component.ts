import { Component, OnDestroy } from '@angular/core';
import { CheckoutService } from 'paytm-blink-checkout-angular';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnDestroy {
  private subs: Subscription;

paytm:any = {
    MID: "HQgqpa25452415009067", // paytm provide
    WEBSITE: "WEBSTAGING", // paytm provide
    INDUSTRY_TYPE_ID: "Retail", // paytm provide
    CHANNEL_ID: "WEB", // paytm provide
    ORDER_ID: "614841685", // unique id
    CUST_ID: "51618", // customer id
    // MOBILE_NO: "7776885878", // customer mobile number
    // EMAIL: "shubhamtodkar05@gmail.com", // customer email
    TXN_AMOUNT: "10.00", // transaction amount
    CALLBACK_URL: "http://localhost:4200/contact", // Call back URL that i want to redirect after payment fail or success
  };

  submitForm() {
    // I will do API call and will get CHECKSUMHASH.
    this.http.post('http://localhost/PracticeProjects/cliqapi/buy/paytm/pgRedirect.php', this.paytm)
      .subscribe((res: any) => {
        // As per my backend i will get checksumhash under res.data
         this.paytm['CHECKSUMHASH'] =res.chk;
       
      });
  };


  constructor(private readonly checkoutService: CheckoutService,private http:HttpClient) {
    this.http.post('http://localhost/PracticeProjects/cliqapi/buy/paytm/pgRedirect.php', this.paytm)
      .subscribe((res: any) => {
        // As per my backend i will get checksumhash under res.data
         this.paytm['CHECKSUMHASH'] =res.chk;
       console.log(res.chk)
 
    this.checkoutService.init(
      //config
      {
        data: {
          orderId: "tests4",
          amount: "3337",
          token: 'a0ttfTMH5/QUjJ+vIpBYeXTvnf5WPF2/aR4adHbxZCthvZJjsd8CXT8gdJ4/l1ZKdDDfMiViBZb8yiYvFc4WsPaIXuVfIcYlmIeEe7nc3ao=',
          tokenType: "TXN_TOKEN"
        },
        merchant: {
          mid: "HQgqpa25452415009067",
          name: "ascacascasc",
          redirect: true
        },
        flow: "DEFAULT",
        handler: {
          notifyMerchant: this.notifyMerchantHandler
        }
      },
      //options
      {
        env: 'PROD', // optional, possible values : STAGE, PROD; default : PROD
        openInPopup: true // optional; default : true
      }
    );
  });
    this.subs = this.checkoutService
      .checkoutJsInstance$
      .subscribe(instance=>console.log(instance));
  
  }

  notifyMerchantHandler = (eventType:any, data:any): void => {
    console.log('MERCHANT NOTIFY LOG', eventType, data);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
