<script>
    // @ts-ignore
    export let product;
</script>

<html data-theme="retro" lang="en">

<div class="card w-[20rem] glass border rounded">
    <img src={product.imageUrl} class="w-full" />
    <div class="card-body">
        <h3 class="font-bold text-xl">{product.name}</h3>
        <p class="text-gray-600 text-sm">{product.description}</p>
        <h4 class="font-bold text-4xl">${product.price}</h4>
      <div class="card-actions justify-end">
        <a href={product.paymentUrl} class="w-full rounded text-xl font-semibold tracking-wider block text-center px-10 py-5 bg-orange-400 hover:bg-orange-500 text-orange-100">Buy Now</a>
      </div>
    </div>
  </div>
  </html>

<!-- <div class="w-[20rem] border rounded px-8 py-10 space-y-6">
    <h3 class="font-bold text-xl">{product.name}</h3>
    <p class="text-gray-600 text-sm">{product.description}</p>
    <h4 class="font-bold text-4xl">${product.price}</h4>

    <div>
        <img src={product.imageUrl} class="w-full" />
    </div>
    <div>
        <a href={product.paymentUrl} class="w-full text-xl font-semibold tracking-wider block text-center px-10 py-5 bg-orange-600 hover:bg-orange-700 text-orange-100">Buy Now</a>
    </div>
</div> -->