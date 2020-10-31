const baseUrl = process.env.BASE_URL;

const api = {
  regadora: {
    async getData() {
      const response = await fetch(`${baseUrl}/regadora.json`);
      const data = await response.json();
      return data;
    }
  },
  presentacio: {
    async getData() {
      const response = await fetch(`${baseUrl}/presentacio.json`);
      const data = await response.json();
      return data;
    }
  },
  quisom: {
    async getData() {
      const response = await fetch(`${baseUrl}/qui.json`);
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
  routes: {
    async getData() {
      const response = await fetch(`${baseUrl}/routes.json`);
      const data = await response.json();
      return data;
    }
  },
};


export default api;