import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(null, [ Validators.required ]),
    description: new FormControl()
  });
  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) private product: any
  ) {
    this.form.patchValue(this.product);
  }

  ngOnInit(): void {
  
  }

  submit(): void {

  }

  dismiss(): void {
    this.dialogRef.close()
  }

  
}


