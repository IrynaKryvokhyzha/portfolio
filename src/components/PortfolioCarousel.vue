<template>
  <section id="portfolio" class="portfolio">
    <div class="slider">
      <div
        v-for="(product, index) in getProductsList"
        :key="product.id"
        class="item"
        :style="{ '--i': ++index, '--total': getProductsList.length }"
      >
        <div v-if="index !== getProductsList.length">
          <div class="image">
            <img :src="product.image" alt="image" />
            <div class="content">
              <h2 class="header">{{ product.title }}</h2>
              <p class="description">{{ product.description }}</p>
              <a :href="product.link">
                <button class="button">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="image">
            <img :src="product.image" alt="image" />
            <div class="content">
              <h2 class="header">{{ product.title }}</h2>
              <p class="description">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PortfolioComponent",
  computed: {
    ...mapGetters(["getProductsList"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.portfolio {
  background: linear-gradient(to right, #372f2f, rgb(233, 233, 126));
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  overflow: hidden;
}
.slider {
  position: relative;
  width: 350px;
  height: 300px;
  transform-style: preserve-3d;
  animation: rotate 40s linear infinite;
  @media (max-width: 768px) {
    width: 260px;
    height: 200px;
  }
  @media (max-width: 400px) {
    width: 180px;
    height: 250px;
  }
  @media (any-hover: hover) {
    &:hover {
      animation-play-state: paused;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 360deg / var(--total))) translateZ(400px);
  transition: transform 0.2s;
  z-index: 1;
  @media (max-width: 768px) {
    transform: rotateY(calc(var(--i) * 360deg / var(--total))) translateZ(300px);
  }
  @media (max-width: 400px) {
    transform: rotateY(calc(var(--i) * 360deg / var(--total))) translateZ(200px);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: 2s ease-out;

    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.2);
        z-index: 10;
      }
    }
  }
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    opacity: 1;
    justify-content: flex-start;
    gap: 5px;
  }
  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
.content > * {
  transform: translateY(50px);
  transition: transform 1s;
}
.content:hover > * {
  transform: translateY(0);
}

.header {
  font-size: 32px;
  color: yellow;
  font-weight: 800;
  text-shadow: 3px 0 black;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
}
.description {
  font-size: 24px;
  color: white;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
  }
}
.button {
  color: yellow;
  font-size: 24px;
  text-decoration: underline;
  text-transform: capitalize;
  @media (max-width: 400px) {
    font-size: 16px;
  }
}
</style>
