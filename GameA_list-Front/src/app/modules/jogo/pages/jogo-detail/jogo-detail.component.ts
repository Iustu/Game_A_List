import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { jogo } from '../../jogo.model';
import { jogoService } from '../../jogo.service';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: './jogo-detail.component.html',
})
export class jogoDetailComponent implements OnInit {
  constructor(
    private varRoute : ActivatedRoute,
    private jogoService: jogoService,
    private loading: NgxSpinnerService,
    private toast: ToastrService,
    private router: Router){}

  private fb: FormBuilder = inject(FormBuilder);


  public form = this.fb.group({
    titulo: ['', [ Validators.maxLength(250) ]],
    imagem: ['', []],
    publicadora: ['', [Validators.maxLength(100)]],
    estudio: ['', [ ]] ,
  })


  jogo!: jogo;
  private routeId : any;

  ngOnInit(): void {
    this.varRoute.paramMap.subscribe(paramMap => {
      this.routeId=paramMap.get('id');
    })
  }

  
}
