import "./PostIt.css";
import {v4 as uuid} from "uuid";
import { useEffect, useRef, useState } from "react";
import PostIt from "./PostIt";





const AddPost = () => {  
    const KEY = 'PostIt'

    const [titulos,setTitulos]=useState([])

    const titulo = useRef()
    
    useEffect (() => {
        const titulosStorage = JSON.parse(localStorage.getItem(KEY));
        console.log(titulosStorage);
            setTitulos((titulosAnteriores) => {
                return[...titulosAnteriores, ...titulosStorage];
        });
    }, [] );


    useEffect( () => {
        localStorage.setItem(KEY, JSON.stringify(titulos));
    }, [titulos] );

    //tareas

    const [tareas, setTareas] = useState([]);

    const tarea = useRef();

    useEffect (() => {
        const tareasStorage = JSON.parse(localStorage.getItem(KEY));
        console.log(tareasStorage);
            setTareas((tareasAnteriores) => {
                return[...tareasAnteriores, ...tareasStorage];
        });
    }, [] );

    useEffect( () => {
        localStorage.setItem(KEY, JSON.stringify(tareas));
    }, [tareas] );

    
    function agregarContenido() {
        
        const Title = titulo.current.value;
        const Content = tarea.current.value; 
        if (Title === '' && Content === '') return;
        const nuevoPost = {
            id: uuid(),
            valorTitulo: Title,
            valorContenido: Content,
        }
    
        setTitulos( (titulosAnteriores) => {
            return [...titulosAnteriores, nuevoPost];
        });
    
        setTareas( (tareasAnteriores) =>{
            return [...tareasAnteriores,nuevoPost]
        }
        )    
        
    }
    
    

    
  
    return(
        <div>
            <h1>Post It Simulator<span>!</span></h1>
            <div className="Inserts">
                <div>
                    <label for='title'>Title:</label>
                    <input id="title" ref={titulo} placeholder="Insert a Title"></input>
                </div>
                <div>
                    <label for="content">Content:</label>
                    <input id="content" ref={tarea} placeholder=" Insert Your Content"></input>
                </div>
                <input id="check" type={'checkbox'}></input>
                <label>Important!</label>
                <button onClick={agregarContenido}>Ok</button>
            </div>
                <div id="Contenedor">
                    {titulos.map((item) =>  <PostIt  key={item.id} titulo={item.valorTitulo} content={item.valorContenido}/>)} 
                </div>
        </div>

    );

}


export default AddPost;