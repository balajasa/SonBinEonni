<template>
  <div>
    <DbNavbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <DbSidebar></DbSidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>  <!-- 目前router-view為巢狀 -->
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// 將要置入此頁面的元件import近來
import DbSidebar from './DbSidebar';
import DbNavbar from './DbNavbar';
import Alert from './AlertMessage';

export default {
  components: {
    DbSidebar,
    DbNavbar,
    Alert,
  },
};






</script>