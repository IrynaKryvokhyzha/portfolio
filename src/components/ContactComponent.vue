<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <div class="contact__body body">
        <div class="image-ibg"></div>
        <div class="body-content">
          <h2>Get in Touch</h2>

          <p class="description">
            Whether it's a job opportunity or project, my inbox is always open.
            If you have a question or just want to say hi, feel free to contact
            me.
          </p>
          <form ref="contactForm" class="form" @submit.prevent="sendEmail">
            <!-- Name -->
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />

            <!-- Reply-to email -->
            <input
              type="email"
              name="reply_to"
              placeholder="Your email"
              required
            />

            <!-- Message -->
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
            />

            <button class="button" :disabled="sending">
              {{ sending ? "Sending…" : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: "ContactComponent",
  data() {
    return { sending: false };
  },
  methods: {
    async sendEmail() {
      this.sending = true;

      try {
        await emailjs.sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          this.$refs.contactForm,
          process.env.VUE_APP_EMAILJS_PUBLIC_KEY
        );

        alert("Message sent 🎉");
        this.$refs.contactForm.reset();
      } catch (err) {
        console.error(err);
        alert("Oops—there was a problem. Please try again later.");
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 2rem 0 3rem 0;
  position: relative;
  display: flex;
  font-family: "Open Sans";
  color: white;
  margin-top: -60px;
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
form {
  width: 100%;
}
input,
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  display: flex;
  background-color: rgb(221, 221, 221); /* 4.54:1 vs #ffffff → PASS */
  border: 1px solid white;
  border-radius: 5px;
  box-sizing: border-box;
}
input::placeholder,
textarea::placeholder {
  color: #000814;
}
input:focus,
textarea:focus {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
}
</style>
