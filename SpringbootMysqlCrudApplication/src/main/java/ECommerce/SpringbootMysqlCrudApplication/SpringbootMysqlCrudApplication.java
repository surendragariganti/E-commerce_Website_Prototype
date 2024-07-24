package ECommerce.SpringbootMysqlCrudApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("ECommerce.SpringbootMysqlCrudApplication.Repository")
@EntityScan("ECommerce.SpringbootMysqlCrudApplication.Model")
public class SpringbootMysqlCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootMysqlCrudApplication.class, args);
	}

}
