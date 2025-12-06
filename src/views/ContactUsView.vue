<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
                class="beanslogo mt-5"
                src="@/assets/logo/Beans_logo_dark.svg"
                alt="Beans logo"
            />

            <form
                @submit.prevent="submit"
                action="#"
                class="mt-5"
            >
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label
                      for="name-input"
                      class="mb-0"
                  >
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <span
                      v-if="errors.name"
                      class="error"
                  >{{ errors.name }}</span>
                  <input
                      v-model.trim="form.name"
                      type="text"
                      class="form-control"
                      id="name-input"
                      @blur="validateName"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label
                      for="email-input"
                      class="mb-0"
                  >
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>

                <div class="col col-12 col-sm-9">
                  <span
                      v-if="errors.email"
                      class="error"
                  >{{ errors.email }}</span>
                  <input
                      v-model.trim="form.email"
                      type="email"
                      class="form-control"
                      id="email-input"
                      @blur="validateEmail"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label
                      for="phone-input"
                      class="mb-0"
                  > Phone
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <span
                      v-if="errors.phone"
                      class="error"
                  >{{ errors.phone }}</span>
                  <input
                      v-model="form.phone"
                      type="tel"
                      @input="formatPhone"
                      class="form-control"
                      id="phone-input"
                      placeholder="+7 (999) 123-45-67"
                      @blur="validatePhone"
                  />
                  <span>{{ formattedPhone }}</span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label
                      for="pmessage"
                      class="mb-3 mt-3 text-center"
                  >
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <span
                      v-if="errors.message"
                      class="error"
                  >{{ errors.message }}</span>
                  <textarea
                      v-model.trim="form.message"
                      class="form-control"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Leave your comments here"
                      @blur="validateMessage"
                  ></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import {parsePhoneNumberFromString, AsYouType} from 'libphonenumber-js'

export default {
  components: {NavBarComponent},
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    };
  },
  computed: {
    // Отформатированный номер для отображения
    formattedPhone() {
      if (!this.form.phone) return ''
      const phoneNumber = parsePhoneNumberFromString(this.form.phone, 'RU')
      return phoneNumber ? phoneNumber.formatInternational() : this.form.phone
    }
  },
  methods: {
    // 🧹 Форматирование "на лету" (маска)
    formatPhone(e) {
      const input = e.target
      const cursorPosition = input.selectionStart
      const rawValue = input.value

      // Используем AsYouType для маски по мере ввода
      const formatter = new AsYouType('RU') // RU — default регион
      const formatted = formatter.input(rawValue)

      // Сохраняем позицию курсора (иначе прыгает)
      // this.$nextTick(() => {
      //   input.value = formatted
      //   input.setSelectionRange(cursorPosition, cursorPosition)
      // })

      this.form.phone = formatted
    },

    validateName() {
      // Проверяем, что текст введен
      if (!this.form.name) {
        this.errors.name = 'Имя обязательно';
      } else {
        this.errors.name = '';
      }
    },
    validateEmail() {
      // Простейшая проверка email через регулярку
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email обязателен';
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Введите корректный Email';
      } else {
        this.errors.email = '';
      }
    },
    validatePhone() {
      const phoneNumber = parsePhoneNumberFromString(this.form.phone, 'RU')

      if (!this.form.phone) return true // опциональное поле

      if (!phoneNumber) {
        this.errors.phone = 'Invalid phone number'
        return false
      }

      if (!phoneNumber.isValid()) {
        this.errors.phone = 'Phone number is not valid'
        return false
      }

      // Проверяем длину (опционально)
      if (phoneNumber.country === 'RU' && phoneNumber.nationalNumber.length !== 10) {
        this.errors.phone = 'Russian number must be 10 digits'
        return false
      }

      this.errors.phone = ''
      return true
    },
    validateMessage() {
      // Проверяем, что текст введен
      if (!this.form.message) {
        this.errors.message = 'Имя обязательно';
      } else {
        this.errors.message = '';
      }
    },
    submit() {
      this.validateName()
      this.validateEmail()
      this.validatePhone()
      this.validateMessage()
      // Проверяем, есть ли ошибки
      if (!this.errors.name && !this.errors.email && !this.errors.phone && !this.errors.message) {
        // Нет ошибок, отправляем форму
        console.log(this.form);

      }
    },
  }
};
</script>

<style
    lang="scss"
    scoped
>

.error {
  color: red;
  font-size: 0.9em;
}
</style>