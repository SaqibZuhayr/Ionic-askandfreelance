import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-freelance-profile',
    templateUrl: './freelance-profile.page.html',
    styleUrls: ['./freelance-profile.page.scss'],
})
export class FreelanceProfilePage implements OnInit {
    orderRequests: any = undefined;
    fileToUpload: File = null;
    pendingOrders: any = undefined;
    formData: any;
    comment: any = undefined;
    myorders: any = undefined;
    reviewForm: FormGroup;
    checkArray: any = [];
    checkArray2: any = [];

    constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, private http: HttpClient, public router: Router) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.fetchOrderRequests();
        this.getPendingOrders();
        this.fetchMyOrders();
        this.comment = '';
        this.reviewForm = this.formBuilder.group({
            review: ['', Validators.required],
        });
    }


    accept(id) {
        this.acceptOrDiscardOrder('accept', id);

    }

    discard(id) {
        this.acceptOrDiscardOrder('discard', id);

    }

    fetchOrderRequests() {
        this.http.post('http://localhost:3000/getOrderRequests', {'userid': localStorage.getItem('userid')})
            .subscribe((data) => {
                this.checkArray = data;
                if (this.checkArray.length > 0) {
                    this.orderRequests = data;
                }

            });
    }

    acceptOrDiscardOrder(request, orderid) {
        this.http.post('http://localhost:3000/acceptOrder', {
            'userid': localStorage.getItem('userid')
            , 'orderid': orderid,
            'requestType': request
        })
            .subscribe((data) => {
                this.fetchOrderRequests();

            });
    }

    onCancel() {
        console.log('asdasd');
    }

    getPendingOrders() {
        this.http.post('http://localhost:3000/getPendingOrders', {'userid': localStorage.getItem('userid')})
            .subscribe((data) => {
                this.checkArray2 = data;

                if (this.checkArray2.length > 0) {
                 //   console.log(data, 'Pending Orders');
                    this.pendingOrders = data;
                }
            });
    }

    onComplete(id, orderid, gigid) {

        if (this.fileToUpload) {
            this.formData.append('userid', id);
            this.formData.append('myid', localStorage.getItem('userid'));
            this.formData.append('orderid', orderid);
            this.formData.append('gigid', gigid);
            this.http.post('http://localhost:3000/deliverOrder', this.formData)
                .subscribe((data) => {
                    console.log(data);
                    this.getPendingOrders();
                });
        }

    }

    handleFileInput(files: FileList) {
        this.formData = new FormData();
        this.fileToUpload = files.item(0);
        this.formData.append('file', this.fileToUpload);
        console.log(this.fileToUpload);
    }

    fetchMyOrders() {
        this.http.post('http://localhost:3000/getMyOrders', {'userid': localStorage.getItem('userid')})
            .subscribe((data) => {
                console.log(data);
                if (data['ordersAccepted'].length > 0) {
                    this.myorders = data;
                }
            });
    }

    reviewsForm(gigid, orderid) {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/addreview', {
            order_id: orderid,
            client_id: localStorage.getItem('userid'),
            reviews_rating: 4,
            comment: this.reviewForm.value.review,
            gigid: gigid
        })
            .subscribe((data) => {
                this.comment = '';
                if (data['message']) {
                    alert('Review posted');
                }

            });

    }
}
