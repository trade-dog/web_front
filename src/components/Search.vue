<template>
    <div>
        <nav-bar></nav-bar>
        <grey-background>
            <div class="flex-container content-area">
                <div class="search">
                    <i class="fa fa-search" id="search"></i>
                    <input type="text" class="searchInput" placeholder="태그/암호화폐 검색">
                    <span class="toggle">
                        <i class="fa fa-caret-down"></i>
                    </span>
                </div>
            </div>
        </grey-background>
    </div>
</template>

<script>
    import NavBar from "./NavBar";
    import GreyBackground from "./GreyBackground";
    export default {
        name: "search",
        components: {GreyBackground, NavBar}
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

    .searchInput {
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
</style>