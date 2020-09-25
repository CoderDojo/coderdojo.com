<template>
  <div>
    <Hero />
    <Sessions />
  </div>
</template>

<script>
import Hero from "~/components/ways-to-run/Hero";
import Sessions from "~/components/ways-to-run/Sessions";
export default {
  head() {
    return {
      title: this.$t("Ways to run a CoderDojo club"),
      meta: [
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.$t(
            "CoderDojo volunteers and clubs all around the world have been affected by the coronavirus pandemic. Champions and mentors from across the globe have talked to us to share how they are running their clubs now, and we're amazed by their resilience and creativity."
          ),
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.$t(
            "CoderDojo volunteers and clubs all around the world have been affected by the coronavirus pandemic. Champions and mentors from across the globe have talked to us to share how they are running their clubs now, and we're amazed by their resilience and creativity."
          ),
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.$t("Ways to run a CoderDojo club"),
        },
        {
          hid: "og:site-name",
          name: "og:site-name",
          property: "og:site-name",
          content: "CoderDojo",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "https://coderdojo.com/ways-to-run/",
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: "~/static/images/ways-to-run/meta-header.png",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          property: "twitter:title",
          content: this.$t("Ways to run a CoderDojo club"),
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          property: "twitter:url",
          content: "https://coderdojo.com/ways-to-run/",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          property: "twitter:image",
          content: "~/static/images/ways-to-run/meta-header.png",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          property: "twitter:description",
          content: this.$t(
            "CoderDojo volunteers and clubs all around the world have been affected by the coronavirus pandemic. Champions and mentors from across the globe have talked to us to share how they are running their clubs now, and we're amazed by their resilience and creativity."
          ),
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  },
  components: {
    Hero,
    Sessions,
  },
};
</script>

<style lang="scss" scoped>
</style>
