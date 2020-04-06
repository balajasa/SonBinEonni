<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <!-- <div class="container"> -->
      <!-- 輪播 -->
      <Carousel></Carousel>
    <!-- </div> -->
      <main>
          <!-- <router-view></router-view>  目前router-view為巢狀 -->
          <ContentPage></ContentPage>
      </main>
    <!-- 訂閱優惠 -->
    <Subscription></Subscription>
    <!-- 頁尾 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 將要置入此頁面的元件import近來
import Navbar from './Navbar';
import Alert from '../views/admin/AlertMessage';
import Carousel from './Carousel';
import ContentPage from '@/components/pages/front/ContentPage';
import Subscription from '@/components/pages/front/Subscription';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Alert,
    Carousel,
    ContentPage,
    Subscription,
    Footer,
  },
};

</script>