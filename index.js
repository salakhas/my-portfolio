const projects = [
    {
      id: 1,
      name: "Nike Clone",
      URLs: {
        img:
          "https://miro.medium.com/max/2846/1*_FZsgxmNmiz-HNaGdUAiCg.png",
        liveVersion: "https://nike-five.vercel.app/",
        sourceCode: "https://github.com/salakhas/Nike.git",
      },
      tags: {
        projectType: "Collaborative",
        projectDev: "Front-end",
        projectDate: "2021",
      },
      miniDescription:
        "It is a web application that allows users to purchase various kinds of clothing, footwear etc",
      builtWith: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      description:
        "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. Nike.com is the website used by Nike to deliver innovative products, experiences and services to inspire athletes. We have tried to clone the website using HTML5, CSS3, and Javascript DOM. This was a collaborative project at MASAI school.",
    },
    {
      id: 2,
      name: "Epic Games",
      URLs: {
        img:
          "https://miro.medium.com/max/2847/1*qVMPy6kSqxLJ708FeM1RPA.png",
        liveVersion: "#",
        sourceCode: "https://github.com/salakhas/Epic-Games.git",
      },
      tags: {
        projectType: "Collaborative",
        projectDev: "Full-Stack",
        projectDate: "2022",
      },
      miniDescription:
        "A web application to download ,purchase and play video games",
      builtWith: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "MongoDB", 
        "Express.js", 
        "Node.js"],
      description:
        "Epic Games, Inc. is an American video games and software developer and publisher . Epic Games develops the Unreal Engine , a commercially available game engine which also powers their internally developed video games, such as Fortnite and the Unreal , Gears of War and Infinity Blade series.",
    },
    {
      id: 3,
      name: "Sendinblue Clone",
      URLs: {
        img:
          "https://miro.medium.com/max/2880/1*zC6nd_JOBb7fiN8PmKxXTQ.png",
        liveVersion: "https://zealous-fermi-93bab9.netlify.app/",
        sourceCode: "https://github.com/swethav08711/vanadium.git",
      },
      tags: {
        projectType: "Collaborative",
        projectDev: "Front-end",
        projectDate: "2021",
      },
      miniDescription:
        "Sendinblue is a website used by businesses to build and grow relationships with their customers.",
      builtWith: ["HTML5",
        "CSS3",
        "JavaScript"],
      description:
        "Sendinblue is a website used by businesses to build and grow relationships with their customers.",
    },
    {
      id: 4,
      name: "Mini GitHub App",
      URLs: {
        img:
          "https://user-images.githubusercontent.com/87031922/158336616-1adfd527-35eb-4340-940b-2174a6a213da.png",
        liveVersion: "https://trusting-wiles-2acce7.netlify.app/",
        sourceCode: "https://github.com/salakhas/Mini-Github-App.git",
      },
      tags: {
        projectType: "Personal",
        projectDev: "Front-end",
        projectDate: "2021",
      },
      miniDescription:
        "An individual project to search for GitHub users and view their repositories.",
      builtWith: ["HTML5", "CSS3", "JavaScript"],
      description:
        "An individual project to search for GitHub users and view their repositories.",
    },
    {
      id: 5,
      name: "Tic Tac Toe game",
      URLs: {
        img:
          "https://user-images.githubusercontent.com/87031922/158922011-25f7147e-e23b-4f3e-ba62-c271da6bebb4.png",
        liveVersion: "https://salakhas-tic-tac-toe.netlify.app/",
        sourceCode: "https://github.com/salakhas/tic-tac-toe-game.git",
      },
      tags: {
        projectType: "Personal",
        projectDev: "Front-end",
        projectDate: "2022",
      },
      miniDescription:
        "A very simple tic tac toe game made with basic HTML,CSS and JavaScript",
      builtWith: ["HTML5", "CSS3", "JavaScript"],
      description:
        "A very simple tic tac toe game made with basic HTML,CSS and JavaScript",
    },
  
  ];


let mainDisplayDiv = document.getElementById('project-display');

displayDiv();

function displayDiv(){
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class','project-div');

    console.log('projects:', projects)

    projects.map((el) => {
        let div = document.createElement('div');
        div.setAttribute('class','indProject');
        console.log('el:', el)
        let url = el.URLs;
        console.log("el.URLs.img",url.img);
        let imgDiv = document.createElement('div');
            imgDiv.setAttribute('class','imgDiv');
            let imgs = document.createElement('img');
            imgs.src = url.img;
            console.log("img.src",imgs.src)
            imgs.setAttribute('class','imgProject')
            imgs.style.border= "1px solid white";
            imgDiv.append(imgs);

        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class','content-div');



        let projectTitle = document.createElement('h3');
        projectTitle.style.textAlign = "center";
        projectTitle.textContent = el.name;
        projectTitle.style.fontWeight = "bold";

        let details = document.createElement('span');
        let team = document.createElement('p');
        team.innerText = el.tags.projectType;

        let li = document.createElement('li');
        li.innerText = el.tags.projectDev;
        
        let date = document.createElement('li');
        date.innerText = el.tags.projectDate;
        

        details.append(team,li,date);
        details.style.display = "flex";
        details.setAttribute('class','details');

        let description = document.createElement('p');
        description.innerText = el.miniDescription;
        description.style.textAlign = "center";
        description.setAttribute('class','desc');

        let builtWithIt = document.createElement('div');
        builtWithIt.setAttribute('class','lis')
        let miniArr = el.builtWith;
        
        for(let i=0; i<miniArr.length; i++){
            console.log(i)
            let lis = document.createElement('div');
           // lis.setAttribute('class','lis')
            let logo = document.createElement('div');
            console.log(miniArr[i])
            if(miniArr[i] === "HTML5"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%; margin-right:10px" src="data:image/png;base64,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"/>`; 
            }
            if(miniArr[i] === "CSS3"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%; margin-right:10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B0jgb556iB3bft4AYqEReM2wopQYyxYWmQ&usqp=CAU"/>`;
            }
            if(miniArr[i] === "JavaScript"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%; margin-right:10px" src="data:image/jpeg;base64,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"/>`;
            }
            if(miniArr[i] === "MongoDB"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%" src="data:image/png;base64,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"/>`;
            }
            if(miniArr[i] === "Express.js"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%; margin-right:10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1PKsfJXnxOqnTRiIZ8VcdJDYBXD-qZnnpw&usqp=CAU"/>`;
            }
            if(miniArr[i] === "Node.js"){
                logo.innerHTML = `<img width="60" height="60" style="border-radius:50%; margin-right:10px" src="data:image/jpeg;base64,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"/>`;
            }
           // str+=miniArr[i]+' ';
          console.log('logo:', logo)
          lis.append(logo);
          console.log('lis:', lis)
          builtWithIt.append(logo);
        }
       
        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class','buttonDiv');

        let button1Div = document.createElement('div');
        button1Div.style.display="flex";

        let svg1 = document.createElement('div');
        svg1.setAttribute('class','svg1')
        svg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg>`;

        let button1 = document.createElement('button');
        button1.setAttribute('class','btn button1');
        button1.innerHTML=`<a href="${el.URLs.liveVersion}">See Live</a>`;

        button1Div.append(svg1,button1);

        let button2Div = document.createElement('div');
        button2Div.style.display="flex";

        let svg2 = document.createElement('div');
        svg2.setAttribute('class','svg2')
        svg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>`;

        let button2 = document.createElement('button');
        button2.setAttribute('class','btn button2');
        button2.innerHTML=`<a href="${el.URLs.sourceCode}">See Code</a>`;
        button2Div.append(svg2,button2);
        buttonDiv.append(button1Div,button2Div);

        contentDiv.append(projectTitle,details,description,builtWithIt,buttonDiv);


        if(el.id % 2 === 0){
            div.append(contentDiv,imgDiv);
        }
        else{
            div.append(imgDiv,contentDiv);
        }
        projectDiv.append(div);
    })


    mainDisplayDiv.append(projectDiv);
}