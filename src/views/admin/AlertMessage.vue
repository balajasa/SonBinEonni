<template>
    <div class="message-alert">
        <div class="alert alert-dismissible" :class="'alert-' + item.status" v-for="(item, i) in messages" :key="i">
        {{ item.message }}
        <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            messages: []
        };
    },
    methods: {
        updateMessage(message, status) {
            const timestamp = Math.floor(new Date() / 1000);
            this.messages.push({
                message,
                status,
                timestamp,
            });
            this.removeMessageWithTiming(timestamp);  // 觸發移除自己的函式，只有外面傳進來的才會自己移除，手動寫入不會觸發
    },
        removeMessage(num) {  // 使用者可自行關閉的函式
            this.messages.splice(num, 1);
        },
        removeMessageWithTiming(timestamp) {  // 移除自己的函式
            const vm = this;
            setTimeout(() => {
                vm.messages.forEach((item, i) => {
                    if (item.timestamp === timestamp) {
                vm.messages.splice(i, 1);
                    }
                });
            }, 5000);  // 5秒後會把自己移除
        },
    },
        created() {
            const vm = this;
            vm.$bus.$on('message:push', (message, status = 'warning') => {  
            // 呼叫bus.js內的bus變數，並用on的方式註冊'message:push'的方法，message、status分別對應上方messages的內容
                vm.updateMessage(message, status);  // 最後再觸發上方updateMessage的方法
            });
    },
};
</script>

<style scope>
.message-alert {
    position: fixed;
    max-width: 50%;
    top: 56px;
    right: 20px;
    z-index: 1100;
}
</style>