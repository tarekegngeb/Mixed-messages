const messages = ["In the world you will have tribulation. But take heart; I have overcome the world.", "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', 'I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!', "And we know that for those who love God all things work together for good, for those who are called according to His purpose", "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.", "So do not worry, saying, \'What shall we eat?\' or \'What shall we drink?\' or \'What shall we wear?\' For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.", "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.", "If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land."];
// const part = ['John 16:33', 'Isaiah 41:10 ', 'Philippians 4:6–7', 'Psalm 34:4–5, 8','Romans 8:28', 'Joshua 1:9', 'Matthew 6:31–34 ', 'Proverbs 3:5–6', 'Romans 15:13', '2 Chronicles 7:14' ];
const colors = ['red', 'black', 'green', 'DarkRed', 'blue', 'cyan', 'gray', 'purple', 'amber', 'orange'];
const nameOf = ['T', 'Sarah C', 'Sarah B', 'Jacob', 'Edna', 'Yasmin', 'Aaron', 'Sayed', 'Katia', 'Derek'];
// const images =[images/1.png, images/2.webp, images/3.jpg, images/4.jpg, 'images/5.jpg', 'images/6.jpg', 'images/7.webp', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'];
document.addEventListener('click', ()=>{ 
let randomNum = Math.floor(Math.random()* messages.length);
let shuffleName = nameOf.sort((a, b)=>Math.floor(Math.random()*messages.length));
document.querySelector('button').onclick = () => {
        
        document.querySelector('#message').innerHTML = messages[randomNum];
        document.querySelector('#random').innerHTML = 'images/1.png';
         document.querySelector('#name').innerHTML = `Hi ${shuffleName[randomNum]} =>`;
         document.querySelector('#messages').innerHTML = shuffleName[randomNum];   
        document.querySelector('#name').style.color = colors[randomNum];
        document.querySelector('#message').style.color = colors[randomNum];
        document.querySelector('#random').style.color = colors[randomNum];
       
        document.getElementById('img').innerHTML = shuffleName[randomNum];
     
      
       }
       
    });




