<template>
  <LayoutManageplus>
    <!-- header -->
    <div
      class="bg-gradient-to-r from-blue-900 from-60% via-zinc-950 to-zinc-950"
    >
      <div class="grid grid-cols-6 gap-3 px-3 py-3">
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white text-sm whitespace-nowrap text-ellipsis overflow-hidden"
          >
            หน้าแรก
          </h3>
        </div>
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm"
          >
            ระบบหลังบ้าน
          </h3>
        </div>
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm"
          >
            ระบบชำระเงิน
          </h3>
        </div>
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm"
          >
            สินค้า
          </h3>
        </div>
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm"
          >
            บริการ
          </h3>
        </div>
        <div class="cursor-pointer">
          <h3
            class="hover:text-gray-500 text-center text-white whitespace-nowrap text-ellipsis overflow-hidden text-sm"
          >
            ติดต่อ
          </h3>
        </div>
      </div>
    </div>

    <!-- ส่วนของแพคเกจ 3ส่วน -->
    <div class="sm:grid sm:grid-cols-3 gap-3 px-3 mt-6 pb-2">
      <div class="bg-amber-50 drop-shadow-xl rounded-lg pb-2">
        <div class="flex justify-between px-2">
          <div class="">
            <p
              class="text-xl font-extrabold whitespace-nowrap text-ellipsis overflow-hidden text-gray-700"
            >
              แพคเกจ เริ่มต้น
            </p>
            <p class="text-gray-500">5,000/เดือน</p>
          </div>
          <div class="text-center">
            <p class="text-center text-gray-600">เริ่มต้น</p>
            <p class="text-center text-gray-600">5000/เดือน</p>
          </div>
        </div>
        <div class="mt-20">
          <h1 class="text-3xl font-extrabold text-lime-600">5,000 บาท</h1>
        </div>
        <button
          class="bg-blue-600 hover:bg-blue-800 rounded-lg w-full text-white py-2"
        >
          ชำระเงิน
        </button>
      </div>

      <div class="bg-amber-50 drop-shadow-xl rounded-lg mt-10 sm:mt-0">
        <div class="flex justify-between px-2">
          <div class="">
            <p
              class="text-xl font-extrabold whitespace-nowrap text-ellipsis overflow-hidden text-gray-500"
            >
              แพคเกจ โปร
            </p>
            <p class="">10,000/เดือน</p>
          </div>
          <div class="text-center">
            <p class="text-center">เริ่มต้น</p>
            <p class="text-center ">10000/เดือน</p>
          </div>
        </div>
        <div class="mt-20">
          <h1 class="text-3xl font-extrabold text-lime-600">10,000 บาท</h1>
        </div>
        <button
          class="bg-blue-600 hover:bg-blue-800 rounded-lg w-full text-white py-2"
        >
          ชำระเงิน
        </button>
      </div>

      <div class="bg-amber-50 drop-shadow-xl rounded-lg mt-10 sm:mt-0">
        <div class="flex justify-between px-2">
          <div class="">
            <p
              class="text-xl font-extrabold whitespace-nowrap text-ellipsis overflow-hidden text-gray-500"
            >
              แพคเกจ Enterprise
            </p>
            <p class="">15,000/เดือน</p>
          </div>
          <div class="text-center">
            <p class="text-center">เริ่มต้น</p>
            <p
              class="text-center whitespace-nowrap text-ellipsis overflow-hidden"
            >
              15000/เดือน
            </p>
          </div>
        </div>
        <div class="mt-20">
          <h1 class="text-3xl font-extrabold text-lime-600">15,000 บาท</h1>
        </div>
        <button
          class="bg-blue-600 hover:bg-blue-800 rounded-lg w-full text-white py-2"
        >
          ชำระเงิน
        </button>
      </div>
    </div>

    <!-- ตัวหนังสือ -->
    <div class="text-center px-10 mt-10">
      <h4 class="text-2xl text-amber-700 font-extrabold">
        ออกแบบเว็บไซต์ คุณภาพสูง พร้อมออกแบบระบบโครงสร้างทั้งหมด
      </h4>
    </div>

    <!-- ตัวหนังสือ -->
    <div class="text-center px-10 mt-5">
      <h5 class="text-xl text-amber-500 font-extrabold">
        ทำเว็บไซต์ไว้ให้เสร็จแล้ว ไม่ต้องลงข้อมูลเอง พร้อมใช้ทันที
        มีให้เลือกมากกว่า 200+ เว็บ ที่ตรงกับธุรกิจของท่าน
      </h5>
    </div>

    <!-- logo บริษัท -->
    <img
      class="w-1/2 h-1/2 mx-auto sm:mt-10"
      src="../assets/images/logoManageplus.png"
      alt=""
    />

<!-- ส่วนของ icon ที่จะทำ corousel -->
    <div class="grid grid-cols-5 space-x-3 px-2 mt-10 pb-10">
      <div class="text-center whitespace-nowrap text-ellipsis overflow-hidden">
        <img src="../assets/images/icon1.png" alt="icon1" />หน้าเว็บ
      </div>
      <div class="text-center whitespace-nowrap text-ellipsis overflow-hidden">
        <img src="../assets/images/icon2.png" alt="icon2" />ผู้ใช้งานระบบ
      </div>
      <div class="text-center whitespace-nowrap text-ellipsis overflow-hidden">
        <img src="../assets/images/icon3.png" alt="icon3" />มูลค่าภายในระบบ
      </div>
      <div class="text-center whitespace-nowrap text-ellipsis overflow-hidden">
        <img src="../assets/images/icon4.png" alt="icon4" />ฟังก์ชั่นการใช้งาน
      </div>
      <div class="text-center whitespace-nowrap text-ellipsis overflow-hidden">
        <img src="../assets/images/icon5.png" alt="icon5" />ทีมงานดูแล
      </div>
    </div>

    <!-- ส่วนของ icon 6 icon -->
    <div class="sm:grid sm:grid-cols-2 center">
      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic1.png" alt="ic1" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>

      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic2.png" alt="ic2" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>

      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic3.png" alt="ic3" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>


      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic4.png" alt="ic4" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>

      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic5.png" alt="ic5" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>

      <div class="flex text-center gap-3">
        <div class="h-30 w-30"><img src="../assets/images/ic6.png" alt="ic6" /></div>
        <div>
          <h1 class="text-xl font-bold text-gray-500">
            ระบบจัดการบัญชี Slip PayIn/Out
          </h1>
          <h2 class="text-lg">
            เราพัฒนาระบบ AI ในการตรวจสอบเรื่องทุจริต
            หมดความกังวลใจและสร้างความน่าเชื่อถือทางธุรกิจ
          </h2>
        </div>
      </div>
    </div>

    
    <!-- logo บริษัท -->
    <img
      class="w-1/2 h-1/2 mx-auto sm:mt-10"
      src="../assets/images/logoManageplus.png"
      alt=""
    />
    <h3 class="text-gray-500 text-center text-xl">
      ระบบ Wallet ชำระสินค้าออนไลน์ เรามีบริการชำระสินค้าออนไลน์
      ผ่านช่องทางมากมาย หลากมาย ปลอดภัย 100%
    </h3>

    <!-- ส่วนสุดท้ายการชำระเงิน -->
    <div class="grid grid-cols-2 mt-10">
      <div class="flex justify-between">
        <div class="text-center">
          <img src="../assets/images/imageRobot.png" alt="imageRobot" />
        </div>
        <div class="text-center">
          <h1 class="text-2xl text-gray-500">ชำระเงินง่ายมีครบทุกช่องทาง</h1>
          <h3 class="text-lg text-gray-400">
            ทางเราพัฒนาระบบเพื่อให้ลูกค้าสามารถชำระเงินได้อย่างง่าย
            และสะดวกด้วยการชำระเงินผ่านบัตรเครดิตและบัตรเดบิต
          </h3>
        </div>
      </div>
      <div class="text-center">
        <img src="../assets/images/imageDashboard.png" alt="imageDashboard" />
      </div>
    </div>

  </LayoutManageplus>
</template>

<script>
// import $ from "jquery";
import LayoutManageplus from "@/layouts/LayoutManageplus.vue";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "HomePage",

  setup() {},

  components: {
    LayoutManageplus,
  },
};
</script>

<style scoped></style>
