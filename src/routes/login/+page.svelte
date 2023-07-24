<script>
    let email = "";
    let password = "";
  
    function handleLogin() {
      // Perform login logic here
      console.log("Email:", email);
      console.log("Password:", password);
      // You can replace the above console.log statements with your actual login implementation
    }
  </script>
  
  <main>
    <h1>Login</h1>
  
    <form on:submit|preventDefault={handleLogin}>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} required />
  
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required />
  
      <button type="submit">Login</button>
    </form>
  </main>
  
  <style>
    main {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
    }
  
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
  
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
  
    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
  