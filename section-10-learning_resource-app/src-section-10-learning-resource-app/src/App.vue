<template>
  <ul>
    <learning-resource
      v-for="res in storageResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resource/LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storageResources: [
        { id: '1', title: 'Bitcoin', description: 'Bitcoin Fundamental', link: 'https://bitcoin.com' },
        { id: '1', title: 'Ethereum', description: 'Ethereum in  Advanced', link: 'https://bitcoin.com' }
      ],
    };
  },
};
</script>
