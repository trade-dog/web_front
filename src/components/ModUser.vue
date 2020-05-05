<template>
  <div>
    <nav-bar></nav-bar>

    <div class=" content-area">
      <div class="content-title">
        <span class="content-title-big">코인투</span>
        <span class="content-title-small">님 안녕하세요.</span>
      </div>
      <div class="user-info">
        <div class="box-title">
          <span>내 정보 설정</span>
        </div>
          <div class="row">
            <div class="field-label">
              <label class="subject" for="email">E-mail</label>
            </div>
            <div class="form-field">
              <input
                type="email"
                id="email"
                name="email"
                size="50"
                placeholder="abcd@email.com"
              />
            </div>
          </div>
          <div class="row">
            <div class="field-label">
              <label class="subject" for="pw">Password</label>
            </div>
            <div class="form-field">
              <input type="password" id="pw" name="pw" size="50" />
            </div>
          </div>
          <div class="row">
            <div class="field-label">
              <label class="subject" for="nickname">닉네임</label>
            </div>
            <div class="form-field">
              <input
                type="text"
                name="nickname"
                id="nickname"
                size="50"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div class="row">
            <div class="field-label">
              <label class="subject" for="introduce">자기소개</label>
            </div>
            <div class="form-field">
              <textarea
                cols="120"
                rows="8"
                id="introduce"
                name="introduce"
              ></textarea>
            </div>
          </div>
          <div class="button-row">
            <button class="save">
              저장하기
            </button>
        </div>
      </div>
      <div class="user-info">
        <div class="box-title">
          <span>Coinone API 설정</span>
        </div>
        <div class="row">
          <div class="field-label">
            <label class="subject">
              포트폴리오 팔로우
            </label>
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" v-model="follow_enabled" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
          <div class="row">
            <div class="field-label">
              <label class="subject" for="coinone-accss-token"
                >코인원 Access Token</label
              >
            </div>
            <div class="form-field">
              <input
                type="text"
                name="accessToken"
                id="coinone-accss-token"
                size="50"
                :disabled="!this.follow_enabled"
              />
            </div>
          </div>

          <div class="row">
            <div class="field-label">
              <label class="subject" for="coinone-secret-key"
                >코인원 Secret Key</label
              >
            </div>
            <div class="form-field">
              <input
                type="text"
                name="seckey"
                id="coinone-secret-key"
                size="50"
                :disabled="!this.follow_enabled"
              />
            </div>
          </div>
        <div class="button-row">
          <button class="save">
            저장하기
          </button>
        </div>
      </div>
    </div>

    <grey-background>
      <div class="content-area">
        <foot> </foot>
      </div>
    </grey-background>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
import foot from "./footer";
export default {
  name: "search",
  components: { GreyBackground, NavBar, foot },
  data() {
    return {
      follow_enabled: false
    };
  }
};
</script>

<style scoped>
.content-area {
  width: 1200px;
  justify-content: space-between;
  margin: auto;
}

.content-area {
  width: 1200px;
  justify-content: space-between;
  margin: auto;
}

.content-title {
  margin: 5em 0 2em;
}

.content-title-big {
  margin-right: 3px;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(40, 80, 124);
}

.content-title-small {
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 1em;
  font-weight: bold;
  color: rgba(77, 79, 92, 0.34);
}

.user-info {
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin-bottom: 2em;
  border: 1px solid #c9ccd2;
  border-top: 2px solid #03308f;
}
.box-title {
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 1.2em;
}
.row {
  width: 100%;
  margin-top: 1em;
}

.subject {
  margin: 1em;
  font-size: 1em;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
}
.field-label {
  float: left;
  width: 15em;
  text-align: right;
  padding-right: 10px;
}
.button-row{
  display: flex;
  margin-top: 1.5em;
  justify-content: flex-end;

}

.save {
  color: white;
  background-color: rgb(23, 114, 248);
  border-color: white;
  border-radius: 5px;
  border-style: none;
  padding: 9px;
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 3.4em;
  height: 1.7em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.6em;
  width: 26px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input::placeholder {
  color: rgba(24,25,28,0.4);

}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

form {
  width: 100%;
}

input {
  border: 1px solid #c9ccd2;
  border-radius: 5px;
  height: 2em;
}

textarea {
  border: 1px solid #c9ccd2;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  border-color: rgba(23, 114, 248, 0.4);
  border-radius: 5px;
}
</style>
