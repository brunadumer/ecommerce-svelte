<script>
    export let storeName = "One Stop Done";
    export let location = "Highland, Utah";
    export let description = "Welcome to our gift store!";
  </script>
  
  <main>
    <div class="text-center p-4">
    <section>
      <img src="src/images/utah.jpeg" alt="Utah" class="w-full"/>
      <h1 class="text-3xl p-5">About Us</h1>
      <p>{description}</p>
    </section>
  
    <section>
      <h2 class="text-2xl p-5">Our Store</h2>
      <p>We are {storeName}, located in {location}. Our store offers a wide selection of unique and high-quality gifts for every occasion.</p>
    </section>
  
    <section>
      <h2 class="text-2xl p-5">Our Mission</h2>
      <p class="w-3/5 m-auto">At {storeName}, our mission is to provide our customers with exceptional gifts that bring joy and delight to their loved ones. We carefully curate our collection to ensure that each item reflects our commitment to quality and craftsmanship.</p>
    </section>
  
    <section>
      <h2 class="text-2xl p-5">Contact Us</h2>
      <p>If you have any questions or would like to learn more about our products, please feel free to contact us:</p>
      <ul>
        <li>Email: onestop@done.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 Main Street, Highland, Utah</li>
      </ul>
    </section>
    </div>
  </main>
  