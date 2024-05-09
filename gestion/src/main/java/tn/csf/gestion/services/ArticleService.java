package tn.csf.gestion.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.csf.gestion.model.Article;
import tn.csf.gestion.repositiries.ArticleRepository;

//defining the business logic  
@Service 

public class ArticleService {

	@Autowired  
	ArticleRepository aR;  
	//getting all books record by using the method findaAll() of CrudRepository  

	//getting all books record by using the method findaAll() of CrudRepository  
	public List<Article> getAllArticles()   
	{  
		List<Article> articles = new ArrayList<Article>();  
		aR.findAll().forEach(a -> articles.add(a));  
		return articles;  	
	}  

	//getting a specific record by using the method findById() of CrudRepository  
	public Article getArticlesById(int id)   
	{  
		return aR.findById(id).get();  
	}  


	//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Article Articles)   
	{  
		aR.save(Articles);  
	} 

	//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id)   
	{  
		aR.deleteById(id);  
	} 

}