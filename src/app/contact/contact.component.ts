import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  myFirstReactiveForm: FormGroup;

  ServerUrl = "http://localhost/angular/send.php";
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.myFirstReactiveForm.value);

    // const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    // alert(allInfo);

    this.sendApi(this.name, this.email, this.message);
  }

  sendApi(name: string, email: string, message: string) {
    this.http
      .post<any>(this.ServerUrl, { name: name, email: email, message: message })
      .subscribe(data => {
        console.log(data);
        if (data == 0) {
          alert("El mensaje se envió correctamente!");
        } else if (data == 1) {
          alert("Hubo un error!");
        }
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.myFirstReactiveForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern(/[A-z]/)]],
      email: ["", [Validators.required, Validators.email]],
      message: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[A-z0-9]*$/),
          Validators.maxLength(300)
        ]
      ]
    });
  }
}
