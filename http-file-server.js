const fs=require("fs")
const http=require ("http")
const port=process.argv [2]
const file=process.argv [3]

const server=http.createServer((request,response)=>{
	fs.createReadStream(file).pipe(response) 
	// fs.createReadStream () pour diffuser le contenu du fichier dans la réponse(response) de notre serveur
	// la méthode pipe () pour diffuser le contenu de nos fichiers de la source (file) vers la destination (response).(lier file et response)
	// La signature de pipe est: source.pipe (destination)
})
 server.listen(port)


 // différence entre fs.readFile() et createReadStream():
 // fs.readFile() lira l'intégralité du fichier en mémoire avant de l'envoyer à la réponse, tandis que la méthode fs.
 // createReadStream() diffusera le contenu du fichier dans la réponse lors de sa lecture et du coup utilise moins de mémoire.
