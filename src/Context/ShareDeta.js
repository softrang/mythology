import { createContext, useContext } from "react";

import Logo from '../image/logo.png'
import ser1 from '../image/ourservices/ser1.webp'
import ser2 from '../image/ourservices/ser2.webp'
import ser3 from '../image/ourservices/ser3.webp'
import ser4 from '../image/ourservices/ser4.webp'
import ser5 from '../image/ourservices/ser5.webp'
import ser6 from '../image/ourservices/ser6.webp'
import ser7 from '../image/ourservices/ser7.webp'
import ser8 from '../image/ourservices/ser8.webp'
import ser9 from '../image/ourservices/ser9.webp'
import ser10 from '../image/ourservices/ser10.webp'


import html from '../image/technology/html.png'
import css from '../image/technology/css.png'
import js from '../image/technology/js.png'
import jqury from '../image/technology/jquery.png'
import boots from '../image/technology/bootstrap.svg'
import ajax from '../image/technology/ajax.png'
import php from '../image/technology/php.png'
import mysql from '../image/technology/mysql.png'
import wp from '../image/technology/wp.png'
import larvel from '../image/technology/laravel.png'
import react from '../image/technology/react.png'
import aunglar from '../image/technology/angular.png'
import noodjs from '../image/technology/nodejs.webp'
import expres from '../image/technology/Expressjs.png'
import fluter from '../image/technology/flutter.jpg'
import dart from '../image/technology/dart.png'
import fire from '../image/technology/firebase.png'
import git from '../image/technology/Git.png'



const ShareDeta = createContext();

export const useDeta = () => useContext(ShareDeta);

export const DetaProvider = ({ children }) => {

 

    const heder = [
        {
          menu: "Home",
          submenu: [
           
           
          ],
        },
        {
          menu: "About us",
          submenu: [
            
           
          ],
        },
    
        {
          menu: "Service",
          submenu: [
            { sub: "Service1" },
            { sub: "Service2" },
            { sub: "Service3" },
          ],
        },
        {
          menu: "Tools",
          submenu: [
            { sub: "Tools1" },
            { sub: "Tools2" },
            { sub: "Tools3" },
          ],
        },
        {
          menu: "Website",
          submenu: [
           
           
          ],
        },
        {
          menu: "Clients",
          submenu: [
           
           
          ],
        },
        {
          menu: "Team",
          submenu: [
           
           
          ],
        },
        {
          menu: "Contact",
          submenu: [
           
           
          ],
        },



      ];
   

   
const logoo =[
    {

        image:Logo
    }
   
]


const serviceco = [
  {
    image:ser1, title:"Web Development"
  },
  {
    image:ser2, title:"New Portals"
  },
  {
    image:ser3, title:"Hosting"
  },
  {
    image:ser4, title:"Softwer Development"
  },
  {
    image:ser5, title:"Service Consultency"
  },
  {
    image:ser6, title:"Mobile App"
  },
  {
    image:ser7, title:"Netwarking"
  },
  {
    image:ser8, title:"Digital Marketing + SEO"
  },
  {
    image:ser9, title:"Creative Design"
  },
  {
    image:ser10, title:"PR"
  },
]

const technoly = [
  {
    image:html, title:"HTML"
  },
  {
    image:css, title:"CSS"
  },
  {
    image:js, title:"JS"
  },
  {
    image:jqury, title:"Jqury"
  },
  {
    image:boots, title:"Bootstrap"
  },
  {
    image:ajax, title:"Ajax"
  },
  {
    image:php, title:"PHP"
  },
  {
    image:mysql, title:"MySql"
  },
  {
    image:wp, title:"Wordpress"
  },
  {
    image:larvel, title:"Larvel"
  },
  {
    image:react, title:"React"
  },
  {
    image:aunglar, title:"Aungular"
  },
  {
    image:noodjs, title:"Noodjs"
  },
  {
    image:expres, title:"Express"
  },
  {
    image:fluter, title:"Fluter"
  },
  {
    image:dart, title:"Dart"
  },
  {
    image:fire, title:"FireBase"
  },
  {
    image:git, title:"Git"
  },
]



  const flink =[
    {
        title: "Usefull Links",
        subtitle: [
          { subt: "Usefull1" },
          { subt: "Usefull2" },
          { subt: "Usefull3" },
        
        ],
      },
    {
        title: "Our  Link",
        subtitle: [
          { subt: "Contact us" },
          { subt: "Join Us" },
          { subt: "Usefull3" },
        
        ],
      },
    {
        title: "Our  Addres",
        subtitle: [
            {
                subt:" Address: 24 North Kafrul, 3rd Floor, Dhaka-1206, Bangladesh."
        
            },
            {
                subt:" Mobile: +88-01714001209 "
        
            },
        
            {
                subt:" Email: info@emythmakers.com"
        
            },
        
        ],
      },
  ]

   

  

  

   





    return (
        <ShareDeta.Provider value={{heder,  logoo, serviceco, technoly, flink}}>
            {children}
        </ShareDeta.Provider>
    );
};