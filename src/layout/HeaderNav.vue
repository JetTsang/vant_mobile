<template>
    <van-row>
        <van-col span="24">
            <van-nav-bar :title="title"  right-text="按钮" left-arrow @click-left="onClickLeft"
                @click-right="onClickRight" >
                <template #right>
                    <van-icon name="weapp-nav" size="18" />
                </template>
                </van-nav-bar>
        </van-col>
    </van-row>
</template>

<script>
export default {
    name: 'HeaderNav',
    computed: {
        title(){
            return this.$route.meta.title || ''
        }
    },
    methods: { 

    }
}
</script>

<style></style>