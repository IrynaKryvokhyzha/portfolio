<template>
  <section id="contact" class="contact">
    <div class="contact__body body">
      <div class="image-ibg"></div>
      <div class="body-content">
        <h2>Get in Touch</h2>
        <p class="description">
          Whether it's a job opportunity or project, my inbox is always open. If
          you have a question or just want to say hi, feel free to contact me.
        </p>
        <a href="mailto:irynakryvokhyzha@gmail.com" class="button"
          >Say Hello!
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 2rem 0 3rem 0;
  position: relative;
  display: flex;
  font-family: "Open Sans";
  color: white;
  margin-top: -40px;
  background-color: #000814;
  background: linear-gradient(180deg, transparent 0%, #000814 5%, #000814 100%);
  @media (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
  // .contact__body

  &__body {
  }
}
.body {
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.image-ibg {
  flex: 0 1 40%;
  @media (max-width: 1330px) {
    flex: 0 1 50%;
  }
}
.body-content {
  flex: 0 1 60%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 1330px) {
    flex: 0 1 50%;
  }
  @media (max-width: 1168px) {
    padding: 40px;
  }
  @media (max-width: 991px) {
    padding: 30px;
    gap: 35px;
  }
  @media (max-width: 768px) {
    flex: 0 1 auto;
  }
  @media (max-width: 380px) {
    padding: 10px;
    gap: 20px;
  }
}
h2 {
  font-size: 58px;
  font-weight: 800;
  font-family: "Coming Soon";
  color: #ffc300;
  text-align: center;
  @media (max-width: 1039px) {
    font-size: 42px;
  }
  @media (max-width: 343px) {
    font-size: 32px;
  }
}

.description {
  text-align: center;
  line-height: 1.6;
  font-size: 22px;
  @media (max-width: 343px) {
    font-size: 20px;
  }
}
.button {
  color: #ffd60a;
  border: 2px solid #ffd60a;
  padding: 10px 20px;
  border-radius: 5px;
  transition: scale 0.3s ease;
  @media (any-hover: hover) {
    &:hover {
      scale: 1.1;
    }
  }
}
</style>
