import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ine-back',
  templateUrl: './ine-back.page.html',
  styleUrls: ['./ine-back.page.scss'],
})
export class IneBackPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  //Recolectar Data
  public async handleFileInput(event: Event  | null): Promise<void> {
    const target = event?.target as HTMLInputElement;
    const files = target.files as FileList;
    const b64Image = await this.fileToBase64(files.item(0));
    console.log('b64Image', b64Image)
    localStorage.setItem("ineBack", b64Image);
  }

  //Convertir en Base64
  public fileToBase64 = (file: File | any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
    resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });
}
