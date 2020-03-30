<template>
    <div>
        <div aria-label="Page navigation">
            <ul class="pagination justify-content-center my-5">
                <li class="page-item" :class="{ 'disabled' : !pagination.has_pre }">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{ 'active' : pagination.current_page === page }">
                    <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
                </li>

                <li class="page-item" :class="{ 'disabled' : !pagination.has_next }">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script> 
export default {
    data() {
        return{}
    },
    props:['pagination'], // 傳給外面Components使用  // 我是兒子
    methods: {
        updatePage(page) {
            this.$emit('emitpage',page);  // 將外面Components資料回傳
        }
    },
};


</script>

