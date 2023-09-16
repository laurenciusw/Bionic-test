<template>
  <div>
    <!--  -->
    <div class="border-8 border-black bg-blue-700 p-4 mx-2 mt-2">
      <a class="text-center block">1</a>
    </div>

    <div class="flex mx-2">
      <div class="flex flex-1 bg-blue-700 p-4 border-8 border-black">2</div>

      <div class="flex flex-1 bg-blue-700 p-4 border-8 border-black">3</div>
    </div>

    <div class="md:flex mx-2">
      <div class="w-full sm:w-8/12 bg-blue-700 p-2 border-8 border-black">
        <div class="flex flex-1 bg-red-700 p-14 border-8 border-black object-top">4</div>
        <div class="flex mt-2 mb-0">
          <div class="w-1/3 bg-blue-700 p-4 border-8 border-black">5</div>
          <div class="w-1/3 bg-blue-700 p-4 border-8 border-black">6</div>
          <div class="w-1/3 bg-blue-700 p-4 border-8 border-black">7</div>
        </div>
      </div>

      <div class="w-full sm:w-4/12 bg-blue-700 p-2 border-8 border-black">
        <div class="flex flex-wrap">
          <div class="bg-red-700 p-4 border-8 border-black w-auto sm:w-full m-2">8</div>
          <div class="bg-red-700 p-4 border-8 border-black w-auto sm:w-full m-2">9</div>
          <div class="bg-red-700 p-4 border-8 border-black w-auto sm:w-full m-2">10</div>
        </div>
      </div>
    </div>

    <div class="m-2 hidden md:flex">
      <div class="w-7/12 bg-blue-700 h-40 -z-10 border-8 border-black relative">
        <div class="w-32 h-14 bg-red-700 absolute p-4"></div>
        <div class="w-32 h-14 bg-red-700 absolute bottom-0 mx-28 z-20"></div>
        <div class="w-24 h-28 bg-white relative inset-y-1 z-10 mx-16 my-3"></div>
        <div class="w-32 h-14 bg-red-700 absolute top-0 right-0 -mx-20 transform z-20"></div>
        <div class="w-32 h-14 bg-red-700 absolute bottom-0 right-0 transform -mx-60 z-20"></div>
      </div>

      <div class="ml-auto">
        <img :src="imageUrl" alt="Album" class="h-40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://i.pinimg.com/originals/87/c9/af/87c9af6103c1410de357dee408433cd9.png'
    }
  }
}
</script>
