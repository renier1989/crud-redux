/// <reference types="cypress" />

describe('<Proyectos /> - Verificar la pantalla de inicio del proyecto',()=>{
    it('<Proyectos/> - Verificar los textos iniciales de la vista',()=>{
        cy.visit('/');

        // verificar que existan los titulos de la vista principal.
        cy.get('[data-cy="titulo-header"]').invoke('text').should('eq','CRUD - React + Redux + Json-Server + Axios');
        cy.get('[data-cy="titulo-lista"]').invoke('text').should('eq','Listado de Productos');
        
        // veficar que existe el boton para crear nuevos productos
        cy.get('[data-cy="boton-nuevo-producto"]').should('exist');
        cy.get('[data-cy="boton-nuevo-producto"]').should('have.attr','href').should('eq','/productos/nuevo');
        cy.get('[data-cy="boton-nuevo-producto"]').should('have.text','Nuevo Producto ➕');

        // verificar que exista la tabla en la vista
        cy.get('[data-cy="tabla-productos"]').should('exist');
        cy.get('[data-cy="tabla-productos"] thead tr th:nth-child(1)').invoke('text').should('eq','Nombre');
        cy.get('[data-cy="tabla-productos"] thead tr th:nth-child(2)').invoke('text').should('eq','Precio');
        cy.get('[data-cy="tabla-productos"] thead tr th:nth-child(3)').invoke('text').should('eq','Acciones');

    })
})