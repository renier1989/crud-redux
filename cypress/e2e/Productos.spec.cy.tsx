/// <reference types="cypress" />

describe('<NuevoProducto/> - Verificar la vista de Nuevos Productos',()=>{
    it('<NuevoProducto /> - Verificar integridad del formulario para nuevos productos',()=>{
        cy.visit('/productos/nuevo');

        // verificar el titulo
        cy.get('[data-cy=titulo]').should('exist').invoke('text').should('eq','Registrar Nuevo Producto');

        // verificar que existe el formulario
        cy.get('[data-cy=form-nuevo-producto]').should('exist');

        // verificar los campos del formulario
        cy.get('[data-cy=nombre-input]').should('exist').should('have.prop','type').should('eq','text');
        cy.get('[data-cy=precio-input]').should('exist').should('have.prop','type').should('eq','number');

        // verificar el boton submit
        cy.get('[data-cy=boton-submit-nuevo]').should('exist');
    })

    it('<NuevoProducto/> - Validar el formulario',()=>{
        // simular un click en el formulario 
        cy.get('[data-cy=boton-submit-nuevo]').click();

        // verificar que se muestre la alerta
        cy.get('[data-cy=alerta]').should('exist');
    })

    it('<NuevoProducto/> - Registrar un nuevo producto',()=>{
        // rellenar el formulario
        cy.get('[data-cy=nombre-input').type('producto 1');
        cy.get('[data-cy=precio-input').clear().type('999');

        // simular el click para agregar el producto
        cy.get('[data-cy=boton-submit-nuevo]').click();

        // validar que se mostro el modal 
        cy.get('.swal2-title').should('exist').should('have.text','Exito');

        // dar click al boton para cerrar el modal
        cy.get('.swal2-confirm').should('exist').should('have.text','OK');
        cy.get('.swal2-confirm').click();

        // verificar que el primer elmento de la lista sea igual al creado
        cy.get('[data-cy=listado-productos] tr:nth-child(1) td:nth-child(1)').should('have.text','producto 1');
    })

    it('<Productos /> - Elimar un producto',()=>{
        // simiular click al boton de eliminar
        cy.get('[data-cy=listado-productos] tr:nth-child(1) td:nth-child(3) [data-cy=boton-eliminar]').click();

        // validar que se mostro el modal de confirmacion
        cy.get('#swal2-title').should('have.text','Segur@ que desea eliminar?');

        // dar click al boton de eliminar en el modal
        cy.get('.swal2-confirm').should('exist').invoke('text').should('eq','Si , Eliminar!');
        cy.get('.swal2-confirm').click();

        // validar que se mostro el modal de confirmacion de eliminacion
        cy.get('.swal2-title').should('exist').should('have.text','Eliminado!');

        // dar click al boton para cerrar el modal
        cy.get('.swal2-confirm').should('exist').should('have.text','OK');
        cy.get('.swal2-confirm').click();
        
    })
})