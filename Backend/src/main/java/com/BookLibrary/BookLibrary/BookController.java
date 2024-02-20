package com.BookLibrary.BookLibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @GetMapping("/")
    public List<Book> getAll(){
        return bookRepository.getALl();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable("id") int id){
        return bookRepository.getById(id);
    }

    @PostMapping("")
    public HttpStatus create(@RequestBody Book book){
        int result = bookRepository.create(book);
        return result > 0 ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
    }

    @PutMapping("/{id}")
    public HttpStatus update(@PathVariable("id") int id, @RequestBody Book updatedBook){
        Book book = bookRepository.getById(id);
        if(book != null){
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            book.setRating(updatedBook.getRating());
            return bookRepository.update(book) > 0 ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } else {
            return HttpStatus.NOT_FOUND;
        }
    }

    @PatchMapping("/{id}")
    public HttpStatus updatePatch(@PathVariable("id") int id, @RequestBody Book updatedBook){
        Book book = bookRepository.getById(id);
        if(book != null){
            if(updatedBook.getAuthor() != null) {
                book.setAuthor(updatedBook.getAuthor());
            }
            if(updatedBook.getTitle() != null){
                book.setTitle(updatedBook.getTitle());
            }
            if(updatedBook.getRating() > 0){
                book.setRating(updatedBook.getRating());
            }
            return bookRepository.update(book) > 0 ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } else {
            return HttpStatus.NOT_FOUND;
        }
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteBook(@PathVariable("id") int id){
        return bookRepository.delete(id) > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND;
    }
}
