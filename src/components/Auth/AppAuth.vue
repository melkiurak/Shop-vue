<template>
  <div class="auth">
    <div class="auth__content">
      <div class="auth__content-container">
        <div class="auth__content-header">
          <h6>Вход</h6>
          <button @click="$emit('close')"><AnOutlinedClose class="auth__icons" /></button>
        </div>
        <form action="" class="auth__form">
          <div class="auth__form-group">
            <input type="tel" placeholder="Ваш номер телефона" v-model="phone" />
          </div>
          <div class="auth__form-group">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Пароль"
              v-model="password"
              @change="validatePassword(password)"
              :class="!passwordMessage ? '' : 'auth__erorr-input'"
            />
            <button type="button" @click="handelShowPassword">
              <TaEye class="auth__icons-eye" />
            </button>
            <a href="" class="titles__Normal-t10">Забыли пароль?</a>
          </div>
          <span v-if="passwordMessage" class="auth__error titles__Normal-t10">Пароль не верен</span>
          <button class="auth__form-submit">
            <span class="label__Strong-Extra-Small–10">ВОЙТИ</span>
          </button>
        </form>
        <div class="auth__social">
          <span class="auth__social-title titles__Normal-t10">или войти с помощью</span>
          <div class="auth__social-media">
            <button class="auth__social-media-Google">
              <BsGoogle />
              <span class="label__Strong-Small-12">Google</span>
            </button>
            <button class="auth__social-media-Facebook">
              <FaBandsFacebookF />
              <span class="label__Strong-Small-12">Facebook</span>
            </button>
          </div>
        </div>
        <div class="auth__register">
          <p class="titles__Normal-t10">Нет аккаунта? <a href="">Регестрация</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnOutlinedClose, FaBandsFacebookF, BsGoogle, TaEye } from '@kalimahapps/vue-icons'
import { ref, watch } from 'vue'
const password = ref('')
const phone = ref('')
const showPassword = ref(false)
const passwordMessage = ref(false)
const handelShowPassword = () => {
  showPassword.value = !showPassword.value
}
const validatePassword = (password: string) => {
  const regularPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  if (regularPassword.test(password)) {
    passwordMessage.value = false
  } else {
    passwordMessage.value = true
  }
}
watch(password, (newVal) => {
  validatePassword(newVal)
})
</script>
<style scoped>
@import './Auth.module.css';
</style>
