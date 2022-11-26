const Favorite = {
    async render() {
      return `
      <main id="mainContent" class="main-resto_container">
      <section class="content">
        <h2 tabindex="0" class="main-resto_label">
          Favorite
        </h2>
        <div id="main-resto_list" class="list-resto"></div>
      </section>
    </main>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Favorite;