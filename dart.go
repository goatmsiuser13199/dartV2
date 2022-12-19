package main

import "net/http"

func main() {
	fileServer := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets", fileServer))
	http.HandleFunc("/", dart)
}

func dart(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "dart.html")
}
