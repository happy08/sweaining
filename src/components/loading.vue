<template>
    <div class="loadingbg" v-show="loading">
        <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            loading: false
        }
    },
    created() {
        var that = this;
        this.bus.$on('loading', function(data) {
            that.loading = !!data;
        })
    }
}
</script>
<style scoped>
.loadingbg {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
}
.loading{
    width: 150px;
    height: 15px;
    margin: 0 auto;
    position: relative;
    margin-top:100px;
}
.loading span{
    position: absolute;
    width: 15px;
    height: 100%;
    border-radius: 50%;
    background: #cc6699;
    -webkit-animation: load 1.04s ease-in infinite alternate;
}
@-webkit-keyframes load{
    0%{
        opacity: 1;
        -webkit-transform: translate(0px);
    }
    100%{
        opacity: 0.2;
        -webkit-transform: translate(150px);
    }
}
.loading span:nth-child(1){
    -webkit-animation-delay:0.13s;
}
.loading span:nth-child(2){
    -webkit-animation-delay:0.26s;
}
.loading span:nth-child(3){
    -webkit-animation-delay:0.39s;
}
.loading span:nth-child(4){
    -webkit-animation-delay:0.52s;
}
.loading span:nth-child(5){
    -webkit-animation-delay:0.65s;
}
</style>
