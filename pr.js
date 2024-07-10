const SEARCH_KEy = "https://openlibrary.org/search.json?title="

async function searchbook() {
    try {
        let bookname = prompt("book name")
        bookname = bookname.split('').join('+')
        console.log(bookname);

        let url = SEARCH_KEy + bookname
        console.log(url);
        let result = await fetch(url);
        result = await result.json();

        console.log(result.docs[0]);
        console.log(result.docs[0].authr_name[0]);
        console.log(result.docs[0].first_publish_year);
        console.log(result.docs[0].authr_name);
        // alert('Author name')
     //   alert(Author Name: ${result.docs[0].author_name[0]}\nFirst Publish Year: ${result.docs[0].first_publish_year}\nFirst Sentence: ${result.docs[0].first_sentence[0]})


        console.log("finish");
    } catch (error) {
        console.log("error");
    }


}