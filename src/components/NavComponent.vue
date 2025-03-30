<template>
  <header :class="{ 'scrolled-nav': scrolledNav }" class="header">
    <div class="header__component">
      <div class="header__menu menu">
        <div
          :class="{ _active: sidebarVisible }"
          class="menu__icon"
          @click="showSidebar"
        >
          <span></span>
        </div>
        <nav class="menu__body" :class="{ _active: sidebarVisible }">
          <ul class="menu__list">
            <li
              :class="['menu__item', { active: activeItem === 'home' }]"
              @click="emitScroll('home')"
            >
              Home
            </li>
            <li
              :class="['menu__item', { active: activeItem === 'about' }]"
              @click="emitScroll('about')"
            >
              About
            </li>
            <li
              :class="['menu__item', { active: activeItem === 'portfolio' }]"
              @click="emitScroll('portfolio')"
            >
              Portfolio
            </li>
            <li
              :class="['menu__item', { active: activeItem === 'contact' }]"
              @click="emitScroll('contact')"
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavComponent",
  emits: ["onScroll"],
  data() {
    return {
      scrolledNav: false,
      sidebarVisible: false,
      activeItem: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    //Remove event listener to avoid memory leaks
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      const scrollPosition = window.scrollY;
      this.scrolledNav = scrollPosition > 100;
    },
    emitScroll(refName) {
      this.activeItem = refName;
      this.$emit("onScroll", refName);

      this.sidebarVisible = false;
    },
    showSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  // .header__container

  &__component {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 0rem 5rem;
    align-items: center;
    font-weight: 500;
    color: #fff;
    background-color: rgba(#000814, 0.9);

    @media (max-width: 790px) {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

  // .header__menu

  &__menu {
    display: flex;
    flex-direction: row;
  }
}
.menu {
  // .menu__body

  &__body {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    transition: all 0.3s ease;
  }

  // .menu__icon

  &__icon {
    margin: 10px 0px;
  }

  // .menu__list

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  // .menu__item

  &__item {
    cursor: pointer;
    flex: 1 1 auto;
    transition: all 0.5s ease;
    &.active {
      color: #ffd60a;
    }
    @media (any-hover: hover) {
      &:hover {
        scale: 1.2;
      }
    }
  }
}
.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px 6px -1px rgba(0, 0, 0, 0.06);
  .menu__body {
    padding: 10px 0;
  }
}

// Burger menu

@media (max-width: 750px) {
  .menu__list {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
  .menu__item {
    padding: 10px 0;
    font-size: 1.5rem; /* 24/16 */
  }
  .menu__icon {
    display: block;
    z-index: 5;
    position: relative;
    width: 1.87rem; /* 30/16 */
    height: 1.12rem; /* 18/16 */
    cursor: pointer;
  }
  .menu__icon span,
  .menu__icon::before,
  .menu__icon::after {
    left: 0;
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: #fff;
    transition: all 0.3s ease 0s;
  }
  //три полосочки меню

  .menu__icon::before,
  .menu__icon::after {
    content: "";
  }
  .menu__icon::before {
    top: 0;
  }
  .menu__icon::after {
    bottom: 0;
  }
  .menu__icon span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }
  .menu__body {
    position: fixed;
    overflow: auto;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 100px 30px 30px 30px;
    background-color: black;
    transition: left 0.5s ease 0s;
  }
  .menu__body._active {
    left: 0;
  }
  .menu__icon._active span {
    transform: scale(0) translate(0px, -50%);
  }
  .menu__icon._active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
  }
  .menu__icon._active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
  }
}
</style>
