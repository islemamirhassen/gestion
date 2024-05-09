package tn.csf.gestion.repositiries;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.csf.gestion.model.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer> {
}
