import { Component, OnInit } from '@angular/core';
import { MessageService, PlacesService } from '@app/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
})
export class PlacesComponent implements OnInit {
  message = '';
  // places:any[] = [];

  places = [
    {
      "url": "https://www.airbnb.com/rooms/53486438",
      "name": "Deluxe Bungalows 10",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.26389,
        "lng": 39.44415
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/40768643",
      "name": "Dada Beach Lodge- Deluxe Room, Beautiful Sea View",
      "stars": null,
      "numberOfGuests": 2,
      "address": "Nungwi, Unguja North Region, Tanzania",
      "roomType": "Private room in rental unit",
      "location": {
        "lat": -5.72389,
        "lng": 39.29553
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 400,
          "amountFormatted": "$400",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/c0c45ddd-6299-4a97-b3bd-9461bb89a15f.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/c0c45ddd-6299-4a97-b3bd-9461bb89a15f.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/f36913b8-2dcd-4646-b686-adaffe3e42ee.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/f36913b8-2dcd-4646-b686-adaffe3e42ee.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/e9a98a4f-6bb5-4d9f-934f-fcc332b81ea7.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/e9a98a4f-6bb5-4d9f-934f-fcc332b81ea7.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/fe787d79-d64c-4102-9754-99145f766074.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/fe787d79-d64c-4102-9754-99145f766074.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/b1004419-8bb4-4dfa-96ef-615d9fd52e13.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/b1004419-8bb4-4dfa-96ef-615d9fd52e13.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/383e0dc2-ce51-44b7-8520-5024693bbf52.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/383e0dc2-ce51-44b7-8520-5024693bbf52.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/a945f5f3-8d16-45f3-a934-e1348d6db3ae.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/a945f5f3-8d16-45f3-a934-e1348d6db3ae.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/0c692d99-a45d-49cb-bb99-047dab7e36f1.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/0c692d99-a45d-49cb-bb99-047dab7e36f1.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/e9c8a122-7c21-4f91-993f-7abd55f41439.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/e9c8a122-7c21-4f91-993f-7abd55f41439.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/5e2c7e63-d49b-4c4c-a1d9-80f85fe15a53.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/5e2c7e63-d49b-4c4c-a1d9-80f85fe15a53.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/4cf07a07-4568-42d1-920c-e140cd1b9a17.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/4cf07a07-4568-42d1-920c-e140cd1b9a17.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/e9e679ec-bcba-4ace-837c-8a62255eccf8.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/e9e679ec-bcba-4ace-837c-8a62255eccf8.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 279661150,
        "firstName": "Meck'S",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Meck'S",
        "about": "Mack's Inn Lodge is new propertyavailable at Nungwe Beach Nearly Nungwi Fish Markert ",
        "memberSince": "Joined in July 2019",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [
          "3 Reviews"
        ],
        "hostUrl": "https://www.airbnb.com/users/show/279661150",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/ba9c6e6c-ba5d-4840-9f21-e82cd15e1f57.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/ba9c6e6c-ba5d-4840-9f21-e82cd15e1f57.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53469846",
      "name": "Standard Bungalows 22",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.3228,
        "lng": 39.54871
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/1e6d9dc0-ac67-4142-ab00-91761b81bf16.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/1e6d9dc0-ac67-4142-ab00-91761b81bf16.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/e5c6ee1d-9d4c-47b4-b604-d447849fa585.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/e5c6ee1d-9d4c-47b4-b604-d447849fa585.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9b3e979c-9432-44a3-927e-751451ec4e19.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9b3e979c-9432-44a3-927e-751451ec4e19.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/b533c80a-02b0-45c2-b7f0-439df0d10672.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/b533c80a-02b0-45c2-b7f0-439df0d10672.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/f20a5bf6-9fb6-42b4-bfc2-9fd25a07add5.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/f20a5bf6-9fb6-42b4-bfc2-9fd25a07add5.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/51075100",
      "name": "Uzuri Villa\nBoutique Hotel\ndream on the beach",
      "stars": null,
      "numberOfGuests": 12,
      "address": "Jambiani, Unguja South Region, Tanzania",
      "roomType": "Room in boutique hotel",
      "location": {
        "lat": -6.3,
        "lng": 39.542
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 843,
          "amountFormatted": "$843",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/3f3ab631-6083-49b7-9cc9-36940b8516c7.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/3f3ab631-6083-49b7-9cc9-36940b8516c7.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/cf918955-e602-49a1-aa0f-2bd110611e8e.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/cf918955-e602-49a1-aa0f-2bd110611e8e.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/94d165ea-0119-4955-927d-2070fc589ed7.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/94d165ea-0119-4955-927d-2070fc589ed7.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/01097604-caba-4245-82ca-c90711a6e7c0.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/01097604-caba-4245-82ca-c90711a6e7c0.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/ef33d073-e4f1-471d-bae2-7cadfb7a4339.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/ef33d073-e4f1-471d-bae2-7cadfb7a4339.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/03651754-8360-455e-a42f-02962c39c390.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/03651754-8360-455e-a42f-02962c39c390.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/a88d2d78-9654-4d9d-b173-0dae779c7bf3.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/a88d2d78-9654-4d9d-b173-0dae779c7bf3.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/32ac1a8d-92cd-4445-8d25-ee6cec5f5476.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/32ac1a8d-92cd-4445-8d25-ee6cec5f5476.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/1080ab61-471e-42d5-8e9b-898a7f7b73cd.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/1080ab61-471e-42d5-8e9b-898a7f7b73cd.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/35ae6e6a-a215-41de-bb2b-c62ff864808c.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/35ae6e6a-a215-41de-bb2b-c62ff864808c.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/7a2308d2-da03-4d06-ad16-1be0b4e6f2a0.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/7a2308d2-da03-4d06-ad16-1be0b4e6f2a0.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/bd413268-dbe2-4e63-bb51-0c8baedb51ff.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/bd413268-dbe2-4e63-bb51-0c8baedb51ff.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/5bc28471-84c6-45c8-8afb-52235d6fbc68.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/5bc28471-84c6-45c8-8afb-52235d6fbc68.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f74dc28e-9fd1-426d-b266-74f69af4c432.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f74dc28e-9fd1-426d-b266-74f69af4c432.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/28cf6f09-3bb0-4766-b837-80edc97d9a05.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/28cf6f09-3bb0-4766-b837-80edc97d9a05.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/6e9a33d0-fc20-4e93-b1b4-7c5630689388.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/6e9a33d0-fc20-4e93-b1b4-7c5630689388.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/955e1463-a950-4453-a67b-d9454981cd14.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/955e1463-a950-4453-a67b-d9454981cd14.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/af2f1794-a35a-473f-a1c2-14c385e34ddc.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/af2f1794-a35a-473f-a1c2-14c385e34ddc.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/12683b8a-55c6-491a-967e-6ecb9ee4049d.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/12683b8a-55c6-491a-967e-6ecb9ee4049d.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/0ccbaa49-de1f-4c85-88aa-4aa870d0f2b0.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/0ccbaa49-de1f-4c85-88aa-4aa870d0f2b0.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/562f8ba5-23b3-4427-9c26-b8ac6c9b36e9.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/562f8ba5-23b3-4427-9c26-b8ac6c9b36e9.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/5bbf505b-37bb-48ef-96b5-b15a5b83d13d.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/5bbf505b-37bb-48ef-96b5-b15a5b83d13d.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/e91ae36c-ed2c-422c-9095-003d4be90412.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/e91ae36c-ed2c-422c-9095-003d4be90412.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/2b903aa1-0f0b-4665-83cf-c40db37abdc4.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/2b903aa1-0f0b-4665-83cf-c40db37abdc4.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/b75c968d-5f6f-4e82-8767-81f184955870.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/b75c968d-5f6f-4e82-8767-81f184955870.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f5af817e-8003-4034-8ca7-afa7403f049a.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f5af817e-8003-4034-8ca7-afa7403f049a.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/39655847-8746-41c8-b7ab-1c98402ed7e5.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/39655847-8746-41c8-b7ab-1c98402ed7e5.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/7252f811-e664-4ec0-954f-ccfa358cb24d.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/7252f811-e664-4ec0-954f-ccfa358cb24d.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/074d13c6-20cf-49e3-ab3e-d53014e3ad98.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/074d13c6-20cf-49e3-ab3e-d53014e3ad98.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/31f90284-7e44-42bd-a4c7-2ded17b8c57a.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/31f90284-7e44-42bd-a4c7-2ded17b8c57a.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/e99a3830-dcd9-4866-abfb-e2d4a7ba1062.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/e99a3830-dcd9-4866-abfb-e2d4a7ba1062.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/70ba582d-2c79-466f-90f6-8b0a2f11fad7.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/70ba582d-2c79-466f-90f6-8b0a2f11fad7.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f871c0de-79e4-49e2-8835-c82e764a0e3b.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f871c0de-79e4-49e2-8835-c82e764a0e3b.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/bbec3dee-6af2-4bd2-8fd2-538b648a663b.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/bbec3dee-6af2-4bd2-8fd2-538b648a663b.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/be118bb7-9ddf-46d0-95e6-aa835cb024de.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/be118bb7-9ddf-46d0-95e6-aa835cb024de.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/4c195a31-10d3-48bf-8b3b-abb1f758a9e6.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/4c195a31-10d3-48bf-8b3b-abb1f758a9e6.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/320ad456-d7e7-4bfd-80bb-e129efc3c894.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/320ad456-d7e7-4bfd-80bb-e129efc3c894.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f12d47d3-ec84-4ea6-9735-7f7505280ada.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/f12d47d3-ec84-4ea6-9735-7f7505280ada.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/24a9fbee-8f13-4543-a1e0-c374c9a855b8.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-51075100/original/24a9fbee-8f13-4543-a1e0-c374c9a855b8.jpeg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 413264736,
        "firstName": "Elga",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Elga",
        "about": "",
        "memberSince": "Joined in July 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [
          "Identity verified"
        ],
        "hostUrl": "https://www.airbnb.com/users/show/413264736",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/d38af418-8c52-4876-8d97-ae6d76e4d576.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/d38af418-8c52-4876-8d97-ae6d76e4d576.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/38442526",
      "name": "f",
      "stars": null,
      "numberOfGuests": 6,
      "address": "Pongwe, Tanzania",
      "roomType": "Private room in resort",
      "location": {
        "lat": -6.04584,
        "lng": 39.40781
      },
      "reviews": [
        {
          "author": {
            "firstName": "Amy",
            "hasProfilePic": false,
            "id": "300929015",
            "pictureUrl": "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
            "smartName": "Amy",
            "thumbnailUrl": "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
          },
          "comments": "The host canceled this reservation 72 days before arrival. This is an automated posting.",
          "createdAt": "2019-10-17T06:32:25Z",
          "id": "548169713",
          "collectionTag": null,
          "rating": 0,
          "recipient": {
            "firstName": "Farisha",
            "hasProfilePic": false,
            "id": "220857363",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/7d112426-ab71-4da4-8f1d-fdc3a3cbda98.jpg?aki_policy=profile_x_medium",
            "smartName": "Farisha",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/7d112426-ab71-4da4-8f1d-fdc3a3cbda98.jpg?aki_policy=profile_small"
          },
          "response": null,
          "localizedDate": "October 2019",
          "localizedReview": null
        }
      ],
      "pricing": {
        "rate": {
          "amount": 1000,
          "amountFormatted": "$1,000",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/51a8d493-9d11-476d-b15a-287d960c2beb.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/51a8d493-9d11-476d-b15a-287d960c2beb.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/5dca5d4d-4289-4937-a982-2f021a75d90b.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/5dca5d4d-4289-4937-a982-2f021a75d90b.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/20afddcb-7d90-4795-987a-9d244ca36e9f.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/20afddcb-7d90-4795-987a-9d244ca36e9f.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/269dffa8-9768-4695-aedb-2fd38d5bb43e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/269dffa8-9768-4695-aedb-2fd38d5bb43e.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/ffc01263-5a79-455b-97ed-18b68ca0e620.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/ffc01263-5a79-455b-97ed-18b68ca0e620.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/1f4e7da2-8d26-4aa6-8a0b-514cac6957a0.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/1f4e7da2-8d26-4aa6-8a0b-514cac6957a0.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9569ac38-ad84-4c8a-aef3-7f0166e98a56.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9569ac38-ad84-4c8a-aef3-7f0166e98a56.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/40b56fe8-8499-4ad3-a05b-5aea56b4bbe3.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/40b56fe8-8499-4ad3-a05b-5aea56b4bbe3.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/f318e500-9063-4d4b-a806-c642aa766ff1.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/f318e500-9063-4d4b-a806-c642aa766ff1.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/bc2adda2-7e63-443e-91ec-4ca93641681a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/bc2adda2-7e63-443e-91ec-4ca93641681a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/b56b8e15-1b3f-4cfd-b5b3-f50c7d2bd919.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/b56b8e15-1b3f-4cfd-b5b3-f50c7d2bd919.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/88105623-de1f-423e-b393-a0a7eff96eab.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/88105623-de1f-423e-b393-a0a7eff96eab.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/6d3b23fe-8e3a-4e3c-b8be-f100c7480191.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/6d3b23fe-8e3a-4e3c-b8be-f100c7480191.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/156bbf7c-fde5-40ce-b39f-c902a55b169a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/156bbf7c-fde5-40ce-b39f-c902a55b169a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/5d0c545d-85cc-435e-a850-4c0de636a48d.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/5d0c545d-85cc-435e-a850-4c0de636a48d.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/f3249d06-9082-4236-9bd1-3d7d769001fe.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/f3249d06-9082-4236-9bd1-3d7d769001fe.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/e2bd9ee9-de9e-4888-93c3-164333434f34.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/e2bd9ee9-de9e-4888-93c3-164333434f34.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/85d96059-2696-44ea-9164-f1b75cc3cab5.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/85d96059-2696-44ea-9164-f1b75cc3cab5.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/7b5b9f5d-06e0-4bbc-8cb6-decac8931f58.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/7b5b9f5d-06e0-4bbc-8cb6-decac8931f58.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/46cb723b-5166-4d8a-89ed-e256fd7e9bcb.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/46cb723b-5166-4d8a-89ed-e256fd7e9bcb.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/f46ec242-4b2d-4251-8013-085ae8057e76.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/f46ec242-4b2d-4251-8013-085ae8057e76.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/54c80d49-b819-41f4-9725-82a5bc9cb059.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/54c80d49-b819-41f4-9725-82a5bc9cb059.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/533cf2d8-a164-4993-9434-2135a7b6e2ee.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/533cf2d8-a164-4993-9434-2135a7b6e2ee.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/1fc92d36-70a7-4783-ae24-b310b2ce3f65.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/1fc92d36-70a7-4783-ae24-b310b2ce3f65.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/219c7b95-91c3-45fd-8352-220d85ce456c.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/219c7b95-91c3-45fd-8352-220d85ce456c.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 220857363,
        "firstName": "Farisha",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Farisha",
        "about": "",
        "memberSince": "Joined in October 2018",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [
          "1 Review",
          "Identity verified"
        ],
        "hostUrl": "https://www.airbnb.com/users/show/220857363",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/7d112426-ab71-4da4-8f1d-fdc3a3cbda98.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/7d112426-ab71-4da4-8f1d-fdc3a3cbda98.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53485333",
      "name": "Standard Bungalows 15",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.3234,
        "lng": 39.54961
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/47710533",
      "name": "Sleeping under billions stars on a dhow",
      "stars": null,
      "numberOfGuests": 1,
      "address": "Kendwa, Mkoa wa Unguja Kaskazini, Tanzania",
      "roomType": "Shared room in boat",
      "location": {
        "lat": -5.75641,
        "lng": 39.28721
      },
      "reviews": [
        {
          "author": {
            "firstName": "Maria",
            "hasProfilePic": false,
            "id": "209108336",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/4630e448-85e4-407a-99ed-66b9e8dd3453.jpg?aki_policy=profile_x_medium",
            "smartName": "Maria",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/4630e448-85e4-407a-99ed-66b9e8dd3453.jpg?aki_policy=profile_small"
          },
          "comments": "Auni's boat was a wonderful experience which you will need to enjoy in order to discover the beauty of Zanzibar. The boat is amazing, very clean and it offers you the opportunity to experience a unique way of living. Sleeping under millions of stars in the middle of the Indian Ocean is a dream. Totally recommend it and would love to go back again. Thank you Auni for everything!",
          "createdAt": "2021-10-05T11:23:00Z",
          "id": "466374568310351521",
          "collectionTag": null,
          "rating": 5,
          "recipient": {
            "firstName": "Auni",
            "hasProfilePic": false,
            "id": "384341194",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_x_medium",
            "smartName": "Auni",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_small"
          },
          "response": null,
          "localizedDate": "October 2021",
          "localizedReview": null
        },
        {
          "author": {
            "firstName": "Manon",
            "hasProfilePic": false,
            "id": "69177624",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/b9a4f542-29ff-437c-b195-12f36d531a54.jpg?aki_policy=profile_x_medium",
            "smartName": "Manon",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/b9a4f542-29ff-437c-b195-12f36d531a54.jpg?aki_policy=profile_small"
          },
          "comments": "I had a great time. Auni is a beautiful person.",
          "createdAt": "2021-09-04T13:39:39Z",
          "id": "443975292321217164",
          "collectionTag": null,
          "rating": 5,
          "recipient": {
            "firstName": "Auni",
            "hasProfilePic": false,
            "id": "384341194",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_x_medium",
            "smartName": "Auni",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_small"
          },
          "response": null,
          "localizedDate": "September 2021",
          "localizedReview": null
        }
      ],
      "pricing": {
        "rate": {
          "amount": 512,
          "amountFormatted": "$512",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/2b54b29f-deb2-4b48-937a-8732dbc7308a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/2b54b29f-deb2-4b48-937a-8732dbc7308a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/c082dd4c-76c2-4085-a895-37152ae7635b.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/c082dd4c-76c2-4085-a895-37152ae7635b.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/6ae0e7dd-0c63-4d63-b214-5cd8f29ab96c.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/6ae0e7dd-0c63-4d63-b214-5cd8f29ab96c.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 384341194,
        "firstName": "Auni",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Auni",
        "about": "",
        "memberSince": "Joined in January 2021",
        "languages": [
          "English"
        ],
        "hasInclusionBadge": false,
        "badges": [
          "7 Reviews",
          "Identity verified"
        ],
        "hostUrl": "https://www.airbnb.com/users/show/384341194",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/014d894e-5450-4d09-abd7-8353097b0772.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53486536",
      "name": "Deluxe Bungalows 11",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.32348,
        "lng": 39.55039
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53485263",
      "name": "Standard Bungalows 17",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.32372,
        "lng": 39.54971
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53470573",
      "name": "Standard Bungalows 18",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.32196,
        "lng": 39.55017
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53485625",
      "name": "Deluxe Bungalows 9",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.32229,
        "lng": 39.54954
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/62398de9-37e4-4a3a-8943-0bd255a8379e.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9d66e8a3-11a3-47f9-8f38-ce9de23dcac2.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/970c13d0-0d93-41c4-a4d1-e599cf28b543.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/94b8a5c6-4508-4817-a571-4b8f0c1bbd6f.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/cc1b25d8-3572-470c-85d2-088ff6191a3e.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53453930",
      "name": "Superior Bungalows 1 - Ocean View",
      "stars": null,
      "numberOfGuests": 2,
      "address": "Jambiani, Unguja South Region, Tanzania",
      "roomType": "Private room in bed and breakfast",
      "location": {
        "lat": -6.32182,
        "lng": 39.54974
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/3c6aeabc-0b58-42fc-8202-417ac4158698.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/3c6aeabc-0b58-42fc-8202-417ac4158698.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/d364d5d6-76f2-45cd-87ef-9ce51314558f.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/d364d5d6-76f2-45cd-87ef-9ce51314558f.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/9366913d-9e9d-43c0-985b-7fb4955210aa.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/9366913d-9e9d-43c0-985b-7fb4955210aa.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/5fa16b46-e6cf-4ff0-951b-5304986567f9.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/5fa16b46-e6cf-4ff0-951b-5304986567f9.jpeg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/0c42aef2-8ea9-47cc-8381-49f1e4cd78af.jpeg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-53453930/original/0c42aef2-8ea9-47cc-8381-49f1e4cd78af.jpeg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },
    {
      "url": "https://www.airbnb.com/rooms/53485305",
      "name": "Standard Bungalows 16",
      "stars": null,
      "numberOfGuests": 3,
      "address": "Unguja South Region, Tanzania",
      "roomType": "Entire rental unit",
      "location": {
        "lat": -6.3226,
        "lng": 39.54807
      },
      "reviews": [],
      "pricing": {
        "rate": {
          "amount": 500,
          "amountFormatted": "$500",
          "currency": "USD",
          "isMicrosAccuracy": false
        },
        "rateType": "nightly"
      },
      "photos": [
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/bf3f1870-4d82-4499-b015-a914a986ae77.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/15372684-be7a-4113-a7bf-b4b899c6bb3d.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/9af99362-1751-4aa9-aa48-0296edd86a7a.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/50f0d34d-0bc3-4f43-945d-7115cea8cb02.jpg?aki_policy=small"
        },
        {
          "caption": "",
          "pictureUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=large",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/61030d52-05b4-4c7a-b6e1-7ec4057a4434.jpg?aki_policy=small"
        }
      ],
      "primaryHost": {
        "id": 431411846,
        "firstName": "Piotr",
        "isSuperHost": false,
        "hasProfilePic": true,
        "smartName": "Piotr",
        "about": "",
        "memberSince": "Joined in November 2021",
        "languages": [],
        "hasInclusionBadge": false,
        "badges": [],
        "hostUrl": "https://www.airbnb.com/users/show/431411846",
        "pictureUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_large",
        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/a07e9f5d-0d45-4a36-a90d-4f57d6087800.jpg?aki_policy=profile_small"
      },
      "additionalHosts": [],
      "isHostedBySuperhost": false,
      "isAvailable": true
    },

  ];


  constructor(
    public messageService: MessageService,
    public placeService: PlacesService
    ) {}

  ngOnInit(): void {
    this.messageService.getPublicResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });

    // this.getPlaces();
  }

  getPlaces() {
    this.placeService.getPlaces().subscribe(response => {
      // this.places = response;
    })
  }
}
