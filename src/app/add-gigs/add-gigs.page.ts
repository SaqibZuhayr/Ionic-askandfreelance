import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-gigs',
    templateUrl: './add-gigs.page.html',
    styleUrls: ['./add-gigs.page.scss'],
})
export class AddGigsPage implements OnInit {
    imagePreview;
    addForm: FormGroup;
    visible = 'hidden';

    constructor(private http: HttpClient, private router: Router, public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            gig_title: ['', Validators.required],
            gig_description: ['', Validators.required],
            gig_rate: ['', Validators.required],

        });
    }

    gigForm() {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/addgig', {
            'gig': this.addForm.value,
            'userid': localStorage.getItem('userid'),
            'username': localStorage.getItem('username'),
            'image': this.imagePreview,

        })
            .subscribe((data) => {
                // console.log(data);
                this.router.navigateByUrl('/sidemenu-question/freelance/tabf/tab-mygigs');
            });

    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.addForm.patchValue({image: file});
        const reader = new FileReader();
        reader.onload = () => {
            // @ts-ignore
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
        this.visible = 'visible';
        // a.style.visibility = 'visible';

    }

    // getImage() {
    //     const options: CameraOptions = {
    //         quality: 100,
    //         destinationType: this.camera.DestinationType.DATA_URL,
    //         encodingType: this.camera.EncodingType.JPEG,
    //         mediaType: this.camera.MediaType.PICTURE
    //     };
    //
    //     this.camera.getPicture(options).then((imageData) => {
    //         // imageData is either a base64 encoded string or a file URI
    //         // If it's base64 (DATA_URL):
    //        this.imagePreview = 'data:image/jpeg;base64,' + imageData;
    //     }, (err) => {
    //         // Handle error
    //     });
    // }

}
