<template>
    <div>
        <nav-bar></nav-bar>
        <grey-background>
            <div class="flex-container content-area">
                <div class="search">
                    <i class="fa fa-search" id="search"></i>
                    <div class="search-all">
                        <input type="text" class="input-field" placeholder="태그/코인별 상세검색"  v-on:keydown="getSearch" v-model="sentence">

                        <div class="search-big">
                            <div class="search-box" id="search-box" v-for="result in searchList" v-bind:key="result">
                                <div class="search-result" v-on:click="getAutoComplete(result)">{{result}}</div>
                            </div>
                        </div>
                    </div>
                    <span class="toggle">
                        <i class="fa fa-caret-down"></i>

                    </span>
                </div>
            </div>
        </grey-background>
        <div class=" content-area">
            <div class="trend-kind">
                <span class="trend-kind-big">팔로우 트렌드</span>
                <span class="trend-kind-small">수익률 TOP10</span>
            </div>
            <div class="flex-container trend-wrapper">
                <trend-card
                        class="trend"
                        :key="trendData.id"
                        v-for="trendData in trendData"
                        :trendData="trendData"
                ></trend-card>
            </div>
        </div>
        <grey-background>
            <div class="content-area">
                <foot>

                </foot>
            </div>
        </grey-background>
    </div>
</template>

<script>
    import NavBar from "./NavBar";
    import GreyBackground from "./GreyBackground";
    import TrendCard from "./TrendCard";
    import foot from "./footer";
    import api from "./api";

    const apiUrl = "http://api.trd-dog.jadekim.kr";
    // const apiUrl = "https://db8bfc1f-f0ec-415c-8562-c5ecc9ec2dd7.mock.pstmn.io";

    export default {
        name: "search",
        components: {GreyBackground, NavBar, TrendCard, foot},

        methods: {
            async getTagList() {
                const data = await api.BasicRequest(apiUrl + "/trend/return-rate");
                const trend_data = await api.parseResponse(data.data);
                const trend = trend_data['data'];
                const trendlist = trend['items'];

                var trendrow = [];
                trendlist.forEach(function(item,index) {
                    trendrow = trendrow.concat(item.tag);
                });
                const tag_l = new Set(trendrow);
                const taglist = Array.from(tag_l);
                this.tagList = taglist;
            },

            getSearch() {
                const taglist = this.tagList;
                const searchlist = taglist.filter(it => it.includes(this.sentence));
                this.searchList = searchlist;

            },

            async getAutoComplete(sentence) {
                const data = await api.BasicRequest(apiUrl + "/trend/return-rate");
                const trend_data = await api.parseResponse(data.data);
                const trend = trend_data['data'];
                const trendlist = trend['items'];

                const trendrow = [];
                trendlist.forEach(function(item,index) {
                    const trendTagList = item.tag.filter(it => it.includes(sentence));
                    if(JSON.stringify(trendTagList)!=JSON.stringify([])){
                        const trend_content = {};
                        trend_content.id = index;
                        trend_content.name = item.nickname;
                        trend_content.follower = item.followerCount;
                        trend_content.tags = item.tag;
                        trend_content.earn_rate = item.returnRate;
                        trend_content.asset_rate = item.ratio;
                        trend_content.user_id = item.userId;
                        trendrow.push(trend_content);
                    }
                });

                this.sentence = sentence;
                this.trendData = trendrow;
            },

            async update() {
                await this.getTagList();
                await this.getSearch(this.sentence);
                await this.getAutoComplete(this.sentence);
            }
        },

        mounted() {
            this.update();
        },

        data() {
            return {
                tagList: "",
                searchList: "",
                trendData: "",
                sentence: ""
            };
        }
    }
</script>

<style scoped>
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

    .search {
        display: flex;
        position: relative;
        width: 50%;
        margin: auto;
        height: 10em;
        align-items: center;
    }

    .search-all {
        /*display: flex;*/
        position:relative;
        flex-direction: column;
        width: 100%;
    }

    .search-big {
        position: absolute;
        width: 100%;

    }

    .search-box {
        /*border: 1px solid rgb(61,67,77);*/
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    #search-box div{
        padding: 1px;
        text-decoration: none;
        color: black;
        display: block;
    }

    #search-box div:hover {
        background-color: #eee;
    }

    .search-result {
        display: none;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 1px 1px;
        z-index: 1;
        flex-wrap: wrap;
    }

    .search-box:hover .search-result {
    }

    .input-field {
        width: 100%;
        border: 3px none rgb(61,67,77);
        border-bottom-style: solid;
        height: 2.5em;
        outline: none;
        background-color: #F5F7FA;
        font-size: 1.5em;
        font-weight: bold;
    }

    .toggle {
        border: 3px none rgb(61,67,77);
        border-bottom-style: solid;
        height: 1.5em;
        font-size: 2em;
        margin-top: 0.4em;
    }
    #search {
        font-size: 1.7em;
        margin-right: 0.3em;
    }

    input::placeholder {
        color: rgba(61,67,77,0.7);
        font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
        font-size: 1em;
        font-weight: bold;
    }

    .content-area {
        width: 1200px;
        justify-content: space-between;
        margin: auto;
    }


    .trend {
        width: 200px;
        margin: 1em 0;
    }

    .trend-wrapper {
        /*margin-top: ;*/
        padding: 0 50px;
        justify-content: space-between;
        margin: 1em 0;
        flex-wrap: wrap;
    }

    .trend-kind {
        margin: 35px 50px 20px 50px;
    }

    .trend-kind-big {
        margin-right: 3px;
        font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
        "Sans-serif";
        font-size: 20px;
        font-weight: bold;
        color: rgba(77, 79, 92, 0.77);
    }

    .trend-kind-small {
        font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
        "Sans-serif";
        font-size: 15px;
        font-weight: bold;
        color: rgba(77, 79, 92, 0.34);
    }
</style>