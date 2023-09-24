import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = environment.pixabayURL
  private apiKey = environment.pixabayAPIKey

  constructor(public net: HttpClient) {}

  /**
   * It sends a request to Pixabay API key based on the params given by the user from a text input.
   * @param params The text recived by the user from search-box input.
   * @returns The result of the search made by the user.
   */
  search(params: string) {
    params.replaceAll(' ', '+')

    return this.net.get(`${this.apiUrl}?key=${this.apiKey}&q=${params}&per_page=12`)
  }
}
