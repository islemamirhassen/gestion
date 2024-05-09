package tn.csf.gestion.repositiries;

import tn.csf.gestion.model.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
