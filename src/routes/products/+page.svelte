<script>
    import { invalidateAll } from '$app/navigation';
    
    export let data;
    
    let selectedProduct = {
        id: null,
        name: null,
        price: null,
        description: null,
        imageUrl: null,
    }
    
    async function handleSubmit(){
        // create or update the product
        if (selectedProduct.id){
            // update
            await handleUpdate();
        } else {
            // create
            await handleCreate();
        }
        // reset values and reload page.
        resetForm();
        await invalidateAll();
    }

    async function handleUpdate() {
        // Send a request to the server with the 'update' action
    await fetch(`/api/products/${selectedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedProduct),
            });
        }

    async function handleCreate() {
        await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedProduct),
            });
        }

    async function handleDelete() {
        const confirmation = window.confirm('Are you sure you want to delete this product?');
    if (!confirmation) return; // If the user cancels, return

    // Send a request to the server with the 'delete' action
    await fetch(`/api/products/${selectedProduct.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'delete',
        data: {
          id: selectedProduct.id,
        },
      }),
    });

    // Reset the form and reload the page
    resetForm();
    await invalidateAll();
  }
    
    function selectProduct(product){
        selectedProduct = product;
    }
    
    function resetForm(){
        selectedProduct = {
            id: null,
            name: null,
            price: null,
            description: null,
            imageUrl: null,
        }
    }
</script>

<main class="p-2">
    <form class="boder py-6 px-2" on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-col">
            <label for="name">Name*</label>
            <input id="name" type="text" class="py-1 px-2 border" bind:value={selectedProduct.name} />
        </div>
        <div class="flex flex-col">
            <label for="description">Description</label>
            <textarea id="description" class="py-1 px-2 border" placeholder="optional" bind:value={selectedProduct.description}></textarea>
        </div>
        <div class="flex flex-col">
            <label for="price">Price*</label>
            <input id="price" type="text" class="py-1 px-2 border" bind:value={selectedProduct.price} />
        </div>
        <div class="flex flex-col">
            <label for="imageUrl">Image URL*</label>
            <input id="imageUrl" type="text" class="py-1 px-2 border" bind:value={selectedProduct.imageUrl} />
        </div>
        <p class="mt-5">* required</p>
        <div class="mt-6">
            <button class="px-4 py-2 rounded text-white bg-orange-500 hover:bg-orange-600">
                Save
            </button>
            {#if selectedProduct.id !== null}
            <button type="button" on:click={handleDelete} class="px-4 py-2 rounded border text-slate-800 hover:bg-red-500 hover:text-white">
                Delete
            </button>
            {/if}
            <button type="button" on:click={resetForm} class="px-4 py-2 rounded border text-slate-800 hover:bg-slate-100">
                Cancel
            </button>
        </div>
    </form>
    
    <table class="mt-6">
        <thead>
            <tr>
                <th class="p-2 border">ID</th>
                <th class="p-2 border">Name</th>
                <th class="p-2 border">Price</th>
                <th class="p-2 border">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each data.products as product}
                <tr>
                    <td class="p-2 border">{product.id}</td>
                    <td class="p-2 border">{product.name}</td>
                    <td class="p-2 border">{product.price}</td>
                    <td class="p-2 border text-center">
                        <button type="button" on:click={() => selectProduct(product)} class="text-orange-600">
                            select
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    
</main>