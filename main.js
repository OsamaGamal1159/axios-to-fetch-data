

axios.get("https://api.github.com/users/elzerowebschool/repos")
.then(x=>x.data.map(x=>console.log(x.id)))
.catch(err=>console.error("you have error"));