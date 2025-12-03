package com.book_library.config;

import com.book_library.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {
    private final String allowedOrigins = "https://localhost:3000";

    public void configureRepoRestConfiguration(RepositoryRestConfiguration repositoryRestConfiguration, CorsRegistry cors) {
        HttpMethod[] unsupportedActions = {HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PATCH, HttpMethod.PUT};
        repositoryRestConfiguration.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class, repositoryRestConfiguration, unsupportedActions);

        cors.addMapping(repositoryRestConfiguration.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins);
    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration().forDomainType(bookClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions));
    }
}
