const skillContainer = document.getElementById('skills');
const portfolioContainer = document.getElementById('portfolio');
let skills, portfolio;

window.addEventListener('load', function(){

    skills = {
        Windows: new SkillCard({
            title: 'Microsoft Windows',
            description: 'XP, Vista, 7, 8, 8.1, 10'
        }),
        Linux: 'Ubuntu, Red Hat, openSUSE',
        'MacOS': '',
        'Visual Studio': new SkillCard({
            title: 'Microsoft Visual Studio'
        }),
        'Visual Studio Code': new SkillCard({
            title: 'Microsoft Visual Studio Code'
        }),
        'Arduino IDE': '',
        Blender: '2.5 - 3.0',
        'After Effects': new SkillCard({
            title: 'Adobe After Effects',
            description: 'CS5 - CC'
        }),
        'Premiere Pro': new SkillCard({
            title: 'Adobe Premiere Pro',
            description: 'CS5 - CC'
        }),
        Photoshop: new SkillCard({
            title: 'Adobe Photoshop',
            description: 'CS5 - CC'
        }),
        Javascript: '',
        HTML: '',
        CSS: '',
        'C#': '',
        Java: '',
        Python: '',
        Haskell: '',
        'C/C++': ''
        
    }
    for (let key in skills) {
        //Convenient for skills where key matches title
        if (typeof skills[key] === 'string') {
            skills[key] = new SkillCard({
                title: key,
                description: skills[key]
            });
        }
    }
    portfolio = [
        new MediaCard({
            title: 'Symbiosis',
            description: 'Modeled in Blender, rendered in LuxCore, composited in After Effects',
            photo: 'https://lh3.googleusercontent.com/pw/AM-JKLWzuGZ8yD38BT014tra5yIkKRk7I9UVM1jAcTJWAGT-mlpELtbP0jEpfZl6bKFx4g4Pb_f3m3-0QH0noHjrGbMOHmmAwHdbT90BLj8dvOffCf1VsuKsLdi7zvPQ_CgaVzDjVP3OAvoiVNs4P3m0fgkJ=w845-h564-no?authuser=0',
            skills: ['Blender', 'LuxCore', 'After Effects', 'Photoshop', 'Windows']
        }),
        new MediaCard({
            title: 'Calculator',
            page: 'https://effektgubben.github.io/Calculator/#175%2F7900',
            skills:['Javascript', 'HTML', 'CSS', 'Visual Studio', 'Visual Studio Code', 'Windows']
        }),
        new MediaCard({
            title: 'Bees in Slow Motion',
            yt: 'https://www.youtube.com/embed/1QB-B42dnNs',
            skills: ['After Effects', 'Windows']
        }),
        new MediaCard({
            title:'What\'s Up?',
            photo: 'https://lh3.googleusercontent.com/pw/AM-JKLU36WHzGqGtyD0sL8lIq_dfjbauqJDD24jGLsMeP_Nab2t6s9R0YyW0OGEUbzKcVgPbnvlbCnmubWSCA89HkfgcE7VMtYgttEYo7pnWEJoUVdN-hvvrGkgoSFlqmp6qEF_1NGXzCqJLwkfn-NGfXC7K=w1319-h742-no?authuser=0',
            skills: ['Blender', 'LuxCore', 'After Effects', 'Photoshop', 'Windows']
        }),
        new MediaCard({
            title: 'The Master Baseball Player',
            yt: 'https://www.youtube.com/embed/6bBFu3A5DGw',
            skills: ['After Effects', 'Blender', 'Windows']
        }),
        new MediaCard({
            title: 'Noodle',
            page: 'https://effektgubben.github.io/Noodle/',
            skills:['Javascript', 'HTML', 'CSS', 'Visual Studio', 'Visual Studio Code', 'Windows']
        })
    ]
    
    for (let key in skills) {
        skills[key].render(skillContainer, 'skill-card-' + key);
    }
    
    for (let i in portfolio) {
        portfolio[i].render(portfolioContainer, 'media-card-' + i, ' media');
    }
});