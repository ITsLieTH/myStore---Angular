# MyStore — Angular E-Commerce Application

A single-page e-commerce application built with Angular 21, featuring product browsing, a shopping cart, and a checkout flow.

**Author:** Laith Khaldoun  
**Repository:** [https://github.com/ITsLieTH/myStore---Angular](https://github.com/ITsLieTH/myStore---Angular)

---

## Features

- Browse a product catalog loaded from a local JSON API
- View individual product details
- Add products to a shopping cart
- Remove items from the cart
- Checkout with form validation
- Order confirmation page

---

## Tech Stack

- **Angular 21** — standalone components, new control flow syntax (`@for`, `@if`)
- **TypeScript**
- **RxJS** — for HTTP data streams
- **Angular Router** — client-side routing
- **Angular Forms** — template-driven forms with `ngModel` and `ngModelChange`
- **HttpClient** — fetching product data from a local JSON file

---

## Project Structure

```
src/
├── app/
│   ├── cart/               # Cart page component
│   ├── cart-item/          # Cart item child component (@Output / EventEmitter)
│   ├── checkout/           # Checkout form component
│   ├── confirmation/       # Order confirmation component
│   ├── nav-bar/            # Navigation bar component
│   ├── product-details/    # Product details page component
│   ├── product-list/       # Product listing page component
│   ├── models/             # TypeScript interfaces (Product)
│   └── services/           # ProductService, CartService
├── public/
│   └── data.json           # Local product data
└── styles.css              # Global styles
```

---

## Angular Concepts Demonstrated

| Concept | Where Used |
|---|---|
| `HttpClient` + `provideHttpClient()` | `ProductService`, `app.config.ts` |
| `@Input` / `@Output` / `EventEmitter` | `CartItem` → `Cart` communication |
| `ngModel` + `ngModelChange` | Checkout form inputs |
| `ChangeDetectorRef` | `ProductList`, `ProductDetails` — zoneless change detection |
| Angular Router | All page navigation |
| Template-driven forms | Checkout with validation |
| Services | `CartService` shared between components |
| Standalone components | All components |

---

## Getting Started

### Prerequisites

- Node.js v18+
- Angular CLI v21+

### Installation

```bash
git clone https://github.com/ITsLieTH/myStore---Angular
cd myStore---Angular
npm install
```

### Running the App

```bash
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

---

## Notes

This project uses **zoneless change detection** (`provideZonelessChangeDetection()`), which is the default in Angular 21. As a result, `ChangeDetectorRef.detectChanges()` is called explicitly after async HTTP responses to trigger view updates.
