import { QrService } from './../../services/qr.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQrComponent implements OnInit {
  public data: string = '';

  constructor(
    private qrService: QrService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  /**
   * Genera un código qr
   */
  public generateQr(url: string) {
    if (url.length === 0) {
      this.toastrService.error('', 'Por favor ingrese una url');
      return;
    }
    this.qrService.generateQr(url)
      .subscribe((response: any) => {
        this.data = response.data;
      });

  }
  /**Descargar la imagen  */
  public downloadQr(url: string) {
    const downloadImage = document.createElement("a");
    downloadImage.href = url;
    downloadImage.download = "Codigo_qr.png",
      downloadImage.click();
  }


}
