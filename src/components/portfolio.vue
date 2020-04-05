<template>
    <div>
        <nav-bar></nav-bar>
        <div class="flex-container content-area" id="box">
            <div class="top-title">
                <span class="name">
                    {{ name }}
                </span>
                <span class="top-grey">
                    님의 포트폴리오
                </span>
                <span class="tags">
                    <span class="tags-item">
                        # {{ tags[0] }}
                    </span>
                    <span class="tags-item">
                        # {{ tags[1] }}
                    </span>
                    <span class="tags-item">
                        # {{ tags[2] }}
                    </span>
                </span>
            </div>
            <div class="flex-container">
                <card id="basic_info">
                    <div class="info_contents">
                        <div class="CardTitle">기본정보</div>
                        <div class="basic_contents">
                            <div class="CardContents">
                                <div class="row">
                                    <span class="ContentText">내 수익률</span>
                                    <span class="FlexArea">
                                        <span class="RateVal"> +24</span>
                                        <span class="expectMoneyVal counter">%</span>
                                      </span>
                                </div>
                                <div class="row">
                                    <span class="ContentText">평가금액</span>
                                    <span class="FlexArea">
                                        <span class="expectMoneyVal"> 1,930,752</span>
                                        <span class="expectMoneyVal counter">KRW</span>
                                      </span>
                                </div>
                            </div>
                            <div id="chartContainer">
                                <doughnut></doughnut>
                            </div>
                        </div>
                    </div>
                </card>
                <card id="follower_info">
                    <div class="info_contents">
                        <div class="CardTitle">팔로워 정보</div>
                        <div class="follower-contents">
                            <div class="CardContents">
                                <div class="row">
                                    <span class="ContentText">내 팔로워 수</span>
                                    <span class="FlexArea">
                                        <span class="RateVal"> 512</span>
                                        <span class="expectMoneyVal counter">명</span>
                                      </span>
                                </div>
                            </div>
                            <div>
                                <bar id="followerChart_container"></bar>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBar";
    import Card from "./Card";
    import bar from "./Bar";
    import doughnut from "./Doughnt";

    export default {
        name: "portfolio",
        components: {
            NavBar,
            Card,
            bar,
            doughnut
        },
        data() {
            return {
                name: "코인투",
                tags: [
                    "슈퍼리치",
                    "단타",
                    "분산형"
                ]
            }
        }
    }
</script>

<style scoped>
    #box {
        flex-direction: column;
    }

    .flex-container {
        display: flex;
        margin: auto;
        padding: 2em 0;
    }

    .content-area {
        width: 1200px;
        justify-content: space-between;
        margin: auto;
    }

    .top-title {
        color: black;
        font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Noto Sans KR", "Sans-serif";
        font-weight: bold;
    }

    .name {
        color: rgb(40,85,154);

        font-size: 2em;
        font-weight: bold;
    }

    .top-grey {
        color: rgb(174,181,193);
        font-size: 1em;
    }

    .tags {
        margin-left: 2em;
        color: rgb(0,89,255);
        font-size: 1.5em;
    }

    .tags-item {
        margin-left: 0.5em;
    }


    #basic_info {
        display: flex;
        flex: 2.5;
        width: 810px;
        height: 15em;
        margin-right: 1em;
        margin-left: 50px;
    }

    .info_contents {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    #follower_info {
        flex: 1.4;
        width: 320px;
        height: 15em;
        margin-left: 1em;
        margin-right: 50px;
    }
    .basic_contents {
        display: flex;
    }

    .CardTitle {
        color: rgba(77, 79, 92, 0.61);
        position: relative;
        top: 1em;

        font-family: "Noto Sans KR", sans-serif;
        font-size: 20px;
        font-weight: bold;
    }

    .CardContents {
        color: #4d4f5c;
        width: 25rem;
        position: relative;
        top: 3em;
        margin-left: 2em;
        font-size: 1.2em;
        font-weight: bold;
    }

    .ContentText {
        /*내 수익률*/
        width: 40%;
    }

    .RateVal {
        /*+24*/
        color: red;
    }

    .FlexArea {
        display: inline-flex;
        width: 30%;
        justify-content: flex-end;
    }
    .expectMoneyVal {
        /*% 및 123,456 KRW */
        color: #333333;
    }
    .counter {
        margin-left: 0.5rem;
    }
    .row {
        display: flex;
        margin-bottom: 2rem;
    }

    .follower-contents {
        display: flex;
        flex-direction: column;
    }


    #chartContainer {
        position: relative;
        max-width: 13rem;
    }

    #followerChart_container {
        position: relative;
        top: 4em;
        width: 100%;
        height: 5em;
    }

</style>