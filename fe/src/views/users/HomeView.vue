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
    <div class="w-full h-[50px] flex justify-center items-start">
        <div class="box w-[30%] h-full relative flex items-center flex-wrap">
            <div class="w-full flex items-center">
                <div class="box-left w-[20%] h-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                        <path fill="none" stroke="black" stroke-width="2"
                            d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <div class="btn-purple box-right w-[80%] h-full flex flex-wrap justify-center items-center"
                    @click="selectNumberPeople">
                    <h1 class="text-xs font-semibold w-full h-[50%]">Khách</h1>
                    <h1 class="text-xs font-semibold w-full h-[50%]">{{ this.people.adults }} người người lớn, {{
                        this.people.children }} trẻ em</h1>
                </div>
            </div>
            <div v-if="selectNumber" class="select-container absolute top-[50px] w-full bg-white z-10">
                <div class="select-header border-b flex justify-between items-center border-gray-200 h-[50px]">
                    <span class="px-1">Chọn khách</span>
                    <button class="btn btn-close mr-1" @click="selectNumber = false">X</button>
                </div>
                <div class="select-body w-full h-[100px]">
                    <div class="select-row flex items-center mb-4 h-[50px]">
                        <label for="adults" class="w-[100px] px-1">Người lớn</label>
                        <input type="number" id="adults" class="pl-2 border-black border" v-model="people.adults"
                            min="1">
                    </div>
                    <div class="select-row flex items-center mb-4 h-[50px]">
                        <label for="children" class="w-[100px] px-1">Trẻ em</label>
                        <input type="number" id="children" class="pl-2 border-black border" v-model="people.children"
                            min="0">
                    </div>
                </div>
                <div class="mt-4 mb-2 select-footer border-t flex justify-center items-center border-gray-200 h-[50px]">
                    <div class="mr-1 btn-cancel w-[80px] h-[50px] bg-white border-black border flex justify-center items-center px-1 text-xs hover:text-[15px] hover:w-[80px] hover:h-[60px]"
                        @click="selectNumber = false">HỦY</div>
                    <div
                        class="ml-1 btn-apply w-[80px] h-[50px] bg-colorBtnSelect text-white flex justify-center items-center px-1 text-xs hover:text-[15px] hover:w-[80px] hover:h-[60px]">
                        ÁP DỤNG</div>
                </div>
            </div>
        </div>
        <div class="box w-[30%] h-full relative flex items-center flex-wrap">
            <div class="w-full flex items-center">
                <div class="box-left w-[20%] h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16">
                        <path fill="black" fill-rule="evenodd"
                            d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1zM4 7h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zM4 9h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zm-6 2h2v1H4zm3 0h2v1H7zm3 0h2v1h-2z" />
                    </svg>
                </div>
                <div class=" box-right w-[20%] h-full flex flex-wrap justify-center" @click="selectCheckIn">
                    <h1 class="text-xs font-semibold w-full h-[50%]">Nhận phòng</h1>
                    <h1 class="text-xs font-semibold w-full h-[50%]">{{ this.time.checkIn }}</h1>
                </div>
            </div>
            <div v-if="selectedCheckIn" class="select-container absolute top-[50px] w-full bg-white z-10">
                <div class="w-full h-[100px] flex flex-wrap justify-center">
                    <VDatePicker v-model="this.time.checkIn" mode="date" />
                    <div class="w-full">
                        <div class="mt-4 mb-2 border-t flex justify-center items-center border-gray-200 h-[50px]">
                            <button class="btn btn-close mr-1" @click="formattedCheckInTime">X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="box w-[30%] h-full flex items-center relative">
            <div class="w-full flex items-center">
                <div class="box-left w-[20%] h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16">
                        <path fill="black" fill-rule="evenodd"
                            d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1zM4 7h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zM4 9h2v1H4zm3 0h2v1H7zm3 0h2v1h-2zm-6 2h2v1H4zm3 0h2v1H7zm3 0h2v1h-2z" />
                    </svg>
                </div>
                <div class=" box-right w-[20%] h-full flex flex-wrap justify-center" @click="selectCheckOut">
                    <h1 class="text-xs font-semibold w-full h-[50%]">Trả phòng</h1>
                    <h1 class="text-xs font-semibold w-full h-[50%]">{{ this.time.checkOut }}</h1>
                </div>
            </div>
            <div v-if="selectedCheckOut" class="select-container absolute top-[50px] w-full bg-white z-10">
                <div class="w-full h-[100px] flex flex-wrap justify-center">
                    <VDatePicker v-model="this.time.checkOut" mode="date" />
                    <div class="w-full">
                        <div class="mt-4 mb-2 border-t flex justify-center items-center border-gray-200 h-[50px]">
                            <button class="btn btn-close mr-1" @click="formattedCheckOutTime">X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <h1 class="font-bold h-[20px] w-full text-lg mb-2 ">CHỌN PHÒNG</h1>
    <div class="w-full h-[70%] bg-colorBgHeader flex justify-start items-start">
        <div class="left w-[80%] bg-red-500 h-full items-start">
            <div class="filter-box h-[50px] w-full border border-black flex justify-end items-center">
                <div class="w-[20%] h-full">
                    <h1 class="text-sm">Xem ket qua theo</h1>
                </div>
                <div class="w-[20%] h-full">
                    <h1 class="text-sm">Sap xep qua theo</h1>
                </div>
                <div class="w-[20%] h-full">
                    <h1 class="text-sm">Hien thi cac bo loc</h1>
                </div>
            </div>

            <div class="w-full bg-colorBgBox flex justify-center">
                <ul class="flex flex-wrap justify-center items-start relative">
                    <li v-for="(room, index) in this.roomInfoList" :key="index" class="w-[90%]">
                        <div class="flex  justify-start items-start relative mb-4">
                            <div class="img-box w-[20%] ml-1 mr-4">
                                <img class="" src="/src/assets/hero.jpg" />
                            </div>
                            <div class="info-box w-[80%] flex flex-wrap justify-center">
                                <div class="w-full box border-black border pb-8 border-t-0 border-l-0 border-r-0">
                                    <h1 class="text-xl mb-4">{{ room.roomName }}</h1>
                                    <h2 class="text-xs right-2 mb-2">Còn lại {{ room.remainRoom }} phòng</h2>
                                    <div class="w-full flex justify-start items-center my-2">
                                        <h1 class="text-[15px]">Chọn số phòng bạn muốn : </h1>
                                        <select id="coderoom" v-model="coderoom">
                                            <option v-for="code in room.roomSku" :value="code.codename"
                                                :disabled="code.status !== 'Available'">
                                                {{ code.status === 'Available' ? code.codename : code.codename +
                                                    '(unavailable now)' }}
                                            </option>
                                        </select>
                                    </div>

                                    <h2 class="text-xs right-2 mb-4">{{ room.conditions }}</h2>
                                    <h1 class="text-xs underline underline-thick hover:text-xl"
                                        @click="detailsRoom(room.id)">CHI TIẾT PHÒNG</h1>
                                    <div v-if="showOverlay"
                                        class="fixed top-0 left-0 w-full h-full z-50 bg-gray-500/50 flex justify-center items-center">
                                        <div
                                            class="bg-[#FFFFFF] w-[50%] h-[500px] p-10 rounded-lg shadow-lg overflow-y-auto">
                                            <button @click="closeDetailRoomOverlay"
                                                class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <div class="flex items-start justify-around">
                                                <div class="info-box w-[50%] flex flex-wrap justify-center">
                                                    <div class="w-full">
                                                        <h1 class="text-xl mb-4">{{ this.roomDetails.roomName }}</h1>
                                                        <h1 class="text-xl mb-4">{{ room.id }}</h1>

                                                        <h2 class="text-xs right-2 mb-4">{{ this.roomDetails.conditions
                                                            }}</h2>
                                                        <h2 class="text-xl font-semibold mb-2">Trang bị trong phòng</h2>
                                                        <ul class="flex flex-wrap justify-start ">
                                                            <li class="w-full text-xs mb-2"
                                                                v-for="(item, index) in this.roomDetails.item"
                                                                :key="index">
                                                                {{ item }}</li>
                                                        </ul>
                                                        <span>{{ this.roomDetails.description }}</span>
                                                    </div>


                                                </div>
                                                <div class="img-box w-[50%] h-full ml-1 mr-4">
                                                    <img class="" src="/src/assets/hero.jpg" />
                                                </div>
                                            </div>

                                            <div
                                                class="w-full mt-4 pt-2 border-gray-500 border-t-2 border-l-0 border-r-0 border-b-0">
                                                <h1 class="text-[15px] mb-4">Đánh giá từ người dùng</h1>
                                                <input v-model="this.newCmt"
                                                    class="w-[80%] h-[30px] mb-4 pl-2 rounded  border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                                                    type="text" placeholder="Hãy để lại đánh giá của bạn!!" />
                                                <button
                                                    class="w-[100px] h-[34px] border-black bg-blue-400 rounded hover:h-[38px]"
                                                    @click="sendComment(this.currentRoomClicked, this.newCmt, this.level[0], '')">Gửi</button>
                                                <div v-if="this.alert.length > 0">
                                                    <h1 class="text-[12px] mb-2 text-red-500">{{ this.alert }}</h1>
                                                </div>
                                                <div class="w-[80%]">
                                                    <!--comment lv1-->
                                                    <ul>
                                                        <li v-for="(comment_lv1, index) in this.allCmt" :key="index"
                                                            class="mb-2">
                                                            <div v-if="comment_lv1.level == this.level[0]" class="">
                                                                <h2
                                                                    class="text-[10px] font-[100] text-gray-400 mb-[1px]">
                                                                    {{ comment_lv1.createdDate }}</h2>
                                                                <!-- <h2> {{ room.id }}</h2> -->
                                                                <div class="flex ">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em"
                                                                        height="2em" viewBox="0 0 24 24">
                                                                        <g fill="none" fill-rule="evenodd">
                                                                            <path
                                                                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                            <path fill="black"
                                                                                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
                                                                        </g>
                                                                    </svg>
                                                                    <div class="flex flex-wrap items-center rounded">
                                                                        <div
                                                                            class="flex flex-wrap  items-center bg-colorBgCmt">
                                                                            <h1
                                                                                class="ml-2 text-[12px] font-semibold w-full">
                                                                                {{ comment_lv1.username }}</h1>
                                                                            <h1
                                                                                class="ml-2 text-[12px] font-[300] w-full">
                                                                                {{ comment_lv1.text }}</h1>
                                                                        </div>
                                                                        <div class="flex justify-start mt-[1px] w-full">
                                                                            <button
                                                                                class="w-[30px] hover:text-blue-600">
                                                                                <h1
                                                                                    class="font-[200] text-[9px] mr-[1px]">
                                                                                    Thích</h1>
                                                                            </button>
                                                                            <button class="w-[60px] hover:text-blue-600"
                                                                                @click="replyCmt(comment_lv1.cmtId)">
                                                                                <h1
                                                                                    class="font-[200] text-[9px] ml-[1px]">
                                                                                    Phản hồi</h1>
                                                                            </button>
                                                                        </div>
                                                                        <div v-if="reply && this.currentCmtClicked == comment_lv1.cmtId"
                                                                            class="w-full">
                                                                            <input v-model="this.replyText"
                                                                                class="w-[80%] h-[30px] mb-4 pl-2 rounded  border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                                                                                type="text"
                                                                                placeholder="Hãy để lại đánh giá của bạn!!" />
                                                                            <button
                                                                                class="w-[100px] h-[34px] border-black bg-blue-400 rounded hover:h-[38px] mr-2"
                                                                                @click="sendComment(this.currentRoomClicked, this.replyText, level[1], this.currentCmtClicked)">Gửi</button>
                                                                            <button
                                                                                class="w-[100px] h-[34px] border-black bg-gray-400 rounded hover:h-[38px]"
                                                                                @click="cancelReplyCmt">
                                                                                Hủy
                                                                            </button>
                                                                        </div>
                                                                        <!---comment lv2 */-->
                                                                        <ul>
                                                                            <li v-for="(comment_lv2, index) in this.allCmt"
                                                                                :key="index" class="mb-2">
                                                                                <div v-if="comment_lv2.level == this.level[1] && comment_lv2.cmtParentId == comment_lv1.cmtId"
                                                                                    class="">
                                                                                    <h2
                                                                                        class="text-[10px] font-[100] text-gray-400 mb-[1px]">
                                                                                        {{ comment_lv2.createdDate }}
                                                                                    </h2>

                                                                                    <div class="flex">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="2em" height="2em"
                                                                                            viewBox="0 0 24 24">
                                                                                            <g fill="none"
                                                                                                fill-rule="evenodd">
                                                                                                <path
                                                                                                    d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                                                <path fill="black"
                                                                                                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
                                                                                            </g>
                                                                                        </svg>
                                                                                        <div
                                                                                            class="flex flex-wrap items-center rounded">
                                                                                            <div
                                                                                                class="flex flex-wrap  items-center bg-colorBgCmt">
                                                                                                <h1
                                                                                                    class="ml-2 text-[12px] font-semibold w-full">
                                                                                                    {{
                                                                                                        comment_lv2.username
                                                                                                    }}</h1>
                                                                                                <h1
                                                                                                    class="ml-2 text-[12px] font-[300] w-full">
                                                                                                    <span
                                                                                                        class="text-[12px] font-semibold ml-2 bg-gray-400 rounded">{{
                                                                                                            comment_lv2.cmtParentUsername
                                                                                                        }}</span>
                                                                                                    {{ comment_lv2.text
                                                                                                    }}
                                                                                                </h1>
                                                                                            </div>
                                                                                            <div
                                                                                                class="flex justify-start mt-[1px] w-full">
                                                                                                <button
                                                                                                    class="w-[30px] hover:text-blue-600">
                                                                                                    <h1
                                                                                                        class="font-[200] text-[9px] mr-[1px]">
                                                                                                        Thích</h1>
                                                                                                </button>
                                                                                                <button
                                                                                                    class="w-[60px] hover:text-blue-600"
                                                                                                    @click="replyCmt(comment_lv2.cmtId)">
                                                                                                    <h1
                                                                                                        class="font-[200] text-[9px] ml-[1px]">
                                                                                                        Phản hồi</h1>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div v-if="reply && this.currentCmtClicked == comment_lv2.cmtId"
                                                                                                class="w-full">
                                                                                                <input
                                                                                                    v-model="this.replyText"
                                                                                                    class="w-[80%] h-[30px] mb-4 pl-2 rounded  border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                                                                                                    type="text"
                                                                                                    placeholder="Hãy để lại đánh giá của bạn!!" />
                                                                                                <button
                                                                                                    class="w-[100px] h-[34px] border-black bg-blue-400 rounded hover:h-[38px] mr-2"
                                                                                                    @click="sendComment(this.currentRoomClicked, this.replyText, level[2], this.currentCmtClicked)">Gửi</button>
                                                                                                <button
                                                                                                    class="w-[100px] h-[34px] border-black bg-gray-400 rounded hover:h-[38px]"
                                                                                                    @click="cancelReplyCmt">
                                                                                                    Hủy
                                                                                                </button>
                                                                                            </div>
                                                                                            <!--comment lv3-->
                                                                                            <ul>
                                                                                                <li v-for="(comment_lv3, index) in this.allCmt"
                                                                                                    :key="index"
                                                                                                    class="mb-2">
                                                                                                    <div v-if="comment_lv3.level == this.level[2] && comment_lv3.cmtParentId == comment_lv2.cmtId"
                                                                                                        class="">
                                                                                                        <h2
                                                                                                            class="text-[10px] font-[100] text-gray-400 mb-[1px]">
                                                                                                            {{
                                                                                                                comment_lv3.createdDate
                                                                                                            }}</h2>

                                                                                                        <div
                                                                                                            class="flex">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="2em"
                                                                                                                height="2em"
                                                                                                                viewBox="0 0 24 24">
                                                                                                                <g fill="none"
                                                                                                                    fill-rule="evenodd">
                                                                                                                    <path
                                                                                                                        d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                                                                    <path
                                                                                                                        fill="black"
                                                                                                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
                                                                                                                </g>
                                                                                                            </svg>
                                                                                                <li
                                                                                                    class="flex flex-wrap items-center rounded">
                                                                                                    <div
                                                                                                        class="flex flex-wrap  items-center bg-colorBgCmt">
                                                                                                        <h1
                                                                                                            class="ml-2 text-[12px] font-semibold w-full">
                                                                                                            {{
                                                                                                                comment_lv3.username
                                                                                                            }}</h1>
                                                                                                        <h1
                                                                                                            class="ml-2 text-[12px] font-[300] w-full">
                                                                                                            <span
                                                                                                                class="text-[12px] font-semibold ml-2 bg-gray-400 rounded">{{
                                                                                                                    comment_lv2.cmtParentUsername
                                                                                                                }}</span>
                                                                                                            {{
                                                                                                                comment_lv3.text
                                                                                                            }}
                                                                                                        </h1>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="flex justify-start mt-[1px] w-full">
                                                                                                        <button
                                                                                                            class="w-[30px] hover:text-blue-600">
                                                                                                            <h1
                                                                                                                class="font-[200] text-[9px] mr-[1px]">
                                                                                                                Thích
                                                                                                            </h1>
                                                                                                        </button>
                                                                                                        <button
                                                                                                            class="w-[60px] hover:text-blue-600"
                                                                                                            @click="replyCmt(comment_lv3.cmtId)">
                                                                                                            <h1
                                                                                                                class="font-[200] text-[9px] ml-[1px]">
                                                                                                                Phản hồi
                                                                                                            </h1>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div v-if="reply && this.currentCmtClicked == comment_lv3.cmtId"
                                                                                                        class="w-full">
                                                                                                        <input
                                                                                                            v-model="this.replyText"
                                                                                                            class="w-[80%] h-[30px] mb-4 pl-2 rounded  border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400"
                                                                                                            type="text"
                                                                                                            placeholder="Hãy để lại đánh giá của bạn!!" />
                                                                                                        <button
                                                                                                            class="w-[100px] h-[34px] border-black bg-blue-400 rounded hover:h-[38px] mr-2"
                                                                                                            @click="sendComment(this.currentRoomClicked, this.replyText, level[2], this.currentCmtClicked - 1)">Gửi</button>
                                                                                                        <button
                                                                                                            class="w-[100px] h-[34px] border-black bg-gray-400 rounded hover:h-[38px]"
                                                                                                            @click="cancelReplyCmt">
                                                                                                            Hủy
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </li>
                                                                                        </div>
                                                                                    </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    </div>
    </div>
    <div class="w-full">
        <ul class="flex flex-wrap justify-normal items-center">
            <li class="w-full border-black border border-t-0 border-l-0 border-r-0 pt-2 pb-4 flex justify-around items-start"
                v-for="(service, indexx) in room.services" :key="indexx">
                <div class="box flex justify-between w-[70%]">
                    <div class="box-left">
                        <h1 class="text-xl underline font-semibold">{{ service.description
                            }}</h1>
                        <ul>
                            <li class="text-xs font-semibold list-disc ml-4"
                                v-for="(details, indexxx) in service.details" :key="indexxx">{{
                                    details }}</li>
                        </ul>
                    </div>
                </div>
                <div class="box flex flex-wrap right w-[30%]">
                    <h1 class="w-full text-xl font-bold pb-1">{{ service.price }} US$</h1>
                    <h2 class="w-full text-xs pb-8">Mỗi đêm</h2>
                    <button
                        class="w-[150px] h-[50px] text-white bg-purple-400 text-sm font-bold items-center hover:w-[160px] hover:h-[60px] hover:text-xl"
                        @click="orderRoom(room.id, this.username, service.id, room.roomName, service.price, this.coderoom)">Đặt
                        ngay</button>
                </div>
            </li>
        </ul>
    </div>
    </div>
    </div>
    </li>
    </ul>
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
        <div v-if="this.orderDetails" class="w-full rounded-sm border border-black flex justify-center items-center">
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
            roomInfoList: [],
            showOverlay: false,
            roomDetails: {},
            checkIn: '',
            checkOut: '',
            coderoom: '',
            selectNumber: false,
            selectedCheckIn: false,
            selectedCheckOut: false,

            people: {
                children: 1,
                adults: 4
            },
            time: {
                // checkIn: moment(new Date()).format('DD/MM/YYYY'),
                checkIn: '18/04/2024',
                checkOut: moment(new Date()).add(1, 'days').format('DD/MM/YYYY'),
            },

            orderDetails: {},
            allCmt: [],
            level: ["LEVEL_1", "LEVEL_2", "LEVEL_3"],
            newCmt: '',
            alert: '',
            currentRoomClicked: '',
            reply: false,
            currentCmtClicked: '',
            replyText: ''
        }
    },
    async created() {
        
        console.log(this.orderDetails)
    },
    async mounted() {
        this.getAllRooms()
        this.checkToken()
        if (this.username.length > 0 && localStorage.getItem("accessToken").length > 0) {
            this.getOrderIfExists(this.username)
        }

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

        //////////////
        async getAllRooms() {
            const checkin = this.format(this.time.checkIn)
            const checkout = this.format(this.time.checkOut)
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/room/getAll?checkin=${checkin}&checkout=${checkout}`)
                this.roomInfoList = response.data.map(room => ({
                    id: room.id,
                    roomName: room.roomName,
                    number: room.number,
                    remainRoom: room.remainRoom,
                    roomType: room.roomType,
                    description: room.description,
                    item: room.item,
                    conditions: room.conditions,
                    available: room.available,
                    services: room.serviceResponse.map(service => ({
                        id: service.id,
                        description: service.description,
                        details: service.details,
                        price: service.price
                    })),
                    roomSku: room.roomSkus.map(sku => ({
                        id: sku.id,
                        codename: sku.codename,
                        status: sku.status
                    }))

                }));
            } catch (error) {
                console.error(error)
            }
        },
        async detailsRoom(roomId) {
            this.showOverlay = true;

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/room/getRoom/${roomId}`);
                // Update the entire roomDetails object
                this.roomDetails = response.data;
                this.getAllCommentByRoom(roomId)
                this.currentRoomClicked = roomId
            } catch (error) {
                console.error("Error fetching room details:", error);
            } finally {
                // Optional cleanup code
            }

        },
        async orderRoom(roomId, username, serviceId, roomName, total, coderoom) {
            if (username === null || username.length === 0) {
                window.location.href = "/users/login"
            } else{
                const accessToken = localStorage.getItem("accessToken")
                const config = {
                    headers: {
                        'x-client-username': `${username}`,
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
                const requestData = {
                    roomId: roomId,
                    serviceId: serviceId,
                    roomName: roomName,
                    checkIn: this.time.checkIn,
                    checkOut: this.time.checkOut,
                    total: total,
                    codeRoom: coderoom,
                    peopleDetails: `${this.people.adults} người lớn ${this.people.children} trẻ em`
                }

                try {
                    const response = await axios.post("http://localhost:8080/api/v1/cart/add", requestData, config)
                    if (response.status == 200) {
                        this.orderDetails = response.data
                        window.location.href = "/users/services"
                
                    }
                } catch (error) {
                    console.error(error)
                }
            
            }
            
        },
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

                if (response.data !== null) {
                    this.orderDetails = response.data;
                }
            } catch (erorr) {

            }
        },
        async getAllCommentByRoom(roomId) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/comment/allCmt/${roomId}`)
                if (response.status == 200) {
                    this.allCmt = response.data
                }
            } catch (error) {
                console.error(error);
            }
        },
        async sendComment(roomId, newCmt, levelCmt, parentCmtId) {
            if (this.username.length <= 0) {
                this.alert = 'Bạn cần đăng nhập trước!!!'
                setTimeout(() => {
                    this.alert = '';
                }, 5000);
                this.newCmt = ''
            } else {
                if (newCmt <= 0) {
                    this.alert = 'Hãy nhập đánh giá của bạn!!!!'
                    setTimeout(() => {
                        this.alert = '';
                    }, 5000);
                } else {
                    const dataSend = {
                        roomId: roomId,
                        text: newCmt,
                        level: levelCmt,
                        cmtParentId: parentCmtId,
                    };
                    console.log(dataSend)
                    const config = {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                            'x-client-username': `${localStorage.getItem("username")}`
                        }
                    }

                    try {
                        const response = await axios.post('http:///localhost:8080/api/v1/comment/cmt', dataSend, config)
                        if (response.status === 200) {
                            this.newCmt = '',
                                this.replyText = ''
                            this.currentCmtClicked = ''
                            this.getAllCommentByRoom(roomId)
                        }

                    } catch (error) {
                        console.error(error)
                    }
                }
            }


        },
        async cancelOrder() {
            await Swal.fire({
                title: 'Bạn muốn bỏ chọn phòng này?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    const accessToken = localStorage.getItem("accessToken")
                    const username = localStorage.getItem("username")
                    const config = {
                        headers: {
                            'x-client-username': `${username}`,
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }

                    try {
                        const response = axios.delete("http://localhost:8080/api/v1/cart/delete/orderBy", config)
                        if (response.status === 200) {
                            this.orderDetails = ''
                            window.location.reload()
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }
            })
        },
        closeDetailRoomOverlay() {
            this.showOverlay = false;
            this.reply = false
            this.currentCmtClicked = ''
            this.currentRoomClicked = ''
            this.replyText = ''
        },
        selectNumberPeople() {
            this.selectNumber = true;
        },
        selectCheckIn() {
            this.selectedCheckIn = true;
        },
        selectCheckOut() {
            this.selectedCheckOut = true;
        },
        formattedCheckInTime() {
            this.time.checkIn = moment(this.time.checkIn).format('DD/MM/YYYY');
            this.selectedCheckIn = false;
        },
        formattedCheckOutTime() {
            this.time.checkOut = moment(this.time.checkOut).format('DD/MM/YYYY');
            this.selectedCheckOut = false;
        },
        replyCmt(cmtId) {
            this.currentCmtClicked = cmtId
            this.reply = true;
        },
        cancelReplyCmt() {
            this.currentCmtClicked = ''
            this.reply = false;
            this.replyText = ''
        },
        format(date) {
            var parts = date.split('/');
            return parts[2] + '-' + parts[1] + '-' + parts[0];
        }
    },
}

</script>
