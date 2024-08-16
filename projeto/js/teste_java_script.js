console.log('O script JavaScript está sendo executado corretamente.');

const mensagem = "Olá, mundo!";
export async function posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }
export {mensagem, posts};
