import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitItemDiv } from './pages/produit-item-div/produit-item-div';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduitItemDiv],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LAB_NG_IPSL';
}
