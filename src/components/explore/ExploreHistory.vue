<template>
  <div class="history">
    <div class="history-item" data-aos="zoom-in-right" data-aos-delay="200">
      <h2>History of the company</h2>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio id
        ex commodi? Quod blanditiis corrupti rem? Blanditiis quae facilis,
        dolore dicta amet aspernatur. Odio at minima qui dolorem repellat
        nesciunt, quibusdam sapiente nobis totam vitae asperiores necessitatibus
        veniam nisi quam sunt illo iusto consequatur cumque? Tenetur perferendis
        commodi velit quaerat repellendus est atque inventore id ducimus odit
        molestiae ratione eum vero sapiente, alias ipsa ab magnam
        necessitatibus, modi officiis pariatur fugit odio, autem vitae. Nemo
        quia nihil, voluptatum impedit labore qui similique blanditiis eligendi
        repellendus veritatis magnam quisquam ad, dolor optio, porro in
        obcaecati ratione aliquid expedita consectetur temporibus tempora?
      </article>
    </div>
    <div
      class="history-item history-left"
      data-aos="zoom-in-right"
      data-aos-delay="200"
    >
      <h2>Our development plans</h2>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
        minus aperiam libero exercitationem, praesentium ipsam culpa suscipit,
        corrupti quam tempore ex eum veritatis laudantium adipisci architecto
        amet non vitae, obcaecati dolores! Facere modi corrupti amet autem
        asperiores soluta sunt minima, ratione voluptates nostrum. Ipsa,
        voluptatum recusandae magnam perspiciatis quo harum vel quae rerum illo
        maiores placeat, voluptatem, aperiam illum. Architecto neque repudiandae
        repellat adipisci facere itaque quidem! Perferendis sit cumque deleniti
        harum praesentium aspernatur nisi ducimus itaque facilis esse. Est ipsam
        incidunt ducimus atque repellendus blanditiis molestias rem quasi
        nesciunt illo, aperiam accusantium assumenda laudantium, sit excepturi
        quas aliquam?
      </article>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.history {
  margin: 40px 0;
  padding: 0 30px;
  display: flex;
  justify-content: space-evenly;
}
.history-item {
  max-width: 500px;
}
@media (max-width: 768px) {
  .history {
    margin: 20px 0;
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 1.2em;
  }
  article {
    font-size: 15px;
  }
  .history-left {
    margin-top: 10px;
  }
}
</style>