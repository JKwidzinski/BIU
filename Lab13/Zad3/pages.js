import React from "react";
import { useLocation, useParams } from "react-router-dom";
 
export function Home() {
    return (
      <div>
        <h1>[Home]</h1>
      </div>
    );
}

export function Add() {
    const { a } = useParams();
    const { b } = useParams();
    let result = Number(a)+Number(b);
    return (
      <div>
        <h1>Add</h1>
        <p>{result}</p>
      </div>
    );
}

export function Sub() {
    const { a } = useParams();
    const { b } = useParams();
    let result = Number(a)-Number(b);
    return (
      <div>
        <h1>Sub</h1>
        <p>{result}</p>
      </div>
    );
}

export function Mul() {
    const { a } = useParams();
    const { b } = useParams();
    let result = Number(a)*Number(b);
    return (
      <div>
        <h1>Mul</h1>
        <p>{result}</p>
      </div>
    );
}

export function Div() {
    const { a } = useParams();
    const { b } = useParams();
    let result;
    if(b === 0){
        result = "You can't divide by 0";
    }else {
        result = Number(a)/Number(b);
    }
    return (
      <div>
        <h1>Div</h1>
        <p>{result}</p>
      </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>
                Nie znaleziono elementu: {location.pathname}
            </h1>
        </div>
    );
}