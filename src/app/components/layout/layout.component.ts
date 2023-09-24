import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  /**
   * The string that would be modified from the search-box input.
   */
  search: string = ''

  /**
   * An array of results given by the API in response of the user request.
   */
  imagesResult: any

  constructor(private imgService: ImagesService) {}

  /**
   * It searches into the image service and modify the result
   * of images that we should have printed on screen everytime we input a text.
   */
  sendRequest(): void {
    this.imgService.search(this.search).subscribe((res: any) => {
      console.log(res.hits);

      this.imagesResult = res.hits
    })
  }
}
