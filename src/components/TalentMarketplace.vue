<template>
  <div>
    <h2>Talent Marketplace</h2>
    <input v-model="search" placeholder="Search for specialists" />
    <ul>
      <li v-for="talent in filteredTalents" :key="talent.id">
        {{ talent.name }} - {{ talent.skills.join(', ') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      talents: [
        { id: 1, name: 'Ruslan Kadirov', skills: ['Java', 'Young entrepreneur'] },
        { id: 2, name: 'Dias Zakir', skills: ['Java', '2 course'] },
        { id: 3, name: 'Gafur Khussanbayev', skills: ['Python', 'Aspiring Data Science']},
        { id: 4, name: 'Mikhail Iakobi', skills: ['C++', 'Contester-maker']}
      ],
    };
  },
  computed: {
    filteredTalents() {
      return this.talents.filter(talent =>
          talent.name.toLowerCase().includes(this.search.toLowerCase()) ||
          talent.skills.some(skill => skill.toLowerCase().includes(this.search.toLowerCase()))
      );
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}
</style>
