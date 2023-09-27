import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { APIResults, APIResponse } from 'src/app/interfaces/APIInterfaces';

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
  imagesResult: Array<APIResults> | undefined = []

  constructor(private imgService: ImagesService) {}

  /**
   * It searches into the image service and modify the result
   * of images that we should have printed on screen everytime we input a text.
   */
  sendRequest(): void {
    if(this.search === '') return

    this.imgService.search(this.search).subscribe((res: Partial<APIResponse> | APIResponse) => {
      console.log(res);
      this.imagesResult = res.hits
    })
  }
}
