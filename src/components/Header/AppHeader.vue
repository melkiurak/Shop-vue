<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top-menu container">
        <div class="header__navigation">
          <v-app-bar-nav-icon
            @click="showBurgerMenu = !showBurgerMenu"
            size="24"
          ></v-app-bar-nav-icon>
          <nav class="header__nav-menu">
            <ul class="header__nav-list">
              <li class="header__nav-item">Акции</li>
              <li class="header__nav-item">Кредит</li>
              <li class="header__nav-item">Оплата и доставка</li>
              <li class="header__nav-item">Помощь</li>
              <li class="header__nav-item">Скупка Б/У</li>
              <li class="header__nav-item">Контакты</li>
            </ul>
          </nav>
        </div>
        <img class="header__logo-phone" src="../../assets/LogoPhone.png" alt="" />
        <div class="header__language-selector">
          <div class="header__language-buttons">
            <button>EN</button>
            /
            <button>UA</button>
          </div>
          <button @click="auth = !auth">
            <BxUser class="header__user-icon" />
          </button>
        </div>
        <FePhoneCall class="header__icons-phone" />
      </div>
    </div>
    <div class="header__footer">
      <div class="header__footer-functions container">
        <div class="header__footer-item">
          <img class="header__logo-Desctop" src="../../assets/Logo.png" alt="" />
          <button class="header__footer-catalog" @click="catalog = !catalog">
            <span class="header__footer-text">Каталог Товаров</span>
            <AnOutlinedProduct class="header__catalog-icon" />
          </button>
        </div>
        <div class="header__footer-search">
          <input
            type="text"
            class="header__footer-input Body__Strong-Medium–14"
            name=""
            id=""
            placeholder="Поиск"
            v-model="productInput"
            @focus="overlayActive = true"
          />
          <button class="header__button-search">
            <AkSearch class="header__search-icon" />
          </button>
          <ResultSearch
            v-if="filteredProducts && filteredProducts.length"
            :filtered-products="filteredProducts"
            :searchTerm="productInput"
          />
        </div>
        <div class="header__footer-info">
          <div class="header__footer-contact">
            <span>050 065 87 96</span>
            <button class="header__button-phones">
              <AkChevronDownSmall class="header__arrow-icon" />
            </button>
          </div>
          <span class="header__footer-separator"></span>
          <div class="header__footer-actions">
            <CaScalesTipped class="header__actions-icon header__scale" />
            <BsSuitHeart class="header__actions-icon header__heart" />
            <MdOutlinedShoppingCart class="header__actions-icon header__cart" />
          </div>
        </div>
      </div>
    </div>
    <AppBurgerMenu v-if="showBurgerMenu" @close="closeBurger" />
    <AppCatalog v-if="catalog" @close="closeCatalog" />
    <AppAuth v-if="auth" @close="closeAuth" />
  </header>
</template>
<script setup lang="ts">
import {
  AkSearch,
  BxUser,
  AnOutlinedProduct,
  CaScalesTipped,
  MdOutlinedShoppingCart,
  AkChevronDownSmall,
  BsSuitHeart,
  FePhoneCall,
} from '@kalimahapps/vue-icons'
import AppBurgerMenu from './MenuBurger/AppBurgerMenu.vue'
import ResultSearch from './ResultSearch/ResultSearch.vue'
import { ref, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import type { GetProductsData, Product } from '@/types/products'
import AppCatalog from '../Catalog/AppCatalog.vue'
import { GET_PRODUCTS } from '@/server/data'
import AppAuth from '../Auth/AppAuth.vue'

const { result } = useQuery<GetProductsData>(GET_PRODUCTS)
console.log(result)
const showBurgerMenu = ref(false)
const overlayActive = ref(false)
const catalog = ref(false)
const auth = ref(false)
const productInput = ref('')
const filteredProducts = ref<{ node: Product }[]>([])

const searchProduct = (searchTerm: string) => {
  const searchWords = searchTerm.toLowerCase().trim().split(/\s+/)
  return (
    result.value?.products.edges.filter((edge) => {
      const nameWords = edge?.node?.name?.toLowerCase().trim().split(/\s+/)
      return searchWords.every((searchWord) =>
        nameWords.some((nameWord) => nameWord.startsWith(searchWord)),
      )
    }) || []
  )
}
const closeBurger = () => {
  showBurgerMenu.value = false
}
const closeCatalog = () => {
  catalog.value = false
}
const closeAuth = () => {
  auth.value = false
}
watch(productInput, (newValue) => {
  if (!newValue.trim()) {
    filteredProducts.value = []
    overlayActive.value = false
  } else {
    filteredProducts.value = searchProduct(newValue)
    overlayActive.value = true
  }
})
watch(overlayActive, (newValue) => {
  document.body.classList.toggle('overlay-active', newValue)
})

watch(catalog, (newValue) => {
  document.body.classList.toggle('overlay-active', newValue)
})
</script>
<style>
@import './Header.module.css';
</style>
