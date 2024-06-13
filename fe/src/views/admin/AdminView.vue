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
                       <router-link to="/" class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6 4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6 4h4v-4h-4M4 8h4V4H4z" />
                        </svg>Tổng quan
                       </router-link>
                    </li>
                    <li class="w-full">
                        <router-link class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]" to="/admin/allRoom"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                        </svg> Room List
                        </router-link>
                    </li>
                    <li class="w-full">
                       <router-link to="/admin/allOrder" class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                        </svg> Order Details
                       </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/" class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                        </svg> Room Grid
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/" class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                        </svg> Transactions
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/" class="flex justify-start items-center w-full border-gray-500 border-[2px] border-b-0 h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h6V3m2 0v8h8V5c0-1.11-.89-2-2-2m-6 10v8h6c1.11 0 2-.89 2-2v-6" />
                        </svg> Add New Room
                        </router-link>
                    </li>
                    <li class="w-full">
                        <router-link to="/" class="flex justify-start items-center w-full border-gray-500 border-[2px] h-[50px]">
                            <svg
                            xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
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
                <h2 class="text-xs font-[200]">Dashboard / <span class="font-[100]">Tổng quan</span></h2>
            </div>
            <div class="body-statistical flex  w-full h-[100px] justify-around">
                <div class="box-statistical flex flex-wrap w-[20%] h-[80px] bg-white rounded mx-2 justify-center">
                    <h1 class="text-[10px] w-full text-center">Đơn thành công</h1>
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
                        </svg>
                        <h2 class="pl-2 text-xs font-semibold">3</h2>
                    </div>
                </div>
                <div class="box-statistical flex flex-wrap w-[20%] h-[80px] bg-white rounded mx-2 justify-center">
                    <h1 class="text-[10px] w-full text-center">Tổng doanh thu</h1>
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12.025 21q-.425 0-.712-.288T11.025 20v-1.15Q9.9 18.6 9.05 17.975t-1.375-1.75q-.175-.35-.012-.737t.587-.563q.35-.15.725.013t.575.537q.425.75 1.075 1.138t1.6.387q1.025 0 1.737-.462t.713-1.438q0-.875-.55-1.387t-2.55-1.163q-2.15-.675-2.95-1.612t-.8-2.288q0-1.625 1.05-2.525t2.15-1.025V4q0-.425.288-.713T12.025 3t.713.288t.287.712v1.1q.95.15 1.65.613t1.15 1.137q.225.325.088.725t-.563.575q-.35.15-.725.013t-.7-.488t-.763-.537t-1.087-.188q-1.1 0-1.675.488T9.825 8.65q0 .825.75 1.3t2.6 1q1.725.5 2.613 1.588t.887 2.512q0 1.775-1.05 2.7t-2.6 1.15V20q0 .425-.288.713t-.712.287" />
                        </svg>
                        <h2 class="pl-2 text-xs font-semibold">3</h2>
                    </div>
                </div>
                <div class="box-statistical flex  flex-wrap w-[20%] h-[80px] bg-white rounded mx-2 justify-center">
                    <h1 class="text-[10px] w-full text-center">Người đăng ký</h1>
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20">
                            <circle cx="6" cy="6" r="3" fill="#7a1515" />
                            <circle cx="14" cy="6" r="3" fill="#7a1515" />
                            <path fill="#7a1515"
                                d="M6 10c-3.31 0-6 1.79-6 4v2h6v-2c0-1.48 1.21-2.77 3-3.46c-.88-.35-1.91-.54-3-.54m8 0c-3.31 0-6 1.79-6 4v2h12v-2c0-2.21-2.69-4-6-4" />
                        </svg>
                        <h2 class="w-full pl-2 text-xs font-semibold">3</h2>
                    </div>
                </div>
                <div class="box-statistical flex flex-wrap w-[20%] h-[80px] bg-white rounded mx-2 justify-center">
                    <h1 class="text-[10px] w-full text-center">Số phòng hoạt động</h1>
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="#697a15"
                                d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-3.536c.406-.432.731-.94.953-1.5h2.583a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v2.583a4.8 4.8 0 0 0-1.5.953zM13.49 19.5a3.25 3.25 0 0 1-2.74 1.5h-4.5A3.25 3.25 0 0 1 3 17.75v-4.5A3.247 3.247 0 0 1 6.25 10h4.5A3.25 3.25 0 0 1 14 13.25v4.5c0 .644-.187 1.245-.51 1.75M4.5 13.25v4.5c0 .966.784 1.75 1.75 1.75h4.5a1.75 1.75 0 0 0 1.75-1.75v-4.5a1.75 1.75 0 0 0-1.75-1.75h-4.5a1.75 1.75 0 0 0-1.75 1.75" />
                        </svg>
                        <h2 class="pl-2 text-xs font-semibold">3</h2>
                    </div>
                </div>
            </div>

            <div class="">
                <h1 class="w-full h-[40px] text-center my-2 py-2"> Thông kê số lượng phòng được đặt theo tháng</h1>
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

        }
    },
    async mounted() {
        this.checkToken()
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
    }
}
</script>
