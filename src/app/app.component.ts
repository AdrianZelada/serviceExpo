import { Component } from '@angular/core';
import { alumno } from "./alumnos.model";
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: String = '';
  form: FormGroup;

  alumnos :Array<any> =[];
  constructor(  private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: new FormControl(),
      email: new FormControl()
    });

     this.http.get('http://192.168.0.117:8090/users', {
       headers: {
         'Accept' : 'application/json',
         'Access-Control-Allow-Origin' : '*'
       }
     }).subscribe((users: any) => {
       console.log(users);
     });


    this.http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe((data : any)=>{
      // this.users= data;
      console.log(data);
      this.alumnos = data;
    });
  }
  guardar() {
    console.log('datos');
    const obj = this.form.getRawValue();
    console.log(obj);
    this.nombre = obj.name;
  }
}
