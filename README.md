# useContext-and-useRef-Example

React Hooks - useContext, useEffect, useRef and useState hook for Product CRUD

## Overview

In this project, I have created a Product CRUD using a product list and a form. The form can be used for creating a new product entry or edit an existing product attributes. The Product list displays product attributes, edit and delete options. This project maintains the products data in the ProductContext and refers to this context for product selection, editing, deletion and adding new product tp the list.

## Components

### ProductContextProvider

It component is responsible for providing data to the ProductContext and maintain the selectedProduct data in its state. The children of this component gets re-rendered whenever the state of ProductContextProvider gets updated (For instance, when user selects a product by clicking on Edit button).

### Product

It is responsible for displaying product attributes and provide option for editing and deletion of the product. It refers to changeSelectedProduct, deleteProduct methods from the ProductContext for the edit/delete operation.

### ProductList

It is responsible for rendering product details of all the products in the application. It receives products data from the ProductContext.

### ProductManager

It is responsible for aligning product list and form on the screen.
