//HOC(Higher Order Components): It transforms component into another component
//adding additional functionalities to existing Components

import React from "react";
import {Route} from "react-router-dom";

import MovieLayout from "../layouts/movie.layout";
const MovieHOC =({component:Component,...rest})=>{
  return (
    <>
    <Route {...rest}
    component={(props)=>(
      <MovieLayout>
      <Component {...props}/>
      </MovieLayout>
    )

    }
    />
    </>
  );
};

export default MovieHOC;
