const url ="https://randomuser.me/api/";

document.getElementsByTagName("img")[0].style.visibility="hidden";

async function getData(url) {

    // TO FETCH DATA
    const response = await fetch(url);
  let  data = await response.json();

    console.log(data.results[0]);

        document.getElementById('name').innerHTML =  `${data.results[0].name.first} ${data.results[0].name.last}`;
        document.getElementsByTagName("img")[0].style.visibility="visible";
      const image = document.getElementsByTagName("img")[0];
        
        image.src = `${data.results[0].picture.large}`;

        about = document.getElementsByClassName('about')[0];
        heading2 = document.getElementsByClassName('detail1')[0];
        heading3 = document.getElementsByClassName('detail2')[0];
        
        
        // heading2.innerHTML =`<b>${data.results[0].dob.age}</b>` ;
  
        // heading3.innerHTML = `<br>${data.results[0].email}`+ "<br>" +`${data.results[0].phone}`;
        
      document.getElementById('getUser').onclick = ()=>{

        heading2.innerHTML =`<b>${data.results[0].dob.age}</b>` ;     
        heading3.innerHTML = `<br>${data.results[0].email}`+ "<br>" +`${data.results[0].phone}`;

      }
        document.getElementsByClassName("age")[0].onclick = ()=>{

          heading2.innerHTML =`<b>${data.results[0].dob.age}</b>` ; 
          heading3.innerHTML = ``;
          
      }
      
      document.getElementsByClassName("email")[0].onclick = ()=>{

        heading2.innerHTML =``;     
        heading3.innerHTML = `${data.results[0].email}`;
    
    }
    
    document.getElementsByClassName("phn_no")[0].onclick = ()=>{
      
      heading2.innerHTML =`` ;      
      heading3.innerHTML = `${data.results[0].phone}`;
  
  }
  
    

}

     
document.getElementById('getUser').addEventListener('click', ()=>{
 
      getData(url);

})
 
  