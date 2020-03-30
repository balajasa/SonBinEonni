<template>
    <div>
        <!-- 最新消息 -->
        <section class="py-4 news">
            <div class="container">
                <div class="col-md-6 my-4">
                    <p class="h3 text-sbbrown font-weight-bold pt-4">來自大邱的歐尼— —</p>
                    <p class="h3 text-sbbrown font-weight-bold pt-4">秉持藝術家的精神</p>
                    <p class="h3 text-sbbrown font-weight-bold pt-4">　嚴選各類精緻食材</p>
                    <p class="h3 text-sbbrown font-weight-bold pt-4">　　耗時專研美味之秘方—</p>
                    <p class="h3 text-sborange text-center font-weight-bold pt-4">一道道美味的料理因此而生。</p>
                </div>
            </div>
        </section>
        

    <!-- 圖片介紹區 -->
    <section class="menu" >
        <div class="col-md-12 text-center mt-3">
            <img class="img-fluid" src="@/assets/img/oni_logo.png" alt="">
        </div>
        <h2 class="text-sbbrown font-weight-bold text-center py-3 mb-0">只提供美味的食物</h2>
        <div class="row no-gutters justify-content-center my-4">
            <div class="col-md-10">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/24/RmIH69.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">韓式拌飯</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/25/N3Fk6z.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">韓式火鍋</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/24/OAVi6p.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">韓式拉麵</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row no-gutters justify-content-center my-4">
            <div class="col-md-10 mb-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/24/wz0Jge.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">海苔飯捲</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/25/dTxHG4.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">辣炒年糕</a>
                            </div>
                    </div>
                    <div class="col-lg-4 hovereffect">
                        <div class="img-responsive rectangle-image bg-cover" style="background-image: url(https://upload.cc/i1/2020/03/25/95l0U3.jpg);"></div>
                            <div class="overlay">
                            <a href="#" class="info" @click.prevent="$router.push('/shopping/productlist')">其他料理</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <!-- 滾動圖 -->
        <div class="parallax col"></div>
    
        <!-- 尋找我們 -->
        <section class="py-5" style="position: relative;">
            <div class="container">
                <h2 class="text-sbbrown text-center mb-4 font-weight-bold">尋找鬆餅歐尼</h2>
                <div class="row">
                    <div class="col-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.798764638595!2d120.6380078674417!3d24.143704275757543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dc721c23df9%3A0x7d7f32079c4fee44!2z5Y2X5bGv5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1585492557383!5m2!1szh-TW!2stw" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
            <div class="col-md-5 bg-cover jinpic"></div>
        </section>
    </div>
</template>



