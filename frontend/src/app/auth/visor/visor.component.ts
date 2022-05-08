import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {
  listNoticias: any[] = [];

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

  buscarNoticias(parametros: any){
    console.log(parametros);
    this.authService.getNoticias(parametros).subscribe(data =>{
      console.log(data);
      this.listNoticias = data.articles;
    }, error =>{
      console.log(error);
    })
  }

}
