import React from 'react';
import { render as r } from 'react-dom';
//import { get } from 'axios'; 

//const { data: { users: login } } = fetch(URL).then(x => x.json());

const data = {
     "users":[
     {
      "login":"student",
      "password":"tneduts"
     },
     {
      "login":"myuserlogin",
      "password":"mypas"
     },
     {
      "login":"prof",
      "password":"fessor"
     },
     {
      "login":"ego",
       "password":"selfish"
     }]
};

const drawStars = n => {
 let r = '';
 for(let i = 0; i < n; i++) {
  r = r + '⭐️';
 }
 return r;
}

//const drawStars = ({n}) => 
//  <span>{Array.from({n}, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

const Person = ({stars, text}) => 
 <span><strong>{ text.toUpperCase() }</strong> { drawStars(stars) }</span>;

const PersonList = () => {
 return data.users.map((user, i) => 
  <ul key={i}>{i + 1}. <Person text={user.login} stars={user.login.length} /></ul>)
}

r(
    <PersonList />,
 document.querySelector('.cont'),
);
