console.log('O script JavaScript está sendo executado corretamente.');

const mensagem = "Olá, mundo!";
const posts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(err => console.log(err));
}
        

export {mensagem, posts};
