<template>
    <div class="section-header w-full h-[50px]">
        <ul class="flex justify-end items-center mb-2">
            <li class="mb-2 w-[150px] h-[20px] flex justify-center items-center">
                <Icon class="mr-1" icon="arcticons:offerup" />New && Offers
            </li>
            <li class="mb-2 w-[150px] h-[20px] ">
                <a href="/" class="flex justify-center items-center">
                    <Icon class="mr-1" icon="mdi:ticket-outline" />My ticket
                </a>
            </li>
            <li v-if="!this.username" class="mb-2 w-[150px] h-[20px] flex justify-center items-center">
                <Icon @click="gotoLogin" class="mr-1" icon="codicon:account" />My Account
            </li>
            <li v-else class="mb-2 w-[150px] h-[20px] flex justify-center items-center">
                <Icon class="mr-2" icon="codicon:account" /> Hi!, {{ this.username }}
                <Icon class="ml-2" @click="logout(this.username)" icon="icomoon-free:exit" />
            </li>
        </ul>
    </div>
    <div class="flex w-full justify-center">
        <div class="bg-red-300 w-[25%] h-[500px] box-left">
            <h1
                class="text-[15px] font-bold w-full h-[50px] flex justify-center items-center  border-gray-500 border-[2px] border-b-0">
                BOOKING ROOM</h1>
            <div class="w-full">
                <ul class="flex flex-wrap justify-start items-start w-full">
                    <li class="w-full">
                        <router-link to="/"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6 4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6 4h4v-4h-4M4 8h4V4H4z" />
                            </svg>Tổng quan
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]"
                            to="/admin/allRoom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> Room List
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/admin/allOrder"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> Order Details
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> Room Grid
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> Transactions
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> Add New Room
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/"
                            class="flex justify-start items-center w-full border-gray-500 border-[2px] h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                            </svg> User Account
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-blue-300 w-[80%] h-[500px] box-right ">
            <div class="header pl-2 w-full h-[50px] bg-white rounded">
                <h1 class="text-xl font-semibold">Dashboard</h1>
                <h2 class="text-xs font-[200]">Dashboard / <span class="font-[100]">Order Details</span></h2>
            </div>

            <div class="box-body flex justify-around w-full px-2">
                <div class="flex flex-wrap w-[30%] justify-start items-start border-[1px] border-gray-500">
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                            class="ml-2">
                            <path fill="black"
                                d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">Order Details</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                            class="ml-2">
                            <path fill="black"
                                d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">Room Booking </h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                            class="ml-2">
                            <g fill="none">
                                <path stroke="black" stroke-linecap="round" stroke-width="1.5"
                                    d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875" />
                                <path fill="black"
                                    d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                            </g>
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">{{ this.orderDetails.createdDate }}</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"
                            class="ml-2">
                            <path fill="black"
                                d="M4.75 4A2.75 2.75 0 0 0 2 6.75V8h16V6.75A2.75 2.75 0 0 0 15.25 4zM18 9H2v4.25A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25zm-4.5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">{{ orderDetails.paymentMethod }}</h2>
                    </div>
                </div>
                <div class="flex flex-wrap w-[30%] justify-start items-start border-[1px] border-gray-500">
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"
                            class="ml-2">
                            <path fill="black"
                                d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">Customer Details</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"
                            class="ml-2">
                            <path fill="black"
                                d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">{{ orderDetails.username }}</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.15em" height="2em" viewBox="0 0 1920 1792"
                            class="ml-2">
                            <path fill="black"
                                d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353q6 0 43.5 21t97.5 42.5T384 597q67 0 133-23q-5 37-5 66q0 139 81 256m1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5t62-81t85.5-53.5T602 960q10 0 43 21.5t73 48t107 48t135 21.5t135-21.5t107-48t73-48t43-21.5q61 0 111.5 20t85.5 53.5t62 81t43 97.5t26.5 108.5t14 109t3.5 103.5M640 256q0 106-75 181t-181 75t-181-75t-75-181t75-181T384 0t181 75t75 181m704 384q0 159-112.5 271.5T960 1024T688.5 911.5T576 640t112.5-271.5T960 256t271.5 112.5T1344 640m576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128q81-117 81-256q0-29-5-66q66 23 133 23q59 0 119-21.5t97.5-42.5t43.5-21q124 0 124 353m-128-609q0 106-75 181t-181 75t-181-75t-75-181t75-181t181-75t181 75t75 181" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">Default</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                            class="ml-2">
                            <path fill="black"
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">{{ orderDetails.email }}</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"
                            class="ml-2">
                            <path fill="black"
                                d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">{{ orderDetails.phone }}</h2>
                    </div>
                </div>
                <div class="flex flex-wrap w-[30%] justify-start items-start border-[1px] border-gray-500">
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                            class="ml-2">
                            <path fill="black"
                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm7-3h2l.3-1.5q.3-.125.563-.262t.537-.338l1.45.45l1-1.7l-1.15-1q.05-.325.05-.65t-.05-.65l1.15-1l-1-1.7l-1.45.45q-.275-.2-.537-.338T13.3 8.5L13 7h-2l-.3 1.5q-.3.125-.562.263T9.6 9.1l-1.45-.45l-1 1.7l1.15 1q-.05.325-.05.65t.05.65l-1.15 1l1 1.7l1.45-.45q.275.2.538.338t.562.262zm1-3q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14" />
                        </svg>
                        <h2 class="text-[12px] font-[300] ml-2">Option</h2>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <h2 class="text-[12px] font-[300] ml-2 w-[50%]">Invoice</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"
                            class="ml-2 hover:w-[2.5em] hover:h-[2.5em]">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                                <path fill="#46ff2e" stroke="white"
                                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" />
                                <path stroke="#fff" stroke-linecap="round" d="M24 16V32" />
                                <path stroke="#fff" stroke-linecap="round" d="M16 24L32 24" />
                            </g>
                        </svg>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <h2 class="text-[12px] font-[300] ml-2 w-[50%]">Point Reward</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"
                            class="ml-2 hover:w-[2.5em] hover:h-[2.5em]">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                                <path fill="#46ff2e" stroke="white"
                                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" />
                                <path stroke="#fff" stroke-linecap="round" d="M24 16V32" />
                                <path stroke="#fff" stroke-linecap="round" d="M16 24L32 24" />
                            </g>
                        </svg>
                    </div>
                    <div
                        class="w-full flex justify-start h-[50px] items-center border-[1px] border-gray-500 border-l-0 border-r-0 border-t-0">
                        <h2 class="text-[12px] font-[300] ml-2 w-[50%]">Affiliate</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"
                            class="ml-2 hover:w-[2.5em] hover:h-[2.5em]">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                                <path fill="#46ff2e" stroke="white"
                                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" />
                                <path stroke="#fff" stroke-linecap="round" d="M24 16V32" />
                                <path stroke="#fff" stroke-linecap="round" d="M16 24L32 24" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="box-body flex flex-wrap w-full mt-[50px] px-2">
                <div class="flex flex-start items-center w-full h-[50px] border-[2px] border-black bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" class="ml-2">
                        <g fill="none" stroke="black" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2.5" />
                            <path stroke-width="3.75" d="M12 8h.01v.01H12z" />
                            <path stroke-linecap="round" stroke-width="2.5" d="M12 12v4" />
                        </g>
                    </svg>
                    <h2 class="ml-2">Order (#{{ this.orderId }})</h2>
                </div>
                <div class="w-full px-4 mt-2">
                    <table class="table-auto bg-white w-full">
                        <thead>
                            <tr class="border-2 border-black w-full">
                                <th class="border-2 border-black">Room</th>
                                <th class="border-2 border-black">Service</th>
                                <!-- <th class="border-2 border-black">Quantity</th> -->
                                <th class="border-2 border-black">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-2 border-black w-full border-t-0">
                                <td class="border-2 border-black">
                                    <div class="flex flex-wrap">
                                        <h1 class="w-[200px]">{{ orderDetails.roomName }}</h1>
                                        <h1 class="w-[200px]">Số phòng : {{ orderDetails.roomCode }}</h1>
                                        <h1 class="w-[200px]">- From : {{ orderDetails.checkIn }}</h1>
                                        <h1 class="w-[200px]">- Till : {{ orderDetails.checkOut }}</h1>
                                    </div>
                                </td>
                                <td class="border-2 border-black">
                                    <ul class="flex flex-wrap justify-start ">
                                        <li class="w-full text-xs mb-[1px] ml-[2px]"
                                            v-for="(service, index) in orderDetails.detailsService" :key="index">-
                                            {{ service }}</li>
                                    </ul>
                                </td>
                                <td class="border-2 border-black">
                                    $
                                    {{ orderDetails.total }}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="box-body flex flex-wrap w-full mt-[50px] px-2">
                <div class="flex flex-start items-center w-full h-[50px] border-[2px] border-black bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" class="ml-2">
                        <path fill="black"
                            d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20" />
                    </svg>
                    <h1 class="ml-2">Order History</h1>
                </div>
                <div class="w-full mt-[20[px]]">
                    <table class="table-auto w-full bg-white">
                        <thead>
                            <tr class="w-full border-2 border-black">
                                <th class="border-2 border-black">Date Added</th>
                                <th class="border-2 border-black">Comment</th>
                                <th class="border-2 border-black">Status</th>
                                <th class="border-2 border-black">Customer Notified</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border-2 border-black">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="box-body flex flex-wrap w-full mt-[50px] px-2">
                <div class="flex flex-start items-center w-full h-[50px] border-[2px] border-black bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" class="ml-2">
                        <path fill="black"
                            d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20" />
                    </svg>
                    <h1 class="ml-2">Add Order History</h1>
                </div>
                <div class="w-full mt-[20px] flex flex-wrap mb-[50px]">
                    <div class="w-full flex items-center justify-start">
                        <h1 class="semi-bold ">Order Status</h1>

                        <form class="max-w-sm mx-auto">
                            
                            <select id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Complete</option>
                                <option value="PS">Processing</option>
                                <option value="CC">Cancel</option>
                            </select>
                        </form>

                    </div>
                    <div class="w-full mt-[10px]">
                        <h1 class="semi-bold">Notify Customer</h1>
                    </div>
                    <div class="w-full mt-[10px] flex items-start"> 
                        <h1 class="semi-bold w-[20%]">Comment</h1>
                        <input type="text" class="w-[80%] h-[200px] border-[1px] border-black text-start mt-[2px] ml-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Icon } from '@iconify/vue'
import Swal from 'sweetalert2'
import moment from 'moment';

export default {
    components: {
        Icon,
    },
    data() {
        return {
            orderId: this.$route.params.id,
            orderDetails: {}
        }
    },
    async mounted() {
        this.checkToken()
        this.getOrderById(this.orderId)
    },
    async created() {

    },
    methods: {
        async logout(username) {
            const response = await axios.post(`http://localhost:8080/api/v1/account/logout/${username}`)
            if (response.status === 200) {
                localStorage.clear();
                Swal.fire({
                    title: 'Logout Successful!',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: ' OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/users/home";
                    }
                });
            }
        },
        gotoLogin() {
            window.location.href = "/users/login";
        },
        async checkToken() {
            const now = new Date();
            const formattedTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}/${now.getFullYear()}`;
            const refreshToken = localStorage.getItem('refreshToken');
            const refreshExpiration = localStorage.getItem('refreshExpiration');
            if (this.compareTime(refreshExpiration, formattedTime) == -1) {
                localStorage.clear();
            } else {
                const accessExpiration = localStorage.getItem('accessExpiration');
                this.username = localStorage.getItem('username');
                console.log(accessExpiration)
                console.log(formattedTime)
                if (this.compareTime(accessExpiration, formattedTime) == -1 || accessExpiration.length === 0) {
                    this.renewToken(refreshToken);
                }

            }
        },
        compareTime(str1, str2) {
            const dateTime1 = new Date(str1);
            const dateTime2 = new Date(str2);

            // So sánh thời gian
            if (dateTime1 < dateTime2) {
                return -1;
            } else if (dateTime1 > dateTime2) {
                return 1;
            } else {
                return 0;
            }
        },
        async renewToken(refreshToken) {
            const username = localStorage.getItem("username")
            // this.username = username
            const data = {
                refreshToken: refreshToken
            };
            const config = {
                headers: {
                    'x-client-username': `${username}`
                }
            }
            try {
                const response = await axios.post("http://localhost:8080/test/token/renew", data, config)
                if (response.status === 200) {
                    localStorage.removeItem("accessToken")
                    localStorage.setItem("accessToken", response.data.accessToken)
                    localStorage.removeItem("accessExpiration")
                    localStorage.setItem("accessExpiration", response.data.accessExpiration)
                }
            } catch (error) {
                console.error(error)
            }
        },
        async getOrderById(orderId) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/admin/order/getOrderDetailById/${orderId}`)
                if (response.status === 200) {
                    this.orderDetails = response.data
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
