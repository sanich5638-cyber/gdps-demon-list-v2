// БАЗОВЫЙ VUE.JS КОД
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "🎉 Демон-лист работает!",
            demons: [],
            selectedDemon: null
        }
    },
    async mounted() {
        // Пробуем загрузить демонов
        try {
            const response = await fetch('/data/_list.json');
            const demonList = await response.json();
            this.demons = demonList;
            this.message = `Загружено демонов: ${demonList.length}`;
        } catch (error) {
            this.message = "Ошибка загрузки данных";
        }
    }
}).mount('#app');
