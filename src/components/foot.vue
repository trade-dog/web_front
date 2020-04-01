<template>
    <div class="flex-container">
        <div class="right">
            <div class="footer-title">Trade Dog™</div>
            <div>가상화폐 트레이딩 동향 분석 플랫폼</div>
        </div>
        <div class="left">
            <div class="footer-title-small">정책</div>
            <li><a href="https://coinone.co.kr/terms">이용약관 및 규정</a></li>
            <li><a href="https://coinone.co.kr/privacy">개인정보 수집방침</a></li>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .flex-container {
        display: flex;
        font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
        color: rgb(174, 179, 187);
    }
    .right {
        width: 50%;
        height: 2em;
    }

    .left {
        width: 50%;
    }
    .footer-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .footer-title-small {
        font-size: 1.1em;
        color: rgb(121, 129, 143);
        font-weight: bold;
    }

</style>