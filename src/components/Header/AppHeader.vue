<template>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="navigation">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <nav class="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">Акции</li>
              <li class="nav-item">Кредит</li>
              <li class="nav-item">Оплата и доставка</li>
              <li class="nav-item">Помощь</li>
              <li class="nav-item">Скупка Б/У</li>
              <li class="nav-item">Контакты</li>
            </ul>
          </nav>
        </div>
        <div class="language-selector">
          <div class="language-buttons">
            <button>EN</button>
            /
            <button>UA</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button>
            <span>Каталог Товаров</span>
          </button>
        </div>
        <div>
          <input type="text" name="" id="" />
          <button></button>
        </div>
        <div>
          <div>
            <span>050 065 87 96</span>
            <button></button>
          </div>
          <span></span>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background: #060f42;
  height: 40px;
}
.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  color: #f4f8fb;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
}

.nav-list {
  display: flex;
  gap: 24px;
}
.nav-item {
  font-size: 12px;
  font-weight: 500;
  font-family: 'Lato', sans-serif;
}
.language-buttons {
  font-size: 12px;
  font-weight: 500;
  font-family: 'Lato', sans-serif;
}
</style>
