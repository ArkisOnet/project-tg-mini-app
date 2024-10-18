<template>
  <div>
    <h2>Talent Pool & Community Management</h2>
    <button @click="notifyTalentPool">Send Notification</button>
    <ul>
      <li v-for="candidate in candidates" :key="candidate.id">
        {{ candidate.name }} - {{ candidate.status }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidates: [
        { id: 1, name: 'Ruslan Kadirov', status: 'Available' },
        { id: 2, name: 'Dias Zakirov', status: 'Engaged' },
        { id: 3, name: 'Gafur Khussanbayev', status: 'Engaged' },
        { id: 4, name: 'Mikhail Iakobi', status: 'Engaged' },
      ]
    };
  },
  methods: {
    notifyTalentPool() {
      alert('Notification sent to all candidates');
    }
  }
};
</script>
