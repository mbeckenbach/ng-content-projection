import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  @ViewChild('someControlInput', { static: true }) someControlInput: ElementRef<HTMLInputElement>;

  form = new FormGroup({
    someControl: new FormControl()
  });

  controls = {
    someControl: this.form.get('someControl')
  };

  pageTitle = this.route.snapshot.data.label;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.form.disable();
  }

  onSubmit() {
    this.form.reset();
    this.form.disable();
  }

  onEditClick() {
    this.form.enable();
    this.someControlInput.nativeElement.focus();
  }

  onCancelClick() {
    this.form.reset();
    this.form.disable();
  }
}
