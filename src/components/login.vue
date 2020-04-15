<template>
  <div>
    <nav-bar></nav-bar>
    <div class="content-area">
      <card>
        <div class="flex-box">
          <div class="loginbox-title">
            <p id="big-title">CoinTwo Portfolio 서비스</p>
            <p id="sub-title">Welcome to Cointwo Tradeinfo System</p>
          </div>
          <div class="login-form">
            <form name="login" action="#" method="post">
              <div class="field-row">
                <span class="field-name">E-mail</span
                ><input type="text" class="input-field" name="email" />
              </div>
              <div class="field-row">
                <span class="field-name">Password</span
                ><input type="password" class="input-field" name="password" />
              </div>
            </form>
            <div class="check-box">
              <span><input type="checkbox" /> Remember me</span>
              <span><a href="#">Forgot Password</a></span>
            </div>
            <div class="submit-button">
              <button class="button" id="login-btn">Login</button>
              <button class="button">Sign up</button>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Card from "./Card";

export default {
  name: "portfolio",
  components: {
    Card,
    NavBar
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

.content-area {
  width: 70%;
  justify-content: space-between;
  margin: auto;
  margin-top: 4em;
}

.flex-box {
  display: flex;
  flex-direction: column;
}

.loginbox-title {
  margin: 5em auto 2em;
}

#big-title {
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 2em;
  font-weight: bold;
}

#sub-title {
  font-family: "Source Sans Pro", "Noto Sans KR", "Spoqa Han Sans",
    "Spoqa Han Sans JP", "Sans-serif";
  text-align: center;
  color: rgb(77, 79, 92);
  opacity: 0.5;
}

.login-form {
  margin: 2em auto 5em;
  width: 60%;
}

.input-field {
  width: 80%;
  border: 1px none rgb(233, 233, 240);
  border-bottom-style: solid;
  height: 1.5em;
  outline: none;
  font-size: 1em;
  margin-left: 0.5em;
  font-weight: bold;
}

.field-row {
  display: flex;
  margin-bottom: 1em;
  justify-content: flex-end;
}

.field-name {
  font-family: "Source Sans Pro", "Noto Sans KR", "Spoqa Han Sans",
    "Spoqa Han Sans JP", "Sans-serif";
  color: rgb(77, 79, 92);
  opacity: 0.7;
  margin-right: 1em;
}

.check-box {
  margin-top: 3em;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  display: flex;
  justify-content: space-around;
}
.submit-button {
  margin-top: 3em;
  display: flex;
  justify-content: space-around;
}
.button {
  border: solid 1px rgb(67, 66, 93);
  border-radius: 4px;
  width: 9em;
  height: 2.5em;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
}

#login-btn {
  background-color: rgb(0, 89, 255);
  color: white;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
  border: none;
}
</style>
