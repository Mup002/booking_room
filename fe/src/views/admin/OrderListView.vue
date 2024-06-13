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
                <h2 class="text-xs font-[200]">Dashboard / <span class="font-[100]">Order List</span></h2>
            </div>

            <div class="box-body">
                <div class="box-body-left flex flex-wrap w-full">
                    <div class="w-full h-[40px] mb-4">
                        <div class="w-full h-[20px] relative mt-2">
                            <form class="w-[500px] mx-auto absolute left-0 mb-2">
                                <label for="default-search"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search ..." required />
                                    <button type="submit"
                                        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="w-full mt-4">
                        <table class="table-auto bg-white w-full">
                            <thead>
                                <tr class="border-2 border-black w-full">
                                    <th class="border-2 border-black">Order Id</th>
                                    <th class="border-2 border-black">Customer</th>
                                    <th class="border-2 border-black">Status</th>
                                    <th class="border-2 border-black">Date Added</th>
                                    <th class="border-2 border-black">Total</th>
                                    <th class="border-2 border-black">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in this.allOrder">
                                    <td class="border-2 border-black text-center">{{ order.idOrder }}</td>
                                    <td class="border-2 border-black text-center">{{ order.username }}</td>
                                    <td class="border-2 border-black text-center"> {{ order.paymentStatus }}</td>
                                    <td class="border-2 border-black text-center">{{ order.createdDate }}</td>
                                    <td class="border-2 border-black text-center">{{ order.total }}</td>
                                    <td class="border-2 border-black ">
                                        <router-link class="flex justify-center"
                                            :to="{ path: '/admin/getOrderBy/' + order.idOrder, params: { id: order.idOrder } }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="#b4cab6"
                                                    d="M5 12q0 2.65 1.725 4.625t4.35 2.325q.4.05.663.35T12 20q0 .425-.363.7t-.812.225q-3.375-.425-5.6-2.963T3 12q0-3.4 2.213-5.937T10.8 3.075q.475-.05.838.213T12 4q0 .4-.262.7t-.663.35q-2.625.35-4.35 2.325T5 12m12.175 1H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.3-.3-.3-.712t.3-.713t.7-.3t.7.3l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.3.3-.7.288t-.7-.313t-.3-.7t.3-.7z" />
                                            </svg>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
            allOrder: []
        }
    },
    async mounted() {
        this.checkToken()
        this.getAllOrder()
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
        async getAllOrder() {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/admin/order/getAllByAdmin")
                if (response.status === 200) {
                    this.allOrder = response.data
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
