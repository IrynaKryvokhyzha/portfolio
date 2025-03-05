<template>
  <footer id="contact" class="footer">
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
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px;
  height: 100%;
  background-color: rgba(#003566, 0.9);
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
    font-size: 38px;
    transition: transform 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>
