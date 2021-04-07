var container = document.getElementById("app")
//var titulo = document.createElement("h1")
//titulo.innerHTML = "Titulo inserido por JS :D"
//container.appendChild(titulo)

function Contador(props){

    //let numero = 0;
    const[numero, setNumero] = React.useStates();

    function somar(){
        setNumero(numero + 1)
        //numero++;
        //numero = numero + 1
        console.log("somei e ficou ="+ numero)
    }
    function subtrair(){
        setNumero(numero - 1)
        //numero--;
        //numero = numero - 1
        console.log("subtrai e ficou ="+ numero)
    }

    return(
        <React.Fragment>
        <h1>{props.titulo}</h1>
        <h2>{numero}</h2>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        </React.Fragment>
    );

}
function App(){
    return(
        <React.Fragment>
        <h1>Vote no seu preferido</h1>
        <Contador titulo="React"/>
        <Contador titulo="Angular"/>
        <Contador titulo="VueJS"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,null,null), container);
//ReactDOM.render(App(), container);

// PascalCase -> Componentes em React seguem esse padrão
// camelcase -> Funções em JavaScript
// Componentes só podem retornar um elemento por Componente
// saída => aninhar em React.Fragment
// podemos criar porpriedades para os nosso Componentes (props)