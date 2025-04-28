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
        <div
          class="header__footer-search"
          :class="searchMobile ? 'block__search ' : ' hidden__search '"
        >
          <input
            type="text"
            class="header__footer-input Body__Strong-Medium–14"
            name=""
            id=""
            placeholder="Поиск"
            v-model="productInput"
          />
          <button
            @click="handelCloseSearch"
            class="header__button-close"
            :class="overlayActive ? 'button__close-flex' : 'button__close-none'"
          >
            <CaCloseLarge />
          </button>
          <button class="header__button-search">
            <AkSearch class="header__search-icon" />
          </button>
          <ResultSearch
            v-if="(filteredProducts && filteredProducts.length) || searchMobile"
            :filtered-products="filteredProducts"
            :searchTerm="productInput"
          />
        </div>
        <button
          class="header__search-mobile"
          @click="((searchMobile = !searchMobile), (overlayActive = !overlayActive))"
        >
          <AkSearch />
        </button>
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
            <button class="header__actions-cart" @click="cart = !cart">
              <div class="cart__quantity">
                <span>
                  {{ cartStore.totalQuantity }}
                </span>
              </div>
              <MdOutlinedShoppingCart class="header__actions-icon header__cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <AppBurgerMenu v-if="showBurgerMenu" @close="closeBurger" />
    <AppCatalog v-if="catalog" @close="closeCatalog" />
    <AppAuth v-if="auth" @close="closeAuth"> </AppAuth>
    <AppCart v-if="cart" @close="closeCart" :product="product" />
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
  CaCloseLarge,
} from '@kalimahapps/vue-icons'
import AppBurgerMenu from './MenuBurger/AppBurgerMenu.vue'
import ResultSearch from './ResultSearch/ResultSearch.vue'
import { computed, ref, watch } from 'vue'
import type { Categories, Product, SubCategory } from '@/types/products'
import AppCatalog from '../Catalog/AppCatalog.vue'
import AppAuth from '../Auth/AppAuth.vue'
import AppCart from '../Cart/AppCart.vue'
import { useCartStore } from '@/stores/cart'

const showBurgerMenu = ref(false)
const overlayActive = ref(false)
const catalog = ref(false)
const auth = ref(false)
const searchMobile = ref(false)
const cart = ref(false)
const productInput = ref('')
const filteredProducts = ref<{ node: Product }[]>([])
const cartStore = useCartStore()

const props = defineProps<{
  product: { edges: { node: Product }[] } | undefined
  category: { edges: { node: Categories }[] } | undefined
  subCategory: { edges: { node: SubCategory }[] } | undefined
}>()

const searchProduct = computed(() => {
  const searchWords = productInput.value.toLowerCase().trim().split(/\s+/)
  return (
    props.product?.edges?.filter((edge) => {
      const productNames = edge?.node?.name?.toLowerCase().trim().split(/\s+/)
      return searchWords.every((searchWord) =>
        productNames.some((productName) => productName.startsWith(searchWord)),
      )
    }) || []
  )
})
const handelCloseSearch = () => {
  searchMobile.value = false
  overlayActive.value = false
  productInput.value = ''
  filteredProducts.value = []
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
const closeCart = () => {
  cart.value = false
}
watch(productInput, (newValue) => {
  if (!newValue.trim()) {
    filteredProducts.value = []
  } else {
    filteredProducts.value = searchProduct.value
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
