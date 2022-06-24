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
  modes: any[] = [];
  answt: any = [];
  currentMode: any;
  constructor() {
    if (localStorage.getItem('ans')) {

      var preans: any = localStorage.getItem('ans');
      this.answt = JSON.parse(preans);
    } else {
      this.answt = [];
    }

  }
  time = Math.floor(80);// in secs
  remainTime = this.time;
  expir: any;
  marks: any = 0;
  timer_mins = 0;
  timer_secs = 0;
  incretime = 0;
  checkAnswers() {
    this.marks = 0;
    this.answt.forEach((f:any) => {
      // f.forEach((x:any) => {
      //   let myans = this.q.find((a) => {
      //     return a.q_id == x.q_id;
      //   });
      //   if (x.ans == myans?.ansId) {
      //     this.marks = this.marks + 1;
      //   }
      // })

      for (let index = 1; index < f.length; index++) {
        const x = f[index];
        let myans = this.q.find((a) => {
          return a.q_id == x.q_id;
        });
        if (x.ans == myans?.ansId) {
          this.marks = this.marks + 1;
        }
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

  getAnsIN(examM: any, ansa: any) {
    var i;
    for (i = 0; i < ansa.length; i++) {
      if (ansa[i][0].mname === examM) {
        return i;
      }
    }
    return -1;
  }

  containsObjectAns(obj: any, list: any) {
    var i;
    for (i = 0; i < list.length; i++) {
      if ((list[i].q_id === obj.q_id) && (list[i].ans === obj.ans)) {
        return true;
      }
    }

    return false;
  }

  examState = true;
  startExam() {
    this.examState = true;
    let nowTime = new Date().getTime();
    console.log(nowTime);
    let expTime;
    if (localStorage.getItem('exam')) {
      let examd: any = localStorage.getItem('exam');
      examd = JSON.parse(examd);
      expTime = examd.exp;
    } else {
      expTime = nowTime + (this.time * 1000)
      localStorage.setItem('exam', JSON.stringify({ exp: expTime, ex_id: 'myEx' }))
    }
    this.remainTime = expTime - nowTime;
    console.log(this.remainTime / 1000);
    this.getTimer();
    console.log("out")

    this.decreamenter()


    setTimeout(() => {
      console.log("close");
      this.examSubmitter();
    }, this.remainTime);


  }

  examSubmitter() {
    this.checkAnswers();
    console.log("sac");
    this.examState = false;
    this.timer_mins = 0;
    this.timer_secs = 0;
    this.remainTime = 0;
    localStorage.removeItem('exam');
    localStorage.removeItem('ans');
    let opts = document.getElementsByClassName('options');
    for (let i = 0; i < opts.length; i++) {
      opts[i].removeAttribute('checked');
    }
  }

  getTimer() {
    console.log(this.remainTime)
    if (this.examState) {
      this.timer_mins = Math.floor((this.remainTime / 1000) / 60);
      this.timer_secs = Math.floor((this.remainTime / 1000) - (this.timer_mins * 60));
    }
  }
  decreamenter() {

    if (this.examState) {
      this.timer_secs = this.timer_secs - 1;
      if (this.timer_secs == 0) {
        console.log("still")
        if ((this.timer_secs == 0 && this.timer_mins == 0)) {
          this.timer_secs = 0; this.timer_mins = 0;
          return;
        } else {
          this.timer_mins = this.timer_mins - 1;

          this.timer_secs = 60;
        }
      }
      // console.log(this.timer_mins + " mins ", this.timer_secs)
      setTimeout(() => this.decreamenter(), 1000)
    }
  }
  anst: any;
  ngOnInit(): void {
    if (localStorage.getItem('exam')) {
      let examd: any = localStorage.getItem('exam');
      examd = JSON.parse(examd);
      // console.log(examd.exp + " " + new Date().getTime())
      if (examd.exp < new Date().getTime()) {
        this.examSubmitter();
      }
    }
    this.startExam();
    // this.ans = [];

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

    this.modes = [
      { mname: "Apti", mtype: 'mcq' },
      { mname: "java", mtype: 'mcq' },
      { mname: "sql", mtype: 'mcq' },
    ]
    this.currentMode = this.modes[0].mname;
    console.log(this.currentMode)

    this.modes.forEach((m) => {
      this.answt.push([m]);
    })
    console.log(this.answt);
    console.log(this.getAnsIN(this.currentMode, this.answt));
  }


  ansCol(ob: any) {

    let inAns: any = this.getAnsIN(this.currentMode, this.answt)
    if (this.containsObject(ob, this.answt[inAns]).stat) {
      if (this.containsObject(ob, this.answt[inAns]).ind > -1) {
        this.answt[inAns].splice(this.containsObject(ob, this.answt[inAns]).ind, 1);
      }
      this.answt[inAns].push(ob);
    } else {
      this.answt[inAns].push(ob);
    }

    localStorage.setItem('ans', JSON.stringify(this.answt));
  }
  switch(name: string) {
    if(name=="apti"){
    this.currentMode = this.modes[0].mname;
    }
    if(name=="java"){
      this.currentMode = this.modes[1].mname;

    }
    if(name=="sql"){
      this.currentMode = this.modes[2].mname;

    }
  }

}
