<template>
  <div class="about-me">
    <div class="about-me__image">
      <img src="../assets/images/photo2.jpg" alt="photo" />
    </div>

    <div class="about-me__content">
      <h2 class="about-me__title">Iryna Kryvokhyzha</h2>
      <p class="about-me__subtitle">Web Developer /</p>
      <p class="about-me__subtitle">Front end Developer</p>
      <p class="about-me__subtitle">Sacramento, CA</p>
      <div class="social">
        <ul class="social__social-link">
          <li class="social__item">
            <a href="mailto:irynakryvokhyzha@gmail.com"
              ><font-awesome-icon :icon="['far', 'envelope']" />
            </a>
          </li>
          <li class="social__item">
            <a href="https://www.linkedin.com/in/irynakryvokhyzha/"
              ><font-awesome-icon :icon="['fab', 'linkedin-in']"
            /></a>
          </li>
          <li class="social__item">
            <a href="https://github.com/IrynaKryvokhyzha"
              ><font-awesome-icon :icon="['fab', 'github']"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-me {
  width: 300px;
  background-color: #000814;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(#ffd60a, 0.967);
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (any-hover: hover) {
    &:hover {
      box-shadow: 2px 6px 12px rgba(#ffd60a, 0.967);
      scale: 1.01;
    }
  }

  // .about-me__image

  &__image {
    padding: 20px;
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  // .about-me__content

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    color: white;
    padding: 10px;
  }

  // .about-me__title

  &__title {
    font-size: 2rem;
    font-weight: 600;
  }

  // .about-me__subtitle

  &__subtitle {
  }
}
.social {
  // .social__social-link

  &__social-link {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #ffd60a;
  }

  // .social__item

  &__item {
    font-size: 28px;
    transition: transform 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>
