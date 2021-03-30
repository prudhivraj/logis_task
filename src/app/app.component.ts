import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('bookForm') bookstore: any;
  title = 'task-logis';
  BookDetails: any = {}
  constructor() { }
  bookStote: any = {
    title: '',
    author: '',
    website: ''
  }
  final: any = []
  ngOnInit(): void {

  }
  OnFormSubmit(form: any) {
    // console.log(form);
    if (form.valid) {
      this.BookDetails = Object.assign({},this.bookStote);
      this.final.push(this.BookDetails);
      // console.log(this.final);
    }
  }
  reset() {
    // console.log(this.bookstore);
    this.bookstore.reset();
  }
}
