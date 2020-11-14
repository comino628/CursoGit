import Blog 										from './Blog';
import Error 										from './Error';
import Footer 										from './Footer';
import Article										from './Article';
import Formulario 									from './Formulario';
import Header 										from './Header';
import Home 										from './Home';
import Peliculas 									from './Peliculas';
import React, { Component } 						from 'react';
import Search 							            from './Search';
import { BrowserRouter, Route, Switch, Redirect }   from 'react-router-dom';
import CreateArticle from './CreateArticle';
import EditArticle from './EditArticle';


class Router extends Component {
    render() {
        return (
            /* Configurar las rutas */

            <BrowserRouter>
                <Header />

                    <Switch>

                        {/*Rutas del top menu */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Formulario" component={Formulario} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/peliculas" component={Peliculas} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/blog/articulo/:id" component={Article}/> 
                        <Route exact path="/blog/crear" component={CreateArticle}/>         
                        <Route exact path="/blog/editar/:id" component={EditArticle}/>                  

                        <Route exact path="/pagina-1" 
                            render = {
                                () => (

                                <h1>Saludos dsde la ruta de la pagina 1</h1>

                                )
                            }
                        />

                        
                       
                        <Route exact path="/redirect/:search" 
                            render = {
                                (props) => {

                                    var search = props.match.params.search;
                                    return(<Redirect to={'/blog/busqueda/' + search}/>);
                                                                    
                                }
                            }
                        />

                        <Route component={Error} />

                    </Switch>

            <div className="clearfix"></div>
            <Footer />

            </BrowserRouter>

        );
    }
}

export default Router;