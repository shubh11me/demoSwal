import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }
// cust=Math.floor(Math.random() * 100) + 1;


  paytm:any = {
    MID: "HQgqpa25452415009067", // paytm provide
    WEBSITE: "WEBSTAGING", // paytm provide
    INDUSTRY_TYPE_ID: "Retail", // paytm provide
    CHANNEL_ID: "WEB", // paytm provide
    // ORDER_ID: "61484c1c685", // unique id
    // CUST_ID: this.cust.toString(), // customer id
    // MOBILE_NO: "7776885878", // customer mobile number
    // EMAIL: "shubhamtodkar05@gmail.com", // customer email
    TXN_AMOUNT: "10.00", // transaction amount
    CALLBACK_URL: "http://localhost/PracticeProjects/cliqapi/buy/paytm/pgResponse.php", // Call back URL that i want to redirect after payment fail or success
  };

  submitForm() {
    // I will do API call and will get CHECKSUMHASH.
    let order=Math.floor(Math.random() * 100000000000) + 1;
    let cust=Math.floor(Math.random() * 100000000000) + 1;
    this.paytm['CUST_ID']=cust.toString();
    this.paytm['ORDER_ID']="61484c1c685"+order.toString();
    this.http.post('http://localhost/PracticeProjects/cliqapi/buy/paytm/pgRedirect.php', this.paytm)
      .subscribe((res: any) => {
        // As per my backend i will get checksumhash under res.data
         this.paytm['CHECKSUMHASH'] =res.chk;
        // // than i will create form
        this.createPaytmForm();
        // console.log(res.chk)
      });
  };

  createPaytmForm() {
    let newForm=new FormData();
    const my_form: any = document.createElement('form');
    my_form.name = 'paytm_form';
    my_form.method = 'post';
    my_form.action ='https://securegw-stage.paytm.in/order/process';

    const myParams = Object.keys(this.paytm);
    for (let i = 0; i < myParams.length; i++) {
      const key = myParams[i];
      newForm.append(key,this.paytm[key])

      let my_tb: any = document.createElement('input');
      my_tb.type = 'text';
      my_tb.name = key;
      my_tb.value = this.paytm[key];
      my_form.appendChild(my_tb);
    };

    document.body.appendChild(my_form);
    my_form.submit();
  console.log(this.paytm)
    // after click will fire you will redirect to paytm payment page.
    // after complete or fail transaction you will redirect to your CALLBACK URL
  };
}
