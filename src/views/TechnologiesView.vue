<script lang="ts">
import TechCard from '../components/TechCard.vue'

export default {
  data() {
    return {
      technologies: [
        {
          title: 'C++',
          link: '#',
          desc: 'Websoket creation, system applications and embedded system development'
        },
        {
          title: 'React',
          link: 'https://reactjs.org/',
          desc: 'Building interactive, stateful frontends for web applications.'
        },
        {
          title: 'Rust',
          link: 'https://rust-lang.org/',
          desc: 'Writing efficient, robust applications. Optimising performance and memory usage.'
        },
        {
          title: 'PHP',
          link: 'https://www.php.net/',
          desc: 'Server-side scripting, creating dynamic web pages and creating a programming language 😃.'
        },
        {
          title: 'Objective-C',
          link: 'https://developer.apple.com/documentation/objectivec',
          desc: 'Just interested in the language, not actively using it.'
        }
      ]
    }
  },

  components: {
    TechCard
  }
}
</script>

<template>
  <main>
    <h1>🔨 Compilation of Technologies</h1>
    <p class="description">
      Compilation of languages and frameworks I <strong>presently</strong> favour, note that this
      list doesn't include all frameworks, nor tools, nor services.
    </p>

    <TechCard
      v-for="tech in technologies"
      :key="tech.title"
      :title="tech.title"
      :link="tech.link"
      :desc="tech.desc"
    />
  </main>
</template>
