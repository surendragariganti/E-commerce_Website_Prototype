package ECommerce.SpringbootMysqlCrudApplication.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import ECommerce.SpringbootMysqlCrudApplication.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
