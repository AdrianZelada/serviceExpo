import { Component } from '@angular/core';
import { alumno } from "./alumnos.model";
import { HttpClient} from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo_bonito';
    alumnos : Array <alumno> = [{          
      nombre : "leo ",
      edad : 25,
      ciudad : "la paz",
      estudiante : true
    },
    {
      nombre : "mari",
      edad : 0,
      ciudad : "la paz",
      estudiante : false,
    },
    {
      nombre : "hipiie",
      edad : 21111,
      ciudad : "la paz ",
      estudiante : true,
    }
  ];

  users : any =[];
  usersStaticos: any = [];


  constructor( private http: HttpClient){
    

    this.users = this.usersStaticos;

    // this.http.get('http://jsonplaceholder.typicode.com/users')
    // .subscribe((data : any)=>{      
    //   this.users= data;
    // });
  }
};
