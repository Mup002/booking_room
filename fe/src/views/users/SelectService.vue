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
    <div class="w-full h-[70%] bg-colorBgHeader flex justify-start items-start">
        <div class="left w-[70%] h-full relative flex flex-wrap ">
            <div class="w-full flex items-center h-[100px] relative">
                <div class="absolute top-[6px] h-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="none" stroke="black" stroke-width="2" d="M22 12H2m9-9l-9 9l9 9" />
                    </svg>
                </div>
                <h1 class="w-full h-[100px] ml-10 mt-2 text-xl font-bold">
                    Tận hưởng thời gian lưu trú thoải mái hơn
                </h1>

            </div>
            <div class="w-full flex flex-wrap">
                <div class="box w-full bg-colorBgGray">
                    <ul class="flex flex-wrap justify-center w-full">
                        <li v-for="(service, index) in this.allService" :key="index"
                            class="w-full h-[500px] flex justify-center mb-8 bg-white p-2">
                            <div class="w-[40%] h-[300px] mr-2 p-2">
                                <img :src="service.url" class="w-full h-full">
                            </div>
                            <div class="w-[50%] flex flex-wrap justify-start items-start mt-4 h-[300px] relative">
                                <div class="w-full">
                                    <h1 class="text-[20px] font-semibold w-[70%]">
                                        {{ service.description }}
                                    </h1>
                                    <div class="flex flex-wrap justify-start w-[30%]">
                                        <h1 class="text-[15px] font-bold"> {{ service.price }} $</h1>
                                        <h2 class="text-[12px]">Mỗi Thời gian lưu trú
                                            <span class="block"> Không gồm thuế và phí</span>
                                        </h2>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <ul class="flex flex-wrap justify-start items-start w-full">
                                        <li v-for="(detail, index) in service.details" :key="index" 
                                        class="w-full text-[15px] list-disc ml-8">
                                        {{ detail }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-full absolute bottom-[-50%] right-[-20%]">
                                    <button class="w-[400px] h-[50px] bg-purple-800 text-white text-[15px] font-semibold hover:bg-purple-500">Thêm vào thông tin lưu trú của tôi</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right w-[28%] h-full relative flex flex-wrap bg-blue-300">
            <h1 class="text-xl font-bold px-1 mb-4">THÔNG TIN LƯU TRÚ CỦA BẠN</h1>
            <div class="flex justify-around px-1 h-[50px] mb-4 items-center">
                <div class="flex flex-wrap w-[100px] items-center h-[50px]">
                    <div class="text-xs font-semibold">Nhận phòng</div>
                    <div class="text-xs">Sau 14:00</div>
                </div>
                <div class="flex flex-wrap w-[100px] items-center  h-[50px] ">
                    <div class="text-xs font-semibold">Trả phòng</div>
                    <div class="text-xs">Trước 12:00</div>
                </div>
            </div>
            <div v-if="this.orderDetails.username != null && this.orderDetails && Object.keys(this.orderDetails).length > 0"
                class="border border-black border-l-0 border-r-0 border-t-2 border-b-0 py-2 w-full flex flex-wrap items-center">
                <h1 class="text-xs font-semibold w-full pb-2">{{ this.orderDetails.checkIn }} - {{
                    this.orderDetails.checkOut }}</h1>
                <h1 class="text-xs font-semibold w-full pb-2">{{ this.orderDetails.peopleDetails }}</h1>
                <div class="flex justify-between items-center w-full">
                    <h2 class="text-xs font-semibold w-[50%]">{{ this.orderDetails.roomName }}</h2>
                    <h2 class="text-xs font-semibold w-[50%]">{{ this.orderDetails.codeRoom }}</h2>
                </div>
            </div>
            <div class="flex w-full justify-around items-start py-1 border border-black">
                <div class="">Tổng : </div>
                <div class="">0,00 US$</div>
            </div>
            <div v-if="this.orderDetails"
                class="w-full rounded-sm border border-black flex justify-center items-center">
                <button class="w-full h-[40px] text-[15px] bg-red-400 hover:text-xl" @click="cancelOrder">Hủy</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
import moment from 'moment';
import { ref } from 'vue';
import Swal from 'sweetalert2'
export default {
    components: {
        Icon,
    },
    data() {
        return {
            username: '',
            orderDetails: {},
            allService: [],
            check : true
        }
    },
    async created() {
        this.checkToken()
        if (this.username.length > 0 && localStorage.getItem("accessToken").length > 0) {
            this.getOrderIfExists(this.username)
            console.log(this.check)
            console.log(this.orderDetails)
            if(this.check === false){
                window.location.href("/")
            }
            this.getAllOtherService()
        }
    },
    async mounted() {
        

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
                        window.location.href = "/";
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
        ////////////
        async getOrderIfExists(username) {
            const accessToken = localStorage.getItem("accessToken")
            const config = {
                headers: {
                    'x-client-username': `${username}`,
                    'Authorization': `Bearer ${accessToken}`
                }
            }

            try {
                const response = await axios.post("http://localhost:8080/api/v1/cart/getByUsername", null, config);
                if(response.data.code == 400){
                    this.check = false;
                }else{
                    this.orderDetails = response.data
                }
                console.log(response.data)
            } catch (erorr) {

            }
        },
        async getAllOtherService() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/service/getAnotherService');
                this.allService = response.data;
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
