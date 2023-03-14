
import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, of, Subject } from 'rxjs';


@Component({
  selector: 'app-ine-front',
  templateUrl: './ine-front.page.html',
  styleUrls: ['./ine-front.page.scss'],
})
export class IneFrontPage implements OnInit {

  title = 'camaraapp';


  // Hacer Toogle on/off
  public ineFront: File | null = null;


  public ngOnInit(): void {
    // WebcamUtil.getAvailableVideoInputs()
    //   .then((mediaDevices: MediaDeviceInfo[]) => {
    //     this.multiplesCamarasDisponibles = mediaDevices && mediaDevices.length > 1;
    //   });
  }

  //Recolectar Data
  public async handleFileInput(event: Event  | null): Promise<void> {
    const target = event?.target as HTMLInputElement;
    const files = target.files as FileList;
    this.ineFront = files.item(0);
    const b64Image = await this.fileToBase64(this.ineFront);
    console.log('b64Image', b64Image)
    localStorage.setItem("ineFront", b64Image);
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




  //USO DE WEN CAM

  // public mostrarWebcam = true;
  // public permitirCambioCamara = true;
  // public multiplesCamarasDisponibles = false;
  // public dispositivoId: string = "";

  // public opcionesVideo: MediaTrackConstraints = {
  //   //width: {ideal: 1024};
  //   //height: {ideal: 576}
  // }

  // // Errores al iniciar la cámara
  // public errors: WebcamInitError[] = [];

  // // Ultima captura o foto
  // public imagenWebcam: WebcamImage | undefined;

  // // Cada Trigger para una nueva captura o foto
  // public trigger: Subject<void> = new Subject<void>();

  // // Cambiar a la siguiente o anterior cámara
  // private siguienteWebcam: Subject<boolean|string> = new Subject<boolean|string>();


  // public triggerCaptura(): void {
  //   this.trigger.next();
  // }


  // public toggleWebcam(): void {
  //   this.mostrarWebcam = !this.mostrarWebcam;
  // }

  // public handleInitError(error: WebcamInitError): void {
  //   this.errors.push(error);
  // }

  // public showNextWebcam(directionOnDeviceId: boolean|string): void {
  //   this.siguienteWebcam.next(directionOnDeviceId);
  // }

  // public handleImage(imagenWebcam: WebcamImage): void {
  //   console.info('Imagen de la webcam recibida: ', imagenWebcam);
  //   this.imagenWebcam = imagenWebcam;
  // }

  // public cameraSwitched(dispositivoId: string): void {
  //   console.log('Dispositivo Actual: ' + dispositivoId);
  //   this.dispositivoId = dispositivoId;
  // }

  // public get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }

  // public get nextWebcamObservable(): Observable<boolean|string> {
  //   return this.siguienteWebcam.asObservable();
  // }

}
