<template>
  <form>
    <div class="main-card mb-3 card" style="margin-top: 100px">
      <div class="card-body">
        <h5 class="card-title">Форма регистрации</h5>
        <form class="">
          <div class="position-relative form-group">
            <input
              name="name"
              placeholder="Придумайте никнейм"
              type="text"
              class="form-control"
            />
          </div>
          <div class="position-relative form-group">
            <input
              name="email"
              placeholder="Введитие вашу почту"
              type="text"
              class="form-control"
            />
          </div>
          <div class="position-relative form-group">
            <input
              name="password"
              placeholder="Придумайте пароль"
              type="text"
              class="form-control"
            />
          </div>
          <div class="position-relative form-group">
            <input
              name="password_confirmition"
              placeholder="Повторите пароль"
              type="text"
              class="form-control"
            />
          </div>
          <button class="mt-2 btn btn-primary">Регистрация</button>
        </form>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>
