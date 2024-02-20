package com.BookLibrary.BookLibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Book> getALl() {
        return jdbcTemplate.query("select id, title, author, rating FROM book", BeanPropertyRowMapper.newInstance(Book.class));
    }

    public Book getById(int id){
        return jdbcTemplate.queryForObject("select id, title, author, rating FROM book where id = ?",BeanPropertyRowMapper.newInstance(Book.class),id);
    }

    public int create(Book book) {
    return jdbcTemplate.update("INSERT INTO book (title, author, rating) VALUES (?, ?, ?)",book.getTitle(), book.getAuthor(), book.getRating());
    }
    public int update(Book book){
        return jdbcTemplate.update("UPDATE book SET title =?, author = ?, rating = ? WHERE id = ?",
                book.getTitle(),book.getAuthor(),book.getRating(),book.getId());

    }
    public int delete(int id){
        return jdbcTemplate.update("DELETE FROM book WHERE id = ?",id);
    }
}
