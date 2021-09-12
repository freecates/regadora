const baseUrl = process.env.BASE_URL;
const directusUrl = process.env.DIRECTUS_URL;

const api = {
    regadora: {
        async getData() {
            const response = await fetch(`${baseUrl}/regadora.json`);
            const data = await response.json();
            return data;
        },
    },
    presentacio: {
        async getData() {
            const response = await fetch(`${baseUrl}/presentacio.json`);
            const data = await response.json();
            return data;
        },
    },
    perque: {
        async getData() {
            const response = await fetch(`${baseUrl}/per-que.json`);
            const data = await response.json();
            return data;
        },
    },
    quisom: {
        async getData() {
            const response = await fetch(`${baseUrl}/qui.json`);
            const data = await response.json();
            return data;
        },
    },
    adhesions: {
        async getData() {
            const response = await fetch(`${baseUrl}/adhesions.json`);
            const data = await response.json();
            return data;
        },
    },
    novetats: {
        async getData() {
            const response = await fetch(`${baseUrl}/novetats.json`);
            const data = await response.json();
            return data;
        },
    },
    activitats: {
        async getData() {
            const response = await fetch(`${baseUrl}/activitats.json`);
            const data = await response.json();
            return data;
        },
    },
    activitatsData: {
        async getData() {
            const response = await fetch(`${baseUrl}/activitatsData.json`);
            const data = await response.json();
            return data;
        },
    },
    common: {
        async getData() {
            const response = await fetch(`${baseUrl}/common.json`);
            const data = await response.json();
            return data;
        },
    },
    routes: {
        async getData() {
            const response = await fetch(`${baseUrl}/routes.json`);
            const data = await response.json();
            return data;
        },
    },
    carouselImages: {
        async getData() {
            const response = await fetch(`${baseUrl}/carouselImages.json`);
            const data = await response.json();
            return data;
        },
    },
    entities: {
        async getData() {
            const response = await fetch(`${directusUrl}/items/entitats`);
            const data = await response.json();
            return data;
        },
    },
    supporters: {
        async getData() {
            const response = await fetch(`${directusUrl}/items/adhesions_manifest`);
            const data = await response.json();
            return data;
        },
    },
    files: {
        async getData() {
            const response = await fetch(`${directusUrl}/files`);
            const data = await response.json();
            return data;
        },
    },
};

export default api;
