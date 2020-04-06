<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-4 mt-4 mb-2 text-muted">
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2 pl-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              商品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orderslist">
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">
              優惠券
            </router-link>
          </li>
        </ul>
        <ul class="nav flex-column mb-2 mt-5 pl-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-store"></i> 回到商店
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
