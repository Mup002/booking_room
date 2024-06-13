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
                <h2 class="text-xs font-[200]">Dashboard / <span class="font-[100]">Room List</span></h2>
            </div>

            <div class="box-body flex items-center w-full mt-2">
                <div class="ml-2 w-[20%] h-full relative flex items-center flex-wrap">
                    <div class="w-full flex items-center">
                        <div class="box-left w-[20%] h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16">
                                <path fill="black" fill-rule="evenodd"
                                    d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1zM4 7h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zM4 9h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zm-6 2h2v1H4zm3 0h2v1H7zm3 0h2v1h-2z" />
                            </svg>
                        </div>
                        <div class=" box-right w-[20%] h-full flex flex-wrap justify-center" @click="selectCheckIn">
                            <h1 class="text-xs font-semibold w-full h-[50%]">{{ this.time.checkIn }}</h1>
                        </div>
                    </div>
                    <div v-if="selectedCheckIn" class="select-container absolute top-[50px] w-full bg-white z-10">
                        <div class="w-full h-[100px] flex flex-wrap justify-center">
                            <VDatePicker v-model="this.checkIn" mode="date" />
                            <div class="w-full">
                                <div
                                    class="mt-4 mb-2 border-t flex justify-center items-center border-gray-200 h-[50px]">
                                    <button class="btn btn-close mr-1" @click="formattedCheckInTime">X</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="ml-2 w-[20%] h-full relative flex items-center flex-wrap">
                    <div class="w-full flex items-center">
                        <div class="box-left w-[20%] h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16">
                                <path fill="black" fill-rule="evenodd"
                                    d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1zM4 7h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zM4 9h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zm-6 2h2v1H4zm3 0h2v1H7zm3 0h2v1h-2z" />
                            </svg>
                        </div>
                        <div class=" box-right w-[20%] h-full flex flex-wrap justify-center" @click="selectCheckOut">
                            <h1 class="text-xs font-semibold w-full h-[50%]">{{ this.time.checkOut }}</h1>
                        </div>
                    </div>
                    <div v-if="selectedCheckOut" class="select-container absolute top-[50px] w-full bg-white z-10">
                        <div class="w-full h-[100px] flex flex-wrap justify-center">
                            <VDatePicker v-model="this.checkIn" mode="date" />
                            <div class="w-full">
                                <div
                                    class="mt-4 mb-2 border-t flex justify-center items-center border-gray-200 h-[50px]">
                                    <button class="btn btn-close mr-1" @click="formattedCheckOutTime">X</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="ml-2 w-[20%] flex-wrap justify-start items-center">
                    <div class="flex items-end justify-start">Trạng thái</div>
                    <form class="max-w-sm mx-auto">
                        <select id="status" v-model="status"
                            @change="this.getAllRoomOrdered(this.status, this.pageSize, this.pageNumber,this.name)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="unordered" selected>Còn phòng</option>
                            <option value="ordered">Hết phòng</option>
                        </select>
                    </form>
                </div>

                <!-- <div class="ml-2 w-[20%] flex-wrap justify-start items-center">
                    <div class="flex items-end justify-start">Tầng</div>
                    <form class="max-w-sm mx-auto">
                        <select id="floor"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>    
                        </select>
                    </form>
                </div> -->

                <div class="ml-2 w-[20%] flex-wrap justify-start items-center">
                    <div class="flex items-end justify-start">Tên phòng</div>
                    <form class="max-w-sm mx-auto">
                        <select id="name"
                        v-model="name"
                        @change="this.getAllRoomOrdered(this.status, this.pageSize, this.pageNumber,this.name)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value ="all" selected>All</option>
                            <option value="signature_studio">SIGNATURE STUDIO</option>
                            <option value="executive_suite">EXECUTIVE SUITE</option>
                            <option value="opera_view_suite">OPERA VIEW SUITE</option>
                            <option value="heritage_suite">HERITAGE SUITE</option>
                            <option value="presidetial_suite">PRESIDENTIAL SUITE</option>
                            <option value="two_bedroom_suite">TWO BEDROOM SUITE</option>
                        </select>
                    </form>
                </div>
               
            </div>
            <div class="box-body w-full mt-[20px]">
                <table class="table-auto w-full">
                    <thead>
                        <tr class="w-full border-black border-[1px]">
                            <th class="border-2 border-black">Số phòng</th>
                            <th class="border-2 border-black">Tên phòng</th>
                            <th class="border-2 border-black">Status</th>
                            <th class="border-2 border-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="room in this.roomList">
                            <td class="border-2 border-black text-center">{{ room.coderoom }}</td>
                            <td class="border-2 border-black text-center">{{ room.roomname }}</td>
                            <td class="border-2 border-black text-center">
                                <span v-if="status === 'unordered'">Available</span>
                                <span v-else>Unavailable</span>
                            </td>
                            <td class="border-2 border-black text-center">X</td>
                        </tr>
                    </tbody>
                </table>
                <div class="pagination-container w-full mt-[50px]">
                    <ul class="pagination flex justify-center items-center">
                        <li v-if="this.pageNumber > 0">
                            <button @click="previousPage"
                                class="pagination-button w-[80px] h-[40px] border-black border-[1px] border-spacing-1 rounded justify-center flex items-center mx-[1px]">Previous</button>
                        </li>
                        <li v-for="page in totalPages" :key="page"
                            :class="['pagination-item', 'w-[40px]', 'h-[40px]', 'border-black', 'border-[1px]', 'border-spacing-1', 'rounded', 'justify-center', 'flex', 'items-center', 'mx-[1px]', { 'bg-blue-500': page-1 === currentPage }]">
                            <button class="text-center">{{ page-1 }}</button>
                        </li>

                        <li v-if="this.pageNumber < this.totalPages-1">
                            <button @click="nextPage"
                                class="pagination-button  w-[80px] h-[40px] border-black border-[1px] border-spacing-1 rounded justify-center flex items-center mx-[1px]">Next</button>
                        </li>
                    </ul>
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
            selectedCheckIn: false,
            selectedCheckOut: false,
            time: {
                checkIn: moment(new Date()).format('DD/MM/YYYY'),
                checkOut: moment(new Date()).add(1, 'days').format('DD/MM/YYYY'),
            },
            roomList: [],
            pageSize: 6,
            pageNumber: 0,
            isLast: '',
            totalPages: '',
            status: 'unordered',
            currentPage: 0,
            name : 'all',
   
        }
    },
    async mounted() {
        this.checkToken()
        this.getAllRoomOrdered(this.status, this.pageSize, this.pageNumber,this.name)
      
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
        async getAllRoomOrdered(status, pageSize, pageNumber,name) {
            const checkin = this.format(this.time.checkIn)
            const checkout = this.format(this.time.checkOut)

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/admin/allRoomBySelected?pageSize=${pageSize}&pageNumber=${pageNumber}&checkin=${checkin}&checkout=${checkout}&status=${status}&roomname=${name}`)
                if (response.status == 200) {
                    this.roomList = response.data.roomSkus

                    this.isLast = response.data.isLast
                    this.totalPages = response.data.totalElements
                }
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        formattedCheckInTime() {
            this.time.checkIn = moment(this.checkIn).format('YYYY/MM/DD');
            this.selectedCheckIn = false;
        },
        formattedCheckOutTime() {
            this.time.checkOut = moment(this.checkOut).format('YYYY/MM/DD');
            this.selectedCheckOut = false;
        },
        selectCheckIn() {
            this.selectedCheckIn = true;
        },
        selectCheckOut() {
            this.selectedCheckOut = true;
        },
       
        previousPage() {
            if (this.pageNumber > 0) {
                this.pageNumber--;
                this.getAllRoomOrdered(this.status, this.pageSize, this.pageNumber,this.name)
                this.currentPage = this.pageNumber
            }
        },
        nextPage() {
            if (this.pageNumber < this.totalPages) {
                this.pageNumber++;
                this.getAllRoomOrdered(this.status, this.pageSize, this.pageNumber,this.name)
                this.currentPage = this.pageNumber
            }
        },
        setPage(page) {
            this.pageNumber = page;
        },
        format(date){
            var parts = date.split('/');
            return parts[2] + '-' + parts[1] +'-'+ parts[0];
        }
    }
}
</script>
