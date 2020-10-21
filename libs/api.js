const baseUrl = `https://regadora-data.vercel.app`;

const api = {
  regadora: {
    async getData() {
      const response = await fetch(`${baseUrl}/regadora.json`);
      const data = await response.json();
      return data;
    }
  },
  common: {
    async getData() {
      const response = await fetch(`${baseUrl}/common.json`);
      const data = await response.json();
      return data;
    }
  },
};


export default api;