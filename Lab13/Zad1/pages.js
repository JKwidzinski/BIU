import React from "react";
import { useLocation } from "react-router-dom";
 
export function Home() {
    return (
      <div>
        <h1>[Company Website]</h1>
      </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Services() {
  return (
    <div>
      <h1>[Services]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function ContactUS() {
  return (
    <div>
      <h1>[ContactUS]</h1>
    </div>
  );
}

export function ContactPL() {
  return (
    <div>
      <h1>[ContactPL]</h1>
    </div>
  );
}

export function ContactDE() {
    return (
      <div>
        <h1>[ContactDE]</h1>
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