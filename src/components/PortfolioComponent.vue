<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__container">
      <div class="item-left"></div>
      <div class="item-right">
        <div><h2 class="title">Some Of My Projects</h2></div>
        <div v-for="product in getProductsList" :key="product.id" class="item">
          <div class="image">
            <img :src="product.image" loading="lazy" alt="image" />
          </div>
          <div class="content">
            <h3 class="header">{{ product.title }}</h3>

            <p class="description">{{ product.description }}</p>
            <p class="technologies">{{ product.technologies }}</p>
            <div class="social">
              <a
                v-if="product.github"
                :href="product.github"
                class="social-item"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
              <a :href="product.link">
                <button class="button">
                  View
                </button>
              </a>
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
.portfolio {
  background-color: #000814;
  padding: 4rem 2rem 3rem 0;
  margin-top: -50px;
  @media (max-width: 768px) {
    padding: 1rem 1rem 3rem 1rem;
  }
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.item-left {
  flex: 0 1 40%;
  @media (max-width: 1330px) {
    flex: 0 1 50%;
  }
}
.item-right {
  flex: 0 1 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 1330px) {
    flex: 0 1 50%;
  }
}
.item {
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(#ffd60a, 0.967);
  transition: all 0.3s ease;

  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (any-hover: hover) {
    &:hover {
      box-shadow: 4px 6px 14px rgba(#ffd60a, 0.967);
      scale: 1.01;
    }
  }
}
.image {
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    @media (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      height: 100%;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 10px;
  transition: all 0.5s ease;
  @media (max-width: 991px) {
    justify-content: start;
    align-items: start;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 5px;
  }
  @media (any-hover: hover) {
  }
}
h2 {
  font-family: "Coming Soon";
  font-size: 58px;
  font-weight: 700;
  color: #ffc300;
  line-height: 1.2;
  @media (max-width: 1039px) {
    font-size: 42px;
  }
  @media (max-width: 343px) {
    font-size: 32px;
  }
}
.header {
  font-size: 24px;
  color: #ffd60a;

  text-shadow: 3px 0 black;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
}
.description {
  color: rgb(202, 202, 202);
  line-height: 1.2;
  background-color: rgba(#001d3d, 0.7);
  padding: 20px;
  border-radius: 5px;
  text-align: start;
  margin-left: -30px;
  @media (max-width: 991px) {
    margin-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
  }
}
.technologies {
  color: rgb(124, 123, 123);
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 991px) {
    text-align: start;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
}
.social {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: #219ebc;
  gap: 20px;
  width: 100%;
  @media (max-width: 991px) {
    justify-content: start;
  }
}
.social-item {
  font-size: 28px;
  color: #219ebc;

  transition: transform 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
}
.button {
  color: #219ebc;
  font-size: 18px;
  border: 1px solid #219ebc;
  padding: 8px;
  border-radius: 5px;
  text-transform: capitalize;
  @media (max-width: 400px) {
    font-size: 16px;
  }
  transition: transform 0.3s ease;
  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
