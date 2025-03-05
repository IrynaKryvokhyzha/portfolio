<template>
  <section id="about" class="about">
    <div class="about__body body">
      <div class="image-ibg"></div>
      <div class="body-content">
        <h2>{{ title }}</h2>
        <p class="description"></p>
        <h3>TECH:</h3>
        <div class="fa-3x">
          <div class="tech-item">
            <h5 class="tech-title">JavaScript</h5>
            <font-awesome-icon class="icon-js" :icon="['fab', 'js']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">Vue.js</h5>
            <font-awesome-icon class="icon-vue" :icon="['fab', 'vuejs']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">React.js</h5>
            <font-awesome-icon class="icon-react" :icon="['fab', 'react']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">HTML5</h5>
            <font-awesome-icon class="icon-html" :icon="['fab', 'html5']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">CSS3</h5>
            <font-awesome-icon class="icon-css" :icon="['fab', 'css3-alt']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">SASS</h5>
            <font-awesome-icon class="icon-sass" :icon="['fab', 'sass']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">Bootstrap</h5>
            <font-awesome-icon
              class="icon-bootstrap"
              :icon="['fab', 'bootstrap']"
            />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">GitHub</h5>
            <font-awesome-icon class="icon-github" :icon="['fab', 'github']" />
          </div>

          <div class="tech-item">
            <h5 class="tech-title">Node.js</h5>
            <font-awesome-icon class="icon-node" :icon="['fab', 'node-js']" />
          </div>
          <div class="tech-item">
            <h5 class="tech-title">Database</h5>
            <font-awesome-icon
              class="icon-database"
              :icon="['fas', 'database']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      titles: ["Developer", "Problem Solver", "Team Player"],
      currenIndex: 0,
    };
  },
  computed: {
    title() {
      return this.titles[this.currenIndex];
    },
  },
  methods: {
    changeTitle() {
      this.currenIndex = (this.currenIndex + 1) % this.titles.length;
    },
  },
  mounted() {
    setInterval(this.changeTitle, 5000);
  },
};
</script>

<style lang="scss" scoped>
.about {
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
  // .about__body

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
  align-items: start;
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
  position: relative;
  font-size: 58px;
  font-weight: 700;
  color: #ffc300;

  @media (max-width: 1039px) {
    font-size: 42px;
  }
  @media (max-width: 343px) {
    font-size: 32px;
  }
}
h2::before {
  content: "";
  position: absolute;
  left: 100%;
  width: 120%;
  height: 120%;
  background: linear-gradient(90deg, transparent 0%, #000814 5%, #000814 100%);
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0% {
    left: -10%;
  }
  50% {
    left: 110%;
  }
  100% {
    left: -10%;
  }
}
.description {
  text-align: start;
  line-height: 1.6;
  font-size: 24px;
  @media (max-width: 343px) {
    font-size: 20px;
  }
}
.span-about {
  border: white 1px solid;
  padding: 10px 20px;
  border-radius: 50%;
  @media (max-width: 991px) {
    padding: 10px;
  }
}
h3 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.2rem;
}
.fa-3x {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-title {
  font-size: 20px;
}

.icon-js,
.icon-vue,
.icon-react,
.icon-html,
.icon-css,
.icon-sass,
.icon-github,
.icon-bootstrap,
.icon-node,
.icon-database {
  transition: all 0.5s ease;
  transform: rotate(0deg);

  @media (any-hover: hover) {
    &:hover {
      transform: rotate(360deg);
    }
  }
}
.icon-js {
  color: #f0db4f;
}
.icon-vue {
  color: #42b883;
}
.icon-react {
  color: #61dafb;
}
.icon-html {
  color: #e34c26;
}
.icon-css {
  color: #264de4;
}
.icon-sass {
  color: #cc6699;
}
.icon-github {
  color: #7f7f7f;
}
.icon-bootstrap {
  color: #59287a;
}
.icon-node {
  color: #3c873a;
}
.icon-database {
  color: #4271bd;
}
</style>
