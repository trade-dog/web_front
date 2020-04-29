<template>
    <div>
        <nav-bar></nav-bar>
        <grey-background>
            <div class="flex-container content-area">
                <div class="search">
                    <i class="fa fa-search" id="search"></i>
                    <input type="text" class="input-field" placeholder="태그/암호화폐 검색">
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
    export default {
        name: "search",
        components: {GreyBackground, NavBar, TrendCard, foot},
        data() {
            return {
                trendData: [
                    {
                        id: 1,
                        name: "minsoo",
                        follower: "1,920,237",
                        tags: ["분산형", "개미", "단타"],
                        earn_rate: -12.7,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 2,
                        name: "mina",
                        follower: "1,234,543",
                        tags: ["분산형", "단타"],
                        earn_rate: 2.2,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 3,
                        name: "minji",
                        follower: "1,167,224",
                        tags: ["집중형", "큰손", "장타"],
                        earn_rate: 1.3,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 4,
                        name: "junho",
                        follower: "3,442,985",
                        tags: ["집중형", "개미", "장타"],
                        earn_rate: -2.7,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 5,
                        name: "taemin",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: 8.7,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 6,
                        name: "taemin",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: 12.7,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 7,
                        name: "taemin",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: 3.1,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 8,
                        name: "taemin",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: 8.7,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 9,
                        name: "ian",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -1.1,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 10,
                        name: "hodong",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 11,
                        name: "jaesuk",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 12,
                        name: "minsuk",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 13,
                        name: "hia",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 14,
                        name: "jimin",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    },
                    {
                        id: 15,
                        name: "sorim",
                        follower: "920,332",
                        tags: ["집중형", "큰손", "단타"],
                        earn_rate: -2.6,
                        asset_rate: {
                            EOS: 48,
                            XRP: 30,
                            ETH: 22
                        }
                    }
                ]
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