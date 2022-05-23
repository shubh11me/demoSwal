import { Component, OnInit } from '@angular/core';
interface ques {
  q_id: any,
  qname: string,
  options: any[],
  ansId: any
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  q: ques[] = [];
  ans: any[] = [];
  constructor() {

  }

  time = 2000;// in miliseconds
  expir: any;
  marks: any = 0;
  checkAnswers() {
    this.marks = 0;
    this.ans.forEach((x) => {
      let myans = this.q.find((a) => {
        return a.q_id == x.q_id;
      });
      if (x.ans == myans?.ansId) {
        this.marks = this.marks + 1;
      }
    })

    console.log(this.marks)

  }


  containsObject(obj: any, list: any) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].q_id === obj.q_id) {
        return { stat: true, ind: i };
      }
    }

    return { stat: false, ind: i };
  }
  ngOnInit(): void {
    this.ans = [
      {
        q_id: "opwc",
        ans: 3153242343
      },
      {
        q_id: "opvc",
        ans: 31556243
      },
      // {
      //   q_id: "op",
      //   ans: 315243
      // },
      // {
      //   q_id: "opac",
      //   ans: 3276755671543
      // }
    ]

    this.q = [
      {
        q_id: "op",
        qname: "what is name",
        options: [
          {
            opt_id: 31543,
            opt: "SHubham"
          },
          {
            opt_id: 315243,
            opt: "Sasc"
          },
          {
            opt_id: 321543,
            opt: "aaS"
          },
          {
            opt_id: 315343,
            opt: "Scc"
          }
        ],
        ansId: 31543
      },
      {
        q_id: "opvc",
        qname: "age",
        options: [
          {
            opt_id: 3152343,
            opt: "c"
          },
          {
            opt_id: 31556243,
            opt: "20"
          },
          {
            opt_id: 327671543,
            opt: "aaS"
          },
          {
            opt_id: 31512343,
            opt: "Scc"
          }
        ],
        ansId: 31556243
      },
      {
        q_id: "opwc",
        qname: "school",
        options: [
          {
            opt_id: 3153242343,
            opt: "S"
          },
          {
            opt_id: 3151256243,
            opt: "Bhave"
          },
          {
            opt_id: 3276751543,
            opt: "aaS"
          },
          {
            opt_id: 315312343,
            opt: "Scc"
          }
        ],
        ansId: 3151256243 
      },
      {
        q_id: "opac",
        qname: "BFF",
        options: [
          {
            opt_id: 315324762343,
            opt: "S"
          },
          {
            opt_id: 321,
            opt: "Sasc"
          },
          {
            opt_id: 3276755671543,
            opt: "Vaish"
          },
          {
            opt_id: 31531902343,
            opt: "Scc"
          }
        ],
        ansId: 3276755671543
      }
    ]


    // this.expir = new Date().getTime() + 20 * 1000;
    setTimeout(() => {
      console.log("close");
    }, this.time);
    this.checkAnswers();

  }
  ansCol(ob: any) {


    if (this.containsObject(ob, this.ans).stat) {
      if (this.containsObject(ob, this.ans).ind > -1) {
        this.ans.splice(this.containsObject(ob, this.ans).ind, 1);
      }
      this.ans.push(ob);
    } else {
      this.ans.push(ob);
    }
  }

}
