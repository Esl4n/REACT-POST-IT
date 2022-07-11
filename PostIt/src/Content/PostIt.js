

const PostIt = (props) => {
    var estilo = {}
    var estilo2 = {}
    const val = document.getElementById('check').checked;
    if (val === true){
        estilo = {
                backgroundColor: '#f00',
                height: '250px',
                width: '250px',
                borderRadius: '2%',
                boxShadow:' 1px 3px #77767c',
        }

        estilo2={
            backgroundColor:'#f00'
        }
    }else{
        estilo = {
                backgroundColor: '#ff0',
                height: '250px',
                width: '250px',
                borderRadius: '2%',
                boxShadow:' 1px 3px #77767c',
        }
        
        estilo2={
            backgroundColor:'#ff0'
        }
    }

    
    
    return(
        <li style={estilo} className="contenidoPost">
            <h2 style={estilo2}>{props.titulo}</h2>
            <p style={estilo2}>{props.content}</p>
        </li>
        
    )
    

    

}

export default PostIt;


