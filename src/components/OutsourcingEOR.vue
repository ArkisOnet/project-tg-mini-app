<template>
  <div>
    <h2>Outsourcing & EOR</h2>
    <button @click="createContract">Create Contract</button>
    <ul>
      <li v-for="contract in contracts" :key="contract.id">
        Contract with {{ contract.employee }} - Status: {{ contract.status }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contracts: [
        { id: 1, employee: 'John Doe', status: 'Active' },
        { id: 2, employee: 'Dias Zakir', status: 'Pending' },
        { id: 3, employee: 'Gafur Khussanbayev', status: 'Pending' },
        { id: 4, employee: 'Mikhail Iakobi', status: 'Pending' },
      ],
    };
  },
  methods: {
    createContract() {
      const newContract = {
        id: this.contracts.length + 1,
        employee: 'New Employee',
        status: 'Pending'
      };
      this.contracts.push(newContract);
    }
  }
};
</script>
